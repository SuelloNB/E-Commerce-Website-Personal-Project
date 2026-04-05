export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white">
      {/* Main Footer Content */}
      <div className="section-container">
        <div className="max-width-container">
          {/* Brand & Description */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 md:mb-20">
            {/* Brand */}
            <div className="col-span-1 md:col-span-2 lg:col-span-1">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 tracking-tighter">JONAYNS</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Premium streetwear for the modern urban explorer. Bold designs, minimal aesthetic, quality crafted.
              </p>
            </div>

            {/* Shop Links */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Shop</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">All Products</a></li>
                <li><a href="/new-arrivals" className="text-gray-400 text-sm hover:text-white transition-colors">New Arrivals</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Collections</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Sale</a></li>
              </ul>
            </div>

            {/* Customer Service */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Support</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Contact Us</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Returns</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">FAQ</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Shipping</a></li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h4 className="font-bold text-sm uppercase tracking-widest mb-6">Brand</h4>
              <ul className="space-y-3">
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Terms</a></li>
                <li><a href="#" className="text-gray-400 text-sm hover:text-white transition-colors">Careers</a></li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-800 my-12 md:my-16" />

          {/* Bottom Footer */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-400 text-sm">
              <p>&copy; {currentYear} JONAYNS. All rights reserved.</p>
            </div>
            
            {/* Social Links */}
            <div className="flex justify-start md:justify-end gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                Twitter
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                TikTok
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">
                YouTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
