import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Newsletter() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const sectionRef = useScrollReveal();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  return (
    <section className="section-container bg-white scroll-reveal" ref={sectionRef}>
      <div className="max-w-2xl mx-auto text-center">
        <div className="mb-8">
          <p className="text-uppercase mb-6 tracking-widest text-gray-600">Stay Updated</p>
        </div>

        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black">
          Join the JONAYNS Community
        </h2>

        <p className="text-lg text-gray-700 mb-10 max-w-xl mx-auto leading-relaxed">
          Be the first to know about new collections, exclusive releases, and premium content from JONAYNS.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="flex-1 px-6 py-4 bg-gray-100 border border-gray-300 text-black placeholder-gray-600 focus:outline-none focus:border-black transition-colors"
          />
          <button
            type="submit"
            className="btn btn-primary"
          >
            Subscribe
          </button>
        </form>

        {subscribed && (
          <p className="mt-6 text-sm text-gray-700">
            Thank you for subscribing! Check your email for updates.
          </p>
        )}
      </div>
    </section>
  );
}
