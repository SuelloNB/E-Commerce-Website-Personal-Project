import { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Account() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const formRef = useScrollReveal();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log('Login:', { email, password });
  };

  const handleSignUp = (e) => {
    e.preventDefault();
    console.log('Sign up:', { name, email, password });
  };

  return (
    <div className="w-full bg-white">
      <Header />
      
      <section className="pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 bg-white">
        <div ref={formRef} className="scroll-reveal max-w-md mx-auto px-3 sm:px-4">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-3 sm:mb-4">
              {isLogin ? 'Login' : 'Create Account'}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-700">
              {isLogin ? 'Sign in to your JONAYNS account' : 'Join JONAYNS and start shopping'}
            </p>
          </div>

          {/* Form */}
          <form onSubmit={isLogin ? handleLogin : handleSignUp} className="mb-8">
            {!isLogin && (
              <div className="mb-5 sm:mb-6">
                <label className="block text-xs sm:text-sm font-bold text-black mb-2">Full Name</label>
                <input
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-black placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
                />
              </div>
            )}

            <div className="mb-5 sm:mb-6">
              <label className="block text-xs sm:text-sm font-bold text-black mb-2">Email Address</label>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-black placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            <div className="mb-6 sm:mb-8">
              <label className="block text-xs sm:text-sm font-bold text-black mb-2">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border border-gray-300 text-black placeholder-gray-600 text-xs sm:text-sm focus:outline-none focus:border-black transition-colors"
              />
            </div>

            {isLogin && (
              <div className="mb-6 sm:mb-8">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    className="w-4 h-4 border border-gray-300 rounded"
                  />
                  <span className="ml-2 text-xs sm:text-sm text-gray-700">Remember me</span>
                </label>
              </div>
            )}

            <button type="submit" className="w-full btn btn-primary mb-3 sm:mb-4 text-xs sm:text-sm">
              {isLogin ? 'Sign In' : 'Create Account'}
            </button>
          </form>

          {/* Toggle */}
          <div className="text-center">
            <p className="text-xs sm:text-sm text-gray-700 mb-3 sm:mb-4">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
            </p>
            <button
              onClick={() => setIsLogin(!isLogin)}
              className="text-black text-xs sm:text-sm font-bold hover:underline transition-all"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </div>

          {/* Info Box */}
          <div className="mt-8 sm:mt-12 p-4 sm:p-8 bg-gray-50 rounded-sm scroll-reveal">
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              By creating an account, you'll be able to save your preferences, track orders, and access exclusive JONAYNS content. We'll never spam you or share your information.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
