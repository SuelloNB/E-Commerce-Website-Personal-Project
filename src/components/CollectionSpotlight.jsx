import { useScrollReveal } from '../hooks/useScrollReveal';

export default function CollectionSpotlight() {
  const contentRef = useScrollReveal();
  const imageRef = useScrollReveal();

  return (
    <section id="collections" className="section-container bg-white">
      <div className="max-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Content */}
          <div className="scroll-reveal" ref={contentRef}>
            <div className="mb-8">
              <p className="text-uppercase mb-6 tracking-widest text-gray-600">Featured Collection</p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-black leading-tight">
              Spring/Summer 2024
            </h2>

            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              Our latest collection introduces a fresh perspective on urban fashion. Bold silhouettes meet premium materials in pieces designed for those who refuse to compromise on quality or style.
            </p>

            <p className="text-lg text-gray-700 mb-10 leading-relaxed">
              Limited quantities available. Each piece is numbered and signed, making them instant collectibles for the fashion-forward.
            </p>

            <button className="btn btn-primary">
              Shop Collection
            </button>
          </div>

          {/* Right - Image */}
          <div className="order-first md:order-last scroll-reveal" ref={imageRef}>
            <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden">
              <img
                src="/images/spring-summer-collection.jpg"
                alt="Spring Summer collection"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
