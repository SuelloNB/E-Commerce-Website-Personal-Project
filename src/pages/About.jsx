import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function About() {
  const titleRef = useScrollReveal();
  const imageRef = useScrollReveal();
  const contentRef = useScrollReveal();

  return (
    <div className="w-full bg-white">
      <Header />
      
      <section className="pt-24 md:pt-32 pb-20 md:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          {/* Hero Title */}
          <div ref={titleRef} className="scroll-reveal mb-16 md:mb-20">
            <p className="text-uppercase mb-4 tracking-widest text-gray-600">Our Story</p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black">
              JONAYNS
            </h1>
          </div>

          {/* Main Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 items-center mb-20 md:mb-28">
            {/* Image */}
            <div ref={imageRef} className="scroll-reveal order-2 md:order-1">
              <div className="aspect-square bg-gray-100 rounded-sm overflow-hidden">
                <img
                  src="/images/street-wear.jpg"
                  alt="JONAYNS story"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div ref={contentRef} className="scroll-reveal order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-bold text-black mb-6 leading-tight">
                Premium Streetwear for the Modern Era
              </h2>
              
              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                JONAYNS represents a bold vision for contemporary fashion. We believe in quality over quantity, timeless design over trends, and authentic expression through style.
              </p>

              <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                Every piece in our collection is carefully crafted to meet exacting standards for fabric, fit, and finish. We partner with premium suppliers and skilled manufacturers who share our commitment to excellence.
              </p>

              <p className="text-lg text-gray-700 leading-relaxed">
                Our mission is simple: create pieces that become staples in your wardrobe. Pieces that transcend season and trend. Pieces that make you feel confident, authentic, and forward-thinking.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-20 md:mb-28">
            <h2 className="text-4xl md:text-5xl font-bold text-black mb-12 scroll-reveal">
              Our Values
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              {[
                {
                  title: 'Quality',
                  description: 'Premium materials and meticulous craftsmanship in every piece. We never compromise on construction or durability.',
                },
                {
                  title: 'Authenticity',
                  description: 'True to our vision. JONAYNS celebrates individual expression and bold design without chasing trends.',
                },
                {
                  title: 'Sustainability',
                  description: 'Responsible production practices. We care about our impact on communities and the environment.',
                },
              ].map((value, index) => (
                <div key={index} className="scroll-reveal" style={{ animationDelay: `${index * 0.1}s` }}>
                  <h3 className="text-2xl font-bold text-black mb-4">{value.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="bg-black text-white p-12 md:p-16 text-center rounded-sm scroll-reveal">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join the Community</h2>
            <p className="text-gray-300 mb-8 max-w-xl mx-auto">
              Be part of a community that values quality, authenticity, and forward-thinking design.
            </p>
            <button className="btn btn-secondary">
              Shop Now
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
