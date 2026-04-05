import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';

// Pages
import Home from './pages/Home';
import Shop from './pages/Shop';
import NewArrivals from './pages/NewArrivals';
import Collections from './pages/Collections';
import About from './pages/About';
import Wishlist from './pages/Wishlist';
import Cart from './pages/Cart';
import Account from './pages/Account';
import Search from './pages/Search';

// Page wrapper with animation
function PageWrapper({ children }) {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="animate-fade-in" key={location.pathname}>
      {children}
    </div>
  );
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
      <Route path="/shop" element={<PageWrapper><Shop /></PageWrapper>} />
      <Route path="/new-arrivals" element={<PageWrapper><NewArrivals /></PageWrapper>} />
      <Route path="/collections" element={<PageWrapper><Collections /></PageWrapper>} />
      <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
      <Route path="/wishlist" element={<PageWrapper><Wishlist /></PageWrapper>} />
      <Route path="/cart" element={<PageWrapper><Cart /></PageWrapper>} />
      <Route path="/account" element={<PageWrapper><Account /></PageWrapper>} />
      <Route path="/search" element={<PageWrapper><Search /></PageWrapper>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;
