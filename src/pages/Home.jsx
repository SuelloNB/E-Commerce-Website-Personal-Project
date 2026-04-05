import Header from '../components/Header';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import FeaturedProducts from '../components/FeaturedProducts';
import EditorialSection from '../components/EditorialSection';
import CollectionSpotlight from '../components/CollectionSpotlight';
import Marquee from '../components/Marquee';
import Newsletter from '../components/Newsletter';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="w-full bg-white">
      <Header />
      <Hero />
      <Categories />
      <FeaturedProducts />
      <EditorialSection />
      <CollectionSpotlight />
      <Marquee />
      <Newsletter />
      <Footer />
    </div>
  );
}
