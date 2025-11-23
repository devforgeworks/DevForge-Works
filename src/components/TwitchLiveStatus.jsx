import { useState, useEffect } from 'react';

export const TwitchLiveStatus = ({ channelName = "rathoz" }) => {
  const [isLive, setIsLive] = useState(false);
  const [viewerCount, setViewerCount] = useState(0);
  const [gameName, setGameName] = useState("");
  const [accessToken, setAccessToken] = useState(null);

  // Hämta access token
  useEffect(() => {
    const getAccessToken = async () => {
      const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID;
      const clientSecret = import.meta.env.VITE_TWITCH_CLIENT_SECRET;

      if (!clientId || !clientSecret) {
        console.error('Twitch credentials saknas i .env filen');
        return;
      }

      try {
        const response = await fetch(
          `https://id.twitch.tv/oauth2/token?client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials`,
          { method: 'POST' }
        );

        const data = await response.json();
        setAccessToken(data.access_token);
      } catch (error) {
        console.error('Kunde inte hämta access token:', error);
      }
    };

    getAccessToken();
  }, []);

  // Kolla live status
  useEffect(() => {
    if (!accessToken) return;

    const checkLiveStatus = async () => {
      const clientId = import.meta.env.VITE_TWITCH_CLIENT_ID;

      try {
        const response = await fetch(
          `https://api.twitch.tv/helix/streams?user_login=${channelName}`,
          {
            headers: {
              'Client-ID': clientId,
              'Authorization': `Bearer ${accessToken}`
            }
          }
        );

        const data = await response.json();

        if (data.data && data.data.length > 0) {
          const stream = data.data[0];
          setIsLive(true);
          setViewerCount(stream.viewer_count);
          setGameName(stream.game_name);
        } else {
          setIsLive(false);
          setViewerCount(0);
          setGameName("");
        }
      } catch (error) {
        console.error('Kunde inte hämta live status:', error);
        setIsLive(false);
      }
    };

    checkLiveStatus();

    // Uppdatera var 60:e sekund
    const interval = setInterval(checkLiveStatus, 60000);

    return () => clearInterval(interval);
  }, [channelName, accessToken]);

  return (
    <a
      href={`https://twitch.tv/${channelName}`}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative inline-flex items-center font-medium rounded-lg text-sm px-5 py-2.5 text-center transition-all duration-300 hover:-translate-y-0.5 ${
        isLive
          ? 'bg-[#9146ff] text-white border border-[#9146ff] hover:bg-[#772ce8] hover:shadow-lg'
          : 'bg-[#9146ff]/10 text-[#9146ff] border border-[#9146ff]/30 hover:border-[#9146ff] hover:bg-[#9146ff]/20'
      }`}
    >
      {/* Live indicator dot */}
      {isLive && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 border-2 border-[#000000]"></span>
        </span>
      )}

      {/* Offline indicator dot */}
      {!isLive && (
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="relative inline-flex rounded-full h-4 w-4 bg-gray-500 border-2 border-[#000000]"></span>
        </span>
      )}

      {/* Twitch icon */}
      <svg
        className="w-4 h-4 mr-2 transition-transform group-hover:scale-110"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>
      </svg>

      {/* Text content */}
      <span className="flex flex-col items-start">
        <span className="flex items-center gap-2">
          <span className="font-semibold">Twitch</span>
          {isLive ? (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-bold bg-red-500 text-white rounded-md">
              LIVE
            </span>
          ) : (
            <span className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-medium bg-gray-600/50 text-gray-300 rounded-md">
              Offline
            </span>
          )}
        </span>
        {isLive && viewerCount > 0 && (
          <span className="text-xs text-white/80 mt-0.5 flex items-center gap-1">
            <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"></path>
            </svg>
            {viewerCount} • {gameName}
          </span>
        )}
      </span>

      {/* Arrow icon */}
      <svg
        className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path>
      </svg>
    </a>
  );
};
