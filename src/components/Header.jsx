import { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };
    
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  useEffect(() => {
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  }, [location]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsSearchOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', path: '/home' },
    { label: 'Shop', path: '/shop' },
    { label: 'New Arrivals', path: '/new-arrivals' },
    { label: 'Collections', path: '/collections' },
    { label: 'About', path: '/about' },
  ];

  const isActive = (path) => location.pathname === path;
  const isHomePage = location.pathname === '/';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled || !isHomePage
          ? 'header-light bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'header-dark bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12 py-4 sm:py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex-1 min-w-0">
            <Link to="/">
              <h1 className={`text-base sm:text-lg md:text-xl font-bold tracking-widest transition-colors duration-500 cursor-pointer hover:opacity-80 truncate ${
                isScrolled || !isHomePage ? 'text-black' : 'text-white'
              }`}>
                JONAYNS
              </h1>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-center flex-1 gap-6 lg:gap-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                to={item.path}
                className={`nav-link text-xs lg:text-sm font-medium transition-all duration-300 whitespace-nowrap ${
                  isActive(item.path) 
                    ? 'opacity-100 underline' 
                    : isScrolled || !isHomePage
                      ? 'text-black hover:opacity-60' 
                      : 'text-white hover:opacity-60'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Icons */}
          <div className="flex-1 flex items-center justify-end gap-2 md:gap-4 lg:gap-6">
            {/* Search */}
            <button 
              className="header-icon-btn"
              onClick={() => setIsSearchOpen(!isSearchOpen)}
              aria-label="Search"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>

            {/* Account - hidden on small screens */}
            <Link to="/account" className="header-icon-btn hidden sm:flex" aria-label="Account">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </Link>

            {/* Wishlist - hidden on small screens */}
            <Link to="/wishlist" className="header-icon-btn hidden sm:flex" aria-label="Wishlist">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </Link>

            {/* Cart */}
            <Link to="/cart" className="header-icon-btn" aria-label="Cart">
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              className={`md:hidden header-icon-btn transition-all duration-300 px-2 py-2 rounded ${
                isScrolled || !isHomePage
                  ? 'bg-black/5 hover:bg-black/10' 
                  : 'bg-white/10 hover:bg-white/20'
              } ${isMobileMenuOpen ? 'rotate-90' : ''}`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Menu"
            >
              <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
        </div>

        {/* Search Overlay */}
        {isSearchOpen && (
          <div className="mt-4 sm:mt-6 pb-4 animate-fade-in">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                autoFocus
                className={`w-full px-3 sm:px-4 py-2 sm:py-3 bg-gray-100 border-b-2 transition-colors duration-300 focus:outline-none text-sm sm:text-base ${
                  isScrolled || !isHomePage
                    ? 'border-black text-black placeholder-gray-600' 
                    : 'border-white/50 text-white placeholder-white/50'
                }`}
              />
              <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2" aria-label="Submit search">
                <svg className={`w-4 h-4 sm:w-5 sm:h-5 transition-colors duration-300 ${isScrolled || !isHomePage ? 'text-black' : 'text-white'}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>
            </form>
          </div>
        )}

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 sm:mt-6 pb-4 border-t transition-all duration-300 animate-fade-in ${
            isScrolled || !isHomePage ? 'border-gray-200' : 'border-white/10'
          }`}>
            <div className="flex flex-col gap-3 sm:gap-4 pt-4">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                    isActive(item.path)
                      ? isScrolled || !isHomePage
                        ? 'text-black font-bold underline' 
                        : 'text-white font-bold underline'
                      : isScrolled || !isHomePage
                        ? 'text-black hover:text-gray-600' 
                        : 'text-white hover:text-gray-300'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <hr className={`my-2 ${isScrolled || !isHomePage ? 'border-gray-200' : 'border-white/10'}`} />
              <Link
                to="/account"
                className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
                }`}
              >
                Account
              </Link>
              <Link
                to="/wishlist"
                className={`text-xs sm:text-sm font-medium transition-colors duration-300 ${
                  isScrolled || !isHomePage ? 'text-black hover:text-gray-600' : 'text-white hover:text-gray-300'
                }`}
              >
                Wishlist
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
