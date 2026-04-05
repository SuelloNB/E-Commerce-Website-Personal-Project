import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Wishlist() {
  const [wishlistItems] = useState([
    {
      id: 1,
      name: 'Premium Hoodie',
      price: '$89.00',
      image: '/images/premium-hoodie-black.jpg',
    },
    {
      id: 2,
      name: 'Classic Tee',
      price: '$45.00',
      image: '/images/classic-tee.jpg',
    },
  ]);

  const titleRef = useScrollReveal();

  return (
    <div className="w-full bg-white">
      <Header />
      
      <section className="pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
          {/* Page Header */}
          <div ref={titleRef} className="scroll-reveal mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
              Wishlist
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700">
              Your saved items. Browse and add to cart whenever you're ready.
            </p>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {wishlistItems.map((item, index) => (
                <div key={item.id} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <div className="group">
                    <div className="relative overflow-hidden bg-gray-100 aspect-square mb-3 sm:mb-4 rounded-sm">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
                    </div>
                    
                    <h3 className="text-sm sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2 line-clamp-2">{item.name}</h3>
                    <p className="text-xs sm:text-base text-gray-700 mb-3 sm:mb-4">{item.price}</p>
                    
                    <button className="w-full btn btn-primary mb-2 sm:mb-3 text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3">
                      Add to Cart
                    </button>
                    <button className="w-full btn btn-outline text-xs sm:text-sm px-3 sm:px-4 py-2 sm:py-3">
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20 scroll-reveal">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your wishlist is empty</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-8">Save items to view them later</p>
              <Link to="/shop">
                <button className="btn btn-primary text-xs sm:text-sm">
                  Continue Shopping
                </button>
              </Link>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
