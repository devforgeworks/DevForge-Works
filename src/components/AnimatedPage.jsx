import { useEffect, useState } from 'react';

export const AnimatedPage = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    setIsVisible(true);

    // Cleanup on unmount
    return () => setIsVisible(false);
  }, []);

  return (
    <div
      className={`transition-all duration-500 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-4'
      }`}
    >
      {children}
    </div>
  );
};
