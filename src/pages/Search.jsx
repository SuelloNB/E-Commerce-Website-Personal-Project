import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ProductCard from '../components/ProductCard';
import { products } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Search() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';
  
  const [searchInput, setSearchInput] = useState(query);

  const filteredProducts = products.filter(
    (product) =>
      product.name.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.category.toLowerCase().includes(searchInput.toLowerCase()) ||
      product.description.toLowerCase().includes(searchInput.toLowerCase())
  );

  const searchBoxRef = useScrollReveal();
  const resultsRef = useScrollReveal();

  return (
    <div className="w-full bg-white">
      <Header />
      
      <section className="pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
          {/* Search Bar */}
          <div ref={searchBoxRef} className="scroll-reveal mb-12 sm:mb-16 md:mb-20">
            <div className="relative max-w-2xl mx-auto mb-6 sm:mb-8">
              <input
                type="text"
                placeholder="Search products..."
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                className="w-full px-4 sm:px-6 py-3 sm:py-4 bg-gray-100 border-2 border-gray-300 text-black placeholder-gray-600 text-sm sm:text-base focus:outline-none focus:border-black transition-colors rounded-sm"
              />
              <svg
                className="absolute right-4 sm:right-6 top-1/2 -translate-y-1/2 w-5 h-5 sm:w-6 sm:h-6 text-gray-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>

            {/* Results count */}
            <div className="text-center">
              <p className="text-xs sm:text-sm md:text-base text-gray-700">
                {searchInput ? (
                  <>
                    Showing <span className="font-bold">{filteredProducts.length}</span> result
                    {filteredProducts.length !== 1 ? 's' : ''} for "<span className="font-bold">{searchInput}</span>"
                  </>
                ) : (
                  'Enter a search term to find products'
                )}
              </p>
            </div>
          </div>

          {/* Results */}
          {filteredProducts.length > 0 ? (
            <div ref={resultsRef} className="scroll-reveal grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
              {filteredProducts.map((product, index) => (
                <div key={product.id} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          ) : searchInput ? (
            <div ref={resultsRef} className="scroll-reveal text-center py-16 sm:py-20">
              <svg
                className="w-12 h-12 sm:w-16 sm:h-16 text-gray-400 mx-auto mb-3 sm:mb-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-2 sm:mb-3">No products found</h2>
              <p className="text-xs sm:text-sm md:text-base text-gray-700 mb-6 sm:mb-8">
                We couldn't find anything matching "<span className="font-bold">{searchInput}</span>"
              </p>
              <p className="text-xs sm:text-sm md:text-base text-gray-600">
                Try searching with different keywords or <a href="/shop" className="underline font-bold">browse all products</a>
              </p>
            </div>
          ) : null}
        </div>
      </section>

      <Footer />
    </div>
  );
}
