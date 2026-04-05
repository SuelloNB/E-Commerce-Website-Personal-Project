import { useScrollReveal } from '../hooks/useScrollReveal';

export default function Marquee() {
  const phrases = ['PREMIUM STREETWEAR', 'BOLD DESIGNS', 'MINIMAL AESTHETIC', 'QUALITY CRAFTED'];
  const marqueeRef = useScrollReveal();
  
  return (
    <section className="py-12 md:py-16 bg-black text-white overflow-hidden scroll-reveal" ref={marqueeRef}>
      <div className="flex whitespace-nowrap">
        <div className="animate-scroll inline-flex gap-12 md:gap-20">
          {[...phrases, ...phrases].map((phrase, index) => (
            <span key={index} className="text-2xl md:text-4xl font-bold tracking-wider">
              {phrase}
            </span>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 20s linear infinite;
        }
      `}</style>
    </section>
  );
}
