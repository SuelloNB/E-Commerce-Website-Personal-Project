import { useScrollReveal } from '../hooks/useScrollReveal';

export default function EditorialSection() {
  const imageRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <section className="section-container bg-black text-white">
      <div className="max-width-container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          {/* Left - Image */}
          <div className="order-2 md:order-1 scroll-reveal" ref={imageRef}>
            <div className="aspect-square bg-gray-800 rounded-sm overflow-hidden">
              <img
                src="/images/urban-essentials.jpg"
                alt="Editorial campaign"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 md:order-2 scroll-reveal" ref={contentRef}>
            <div className="mb-8">
              <p className="text-uppercase mb-6 tracking-widest text-gray-400">The JONAYNS Story</p>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Premium Streetwear for the Modern Era
            </h2>

            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              JONAYNS represents a bold vision for contemporary fashion. We believe in quality over quantity, timeless design over trends, and authentic expression through style.
            </p>

            <p className="text-lg text-gray-300 mb-10 leading-relaxed">
              Each piece is carefully crafted to meet our exacting standards for fabric, fit, and finish. We're committed to creating pieces that become staples in your wardrobe.
            </p>

            <button className="btn btn-primary">
              Read Our Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
