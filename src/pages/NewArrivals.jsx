import Header from '../components/Header';
import Footer from '../components/Footer';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function NewArrivals() {
  const newProducts = products.slice(0, 6);
  const titleRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <div className="w-full bg-white">
      <Header />
      
      <section className="pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
          {/* Page Header */}
          <div ref={titleRef} className="scroll-reveal mb-12 sm:mb-16 md:mb-20">
            <p className="text-uppercase mb-3 sm:mb-4 tracking-widest text-gray-600">Latest Drops</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
              New Arrivals
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl">
              Just released. Fresh pieces from JONAYNS featuring the latest designs, colors, and fits for the season.
            </p>
          </div>

          {/* Products Grid */}
          <div ref={gridRef} className="scroll-reveal grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
            {newProducts.map((product, index) => (
              <div key={product.id} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
