import { useState } from 'react';

export default function ProductCard({ product }) {
  const [imageIndex, setImageIndex] = useState(0);

  const toggleImage = () => {
    setImageIndex(imageIndex === 0 ? 1 : 0);
  };

  const images = [product.image, product.image2];

  return (
    <div className="group">
      <div className="product-card mb-3 sm:mb-4 cursor-pointer" onClick={toggleImage}>
        <img
          src={images[imageIndex]}
          alt={product.name}
          className="product-image"
        />

        {/* Tag Badge */}
        {product.tag && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 z-20">
            <span className={`text-uppercase px-2 sm:px-3 py-1 sm:py-2 text-white text-xs ${
              product.tag === 'New' ? 'bg-black' :
              product.tag === 'Limited' ? 'bg-gray-800' :
              'bg-gray-400'
            }`}>
              {product.tag}
            </span>
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-all duration-300 z-10" />

        {/* Quick View Button */}
        <div className="absolute inset-0 flex items-end justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 p-3 sm:p-4 z-20">
          <button className="btn-primary w-full text-xs sm:text-sm px-4">
            Quick View
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="space-y-1 sm:space-y-2">
        <h3 className="text-xs sm:text-sm md:text-base font-semibold line-clamp-2 group-hover:underline transition-all">
          {product.name}
        </h3>
        <p className="text-xs text-gray-600">{product.category}</p>
        <p className="text-xs sm:text-sm md:text-base font-bold">{product.price}</p>
      </div>
    </div>
  );
}
