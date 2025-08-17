import { Bath, Bed, ChefHat, Eye, ShoppingCart } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { Product } from "../types";

interface ProductCardProps {
  product: Product;
  viewMode?: "grid" | "list";
}

const ProductCard: React.FC<ProductCardProps> = ({
  product,
  viewMode = "grid",
}) => {
  const { addToCart } = useCart();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    addToCart(product);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const getFeatureIcon = (feature: string) => {
    if (feature.includes("BR") || feature.includes("Bed"))
      return <Bed size={16} />;
    if (feature.includes("Toilet")) return <Bath size={16} />;
    if (feature.includes("Kitchen")) return <ChefHat size={16} />;
    return null;
  };

  if (viewMode === "list") {
    return (
      <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/3">
            <Link to={`/product/${product.id}`}>
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 md:h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </Link>
          </div>
          <div className="flex-1 p-6">
            <div className="flex justify-between items-start mb-4">
              <div>
                <Link to={`/product/${product.id}`}>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 hover:text-gray-600 transition-colors duration-200">
                    {product.name}
                  </h3>
                </Link>
                <p className="text-gray-600 mb-3">{product.description}</p>
                <div className="text-sm text-gray-500 mb-3">
                  {product.dimensions}
                </div>
              </div>
              <div className="text-right">
                <div className="text-2xl font-bold text-gray-600 mb-2">
                  {product.price ? formatPrice(product.price) : "Request Quote"}
                </div>
                {product.category && (
                  <span className="inline-block bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full uppercase font-medium">
                    {product.category}
                  </span>
                )}
              </div>
            </div>

            {product.features && (
              <div className="flex flex-wrap gap-3 mb-4">
                {product.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-1 text-sm text-gray-600 bg-gray-50 px-3 py-1 rounded-full"
                  >
                    {getFeatureIcon(feature)}
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            )}

            <div className="flex space-x-3">
              <Link
                to={`/product/${product.id}`}
                className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Eye size={18} />
                <span>View Details</span>
              </Link>
              <button
                onClick={handleAddToCart}
                className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <ShoppingCart size={18} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group">
      <div className="relative overflow-hidden">
        <Link to={`/product/${product.id}`}>
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </Link>
        {product.category && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-gray-800 text-xs px-3 py-1 rounded-full uppercase font-medium">
            {product.category}
          </span>
        )}
      </div>

      <div className="p-6">
        <Link to={`/product/${product.id}`}>
          <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-gray-600 transition-colors duration-200">
            {product.name}
          </h3>
        </Link>

        <p className="text-gray-600 mb-3 line-clamp-2">{product.description}</p>

        <div className="text-sm text-gray-500 mb-4">{product.dimensions}</div>

        {product.features && (
          <div className="flex flex-wrap gap-2 mb-4">
            {product.features.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex items-center space-x-1 text-xs text-gray-600 bg-gray-50 px-2 py-1 rounded-full"
              >
                {getFeatureIcon(feature)}
                <span>{feature}</span>
              </div>
            ))}
            {product.features.length > 3 && (
              <span className="text-xs text-gray-500 px-2 py-1">
                +{product.features.length - 3} more
              </span>
            )}
          </div>
        )}

        <div className="flex items-center justify-between mb-4">
          <div className="text-2xl font-bold text-gray-600">
            {product.price ? formatPrice(product.price) : "Request Quote"}
          </div>
        </div>

        <div className="flex space-x-3">
          <Link
            to={`/product/${product.id}`}
            className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition-colors duration-200 text-center"
          >
            View Details
          </Link>
          <button
            onClick={handleAddToCart}
            className="flex-1 bg-gray-600 text-white px-4 py-2 rounded-lg font-medium hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2"
          >
            <ShoppingCart size={18} />
            <span>Add to Cart</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
