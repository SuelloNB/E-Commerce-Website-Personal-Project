export default function Hero() {
  return (
    <section className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-slate-900 via-slate-950 to-black text-white relative overflow-hidden pt-16 md:pt-20">
      {/* Premium background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/30 to-black/60 z-10" />
      
      {/* Subtle radial accent - hidden on small screens */}
      <div className="hidden sm:block absolute top-0 right-0 w-48 h-48 md:w-96 md:h-96 bg-white/5 rounded-full blur-3xl z-0" />

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto px-4 sm:px-6 md:px-8 lg:px-12 text-center">
        <div className="mb-6 md:mb-8 hero-label">
          <p className="text-uppercase mb-4 md:mb-6 tracking-widest text-white/70 hover:text-white transition-colors text-xs sm:text-sm">
            Premium Streetwear
          </p>
        </div>

        <h1 className="hero-title text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4 md:mb-6 text-white">
          JONAYNS
        </h1>

        <p className="hero-subtitle text-sm sm:text-base md:text-lg text-gray-300 mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed">
          Curated streetwear for the modern urban explorer. Bold designs, premium quality, minimal aesthetic.
        </p>

        <div className="hero-buttons flex flex-col xs:flex-row gap-4 md:gap-6 justify-center items-center px-2 sm:px-0">
          <button className="btn btn-primary w-full sm:w-auto text-xs sm:text-sm px-6 md:px-10">
            Shop New Arrivals
          </button>
          <button className="btn btn-secondary w-full sm:w-auto text-xs sm:text-sm px-6 md:px-10">
            Explore Collections
          </button>
        </div>
      </div>

      {/* Premium scroll indicator - hidden on very small screens */}
      <div className="hidden sm:flex absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 z-20 scroll-indicator cursor-pointer">
        <svg
          className="w-5 h-5 md:w-6 md:h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}
