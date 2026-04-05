import { categories } from '../data/products';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Categories() {
  const sectionRef = useScrollReveal();

  return (
    <section className="section-container bg-white">
      <div className="max-width-container">
        <div className="mb-16 md:mb-20 scroll-reveal">
          <p className="text-uppercase mb-4 tracking-widest text-gray-600">Shop By Category</p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black">
            Curated Collections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8" ref={sectionRef}>
          {categories.map((category, index) => (
            <div
              key={category.id}
              className="group relative overflow-hidden bg-gray-100 aspect-square cursor-pointer scroll-reveal"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <img
                src={category.image}
                alt={category.name}
                className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-30 transition-opacity duration-300" />

              {/* Text Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <h3 className="text-3xl md:text-4xl font-bold text-white drop-shadow-lg group-hover:scale-105 transition-transform duration-300">
                    {category.name}
                  </h3>
                </div>
              </div>

              {/* Border animation on hover */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-white transition-all duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
