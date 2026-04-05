import { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Cart() {
  const [cartItems] = useState([
    {
      id: 1,
      name: 'Premium Hoodie - Black',
      price: 89.00,
      quantity: 1,
      image: '/images/premium-hoodie-black.jpg',
    },
    {
      id: 2,
      name: 'Classic Tee - White',
      price: 45.00,
      quantity: 2,
      image: '/images/classic-white-tee.jpg',
    },
  ]);

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 10.00;
  const tax = (subtotal + shipping) * 0.1;
  const total = subtotal + shipping + tax;

  const titleRef = useScrollReveal();
  const itemsRef = useScrollReveal();

  return (
    <div className="w-full bg-white">
      <Header />
      
      <section className="pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
          {/* Page Header */}
          <div ref={titleRef} className="scroll-reveal mb-12 sm:mb-16 md:mb-20">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
              Shopping Cart
            </h1>
          </div>

          {cartItems.length > 0 ? (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 md:gap-12">
              {/* Cart Items */}
              <div ref={itemsRef} className="scroll-reveal lg:col-span-2">
                {cartItems.map((item, index) => (
                  <div key={item.id} className="scroll-reveal flex gap-3 sm:gap-6 pb-6 sm:pb-8 border-b border-gray-200 mb-6 sm:mb-8" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 bg-gray-100 rounded-sm overflow-hidden flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-black mb-1 sm:mb-2 line-clamp-2">{item.name}</h3>
                      <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4">${item.price.toFixed(2)}</p>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4">
                        <div className="flex items-center border border-gray-300 w-fit">
                          <button className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm">−</button>
                          <span className="px-3 sm:px-4 py-1 border-l border-r border-gray-300 text-sm">{item.quantity}</span>
                          <button className="px-2 sm:px-3 py-1 hover:bg-gray-100 text-sm">+</button>
                        </div>
                        <button className="text-xs sm:text-sm text-gray-600 hover:text-black transition-colors">
                          Remove
                        </button>
                      </div>
                    </div>
                    
                    <div className="text-right flex-shrink-0">
                      <p className="text-base sm:text-lg md:text-xl font-bold text-black">
                        ${(item.price * item.quantity).toFixed(2)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Order Summary */}
              <div className="scroll-reveal bg-gray-50 p-6 sm:p-8 rounded-sm h-fit">
                <h2 className="text-xl sm:text-2xl font-bold text-black mb-6">Order Summary</h2>
                
                <div className="space-y-3 sm:space-y-4 mb-8">
                  <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                    <span>Subtotal</span>
                    <span>${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm sm:text-base">
                    <span>Shipping</span>
                    <span>${shipping.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-gray-700 text-sm sm:text-base pb-4 border-b border-gray-200">
                    <span>Tax</span>
                    <span>${tax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-lg sm:text-2xl font-bold text-black pt-4">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>

                <button className="w-full btn btn-primary mb-3 sm:mb-4 text-xs sm:text-sm">
                  Proceed to Checkout
                </button>
                <Link to="/shop">
                  <button className="w-full btn btn-outline text-xs sm:text-sm">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          ) : (
            <div className="text-center py-16 sm:py-20 scroll-reveal">
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4">Your cart is empty</h2>
              <p className="text-sm sm:text-base text-gray-700 mb-8">Start shopping to add items to your cart</p>
              <Link to="/shop">
                <button className="btn btn-primary text-xs sm:text-sm">
                  Shop Now
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
