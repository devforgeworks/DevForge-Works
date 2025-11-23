import { useState } from 'react';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch('https://formspree.io/f/xqajqrlj', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="relative bg-gradient-to-b from-[#0a0a0a] to-[#000000] scroll-mt-16 overflow-hidden">
      {/* Subtle Grid Background */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>

      {/* Minimal Accent Elements */}
      <div className="absolute top-20 right-10 w-24 h-24 border border-tech-accent rounded-lg rotate-12 opacity-20"></div>
      <div className="absolute bottom-20 left-10 w-20 h-20 border border-tech-teal rounded-full opacity-20"></div>

      <div className="relative z-10 py-16 px-4 mx-auto max-w-7xl lg:py-24 lg:px-6">
        <div className="mx-auto max-w-screen-md text-center mb-12 lg:mb-16">
          {/* Section Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full glass border border-tech-accent">
            <svg className="w-4 h-4 text-[#0071e3]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
            <span className="text-sm font-medium text-[#86868b] tracking-wide">Contact</span>
          </div>

          <h2 className="mb-6 text-4xl md:text-5xl tracking-tight font-bold text-white">
            Get In Touch
          </h2>
          <p className="text-[#86868b] sm:text-lg">
            Have a project or collaboration idea? Let's connect.
          </p>
        </div>

        <div className="mx-auto max-w-2xl">
          <form onSubmit={handleSubmit} className="space-y-6 p-8 glass rounded-2xl border border-tech">
            {/* Name Input */}
            <div>
              <label
                htmlFor="name"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 text-sm text-white bg-[#0a0a0a] border border-tech rounded-lg focus:ring-2 focus:ring-[#0071e3] focus:border-[#0071e3] transition-all duration-300 placeholder-[#86868b]"
                placeholder="John Doe"
              />
            </div>

            {/* Email Input */}
            <div>
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="block w-full px-4 py-3 text-sm text-white bg-[#0a0a0a] border border-tech rounded-lg focus:ring-2 focus:ring-[#0071e3] focus:border-[#0071e3] transition-all duration-300 placeholder-[#86868b]"
                placeholder="john@example.com"
              />
            </div>

            {/* Message Textarea */}
            <div>
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-white"
              >
                Your Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="block w-full px-4 py-3 text-sm text-white bg-[#0a0a0a] border border-tech rounded-lg focus:ring-2 focus:ring-[#0071e3] focus:border-[#0071e3] transition-all duration-300 resize-none placeholder-[#86868b]"
                placeholder="Tell me about your project..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full inline-flex items-center justify-center px-6 py-3 text-base font-medium text-center text-white bg-[#0071e3] rounded-lg transition-all duration-300 hover:bg-[#005bb5] hover:shadow-lg hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              {isSubmitting ? (
                <>
                  <svg
                    className="w-5 h-5 mr-2 animate-spin"
                    fill="none"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    />
                  </svg>
                  Sending...
                </>
              ) : (
                <>
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  Send Message
                </>
              )}
            </button>

            {/* Success Message */}
            {submitStatus === 'success' && (
              <div className="p-4 text-sm rounded-lg bg-green-500/10 border border-green-500/30 animate-fade-in">
                <div className="flex items-center text-green-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Message sent successfully! I'll get back to you soon.</span>
                </div>
              </div>
            )}

            {/* Error Message */}
            {submitStatus === 'error' && (
              <div className="p-4 text-sm rounded-lg bg-red-500/10 border border-red-500/30 animate-fade-in">
                <div className="flex items-center text-red-500">
                  <svg
                    className="w-5 h-5 mr-2"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="font-medium">Something went wrong. Please try again.</span>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};
