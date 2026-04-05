import Header from '../components/Header';
import Footer from '../components/Footer';
import { useScrollReveal } from '../hooks/useScrollReveal';

const collections = [
  {
    id: 1,
    name: 'Spring/Summer 2024',
    description: 'Bold silhouettes meet premium materials. Fresh perspective on urban fashion with limited-edition pieces.',
    image: '/images/spring-summer-collection.jpg',
    itemCount: 12,
  },
  {
    id: 2,
    name: 'Heritage Essentials',
    description: 'Timeless wardrobe staples. Premium basics designed to last, in signature JONAYNS style.',
    image: '/images/heritage-essentials.jpg',
    itemCount: 18,
  },
  {
    id: 3,
    name: 'Limited Edition',
    description: 'Numbered and signed collectible pieces. Exclusive drops for the dedicated community.',
    image: '/images/limited-edition.jpg',
    itemCount: 8,
  },
  {
    id: 4,
    name: 'Collaborate Series',
    description: 'Curated partnerships with creative minds define this collection, bringing together distinct perspectives, bold expression, and a shared commitment.',
    image: '/images/collaborate-series.jpg',
    itemCount: 6,
  },
];

function CollectionCard({ collection }) {
  const ref = useScrollReveal();

  return (
    <div ref={ref} className="scroll-reveal group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-100 aspect-square mb-4 sm:mb-6 rounded-sm">
        <img
          src={collection.image}
          alt={collection.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300" />
      </div>
      
      <div>
        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black mb-2 sm:mb-3 group-hover:underline transition-all">
          {collection.name}
        </h3>
        <p className="text-sm sm:text-base text-gray-700 mb-3 sm:mb-4 leading-relaxed">
          {collection.description}
        </p>
        <p className="text-xs sm:text-sm text-gray-600 mb-4 sm:mb-6">
          {collection.itemCount} items
        </p>
        <button className="btn btn-outline text-xs sm:text-sm px-4 sm:px-6">
          Shop Collection
        </button>
      </div>
    </div>
  );
}

export default function Collections() {
  return (
    <div className="w-full bg-white">
      <Header />
      
      <section className="pt-20 md:pt-24 lg:pt-32 pb-12 sm:pb-16 md:pb-20 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-8 lg:px-12">
          {/* Page Header */}
          <div className="mb-12 sm:mb-16 md:mb-20">
            <p className="text-uppercase mb-3 sm:mb-4 tracking-widest text-gray-600">Curated Collections</p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-4 md:mb-6">
              Collections
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-700 max-w-2xl">
              Explore our themed collections. Each series tells a story of premium craftsmanship and design vision.
            </p>
          </div>

          {/* Collections Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
            {collections.map((collection) => (
              <CollectionCard key={collection.id} collection={collection} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
