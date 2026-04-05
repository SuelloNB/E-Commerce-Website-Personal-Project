import ProductCard from './ProductCard';
import { products } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FeaturedProducts() {
  const featuredProducts = products.filter(p => p.featured).slice(0, 6);
  const sectionRef = useScrollReveal();

  return (
    <section id="new" className="section-container bg-white">
      <div className="max-width-container">
        <div className="mb-12 sm:mb-16 md:mb-20 scroll-reveal">
          <p className="text-uppercase mb-3 sm:mb-4 tracking-widest text-gray-600">New Arrivals</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Featured Products
          </h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12" ref={sectionRef}>
          {featuredProducts.map((product, index) => (
            <div
              key={product.id}
              className="scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>

        {/* View All Button - Premium Redesign */}
        <div className="flex justify-center mt-12 sm:mt-16 md:mt-20 scroll-reveal">
          <button className="btn-view-all text-xs sm:text-sm md:text-base px-4 sm:px-8 md:px-10 py-3 sm:py-4">
            View All Products
            <svg className="inline-block" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
