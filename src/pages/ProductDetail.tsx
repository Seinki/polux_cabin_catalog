import {
<<<<<<< HEAD
  AirVent,
  ArrowLeft,
  Ban,
  Bath,
  Bed,
  BedDouble,
  DoorClosed,
  DoorOpen,
  Gem,
  Lamp,
  Lightbulb,
=======
  ArrowLeft,
  Bath,
  Bed,
  ChefHat,
>>>>>>> 127d8eaa8d54b158eab95f2762a3d4491f33296f
  Package,
  Ruler,
  ShoppingCart,
} from "lucide-react";
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { products } from "../data/products";

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Product Not Found
          </h1>
          <Link
            to="/catalog"
            className="text-gray-600 hover:text-gray-700 font-medium"
          >
            Return to Catalog
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      addToCart(product);
    }
    setQuantity(1);
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
<<<<<<< HEAD
    if (feature.includes("Bedroom")) return <BedDouble size={20} />;
    if (feature.includes("Non Furnished")) return <Ban size={20} />;
    if (feature.includes("AC")) return <AirVent size={20} />;
    if (feature.includes("Toiletries")) return <Bath size={20} />;
    if (feature.includes("Waterheater")) return <Gem size={20} />;
    if (feature.includes("Smartdoor")) return <DoorOpen size={20} />;
    if (feature.includes("Downlight")) return <Lamp size={20} />;
    if (feature.includes("LED")) return <Lightbulb size={20} />;
=======
    if (feature.includes("BR") || feature.includes("Bed"))
      return <Bed size={20} />;
    if (feature.includes("Toilet")) return <Bath size={20} />;
    if (feature.includes("Kitchen")) return <ChefHat size={20} />;
    if (feature.includes("m")) return <Ruler size={20} />;
>>>>>>> 127d8eaa8d54b158eab95f2762a3d4491f33296f
    return <Package size={20} />;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Breadcrumb */}
        <div className="flex items-center space-x-2 text-sm text-gray-600 mb-8">
          <Link
            to="/"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            Home
          </Link>
          <span>/</span>
          <Link
            to="/catalog"
            className="hover:text-gray-600 transition-colors duration-200"
          >
            Catalog
          </Link>
          <span>/</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        {/* Back Button */}
        <Link
          to="/catalog"
          className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium mb-8 transition-colors duration-200"
        >
          <ArrowLeft size={20} />
          <span>Back to Catalog</span>
        </Link>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="space-y-4">
            <div className="aspect-square overflow-hidden rounded-2xl shadow-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              {product.category && (
                <span className="inline-block bg-gray-100 text-gray-800 text-sm px-3 py-1 rounded-full uppercase font-medium mb-4">
                  {product.category} Series
                </span>
              )}
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Dimensions */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-2 mb-3">
                <Ruler className="text-gray-600" size={24} />
                <h3 className="text-lg font-semibold text-gray-900">
                  Dimensions
                </h3>
              </div>
              <p className="text-2xl font-bold text-gray-600">
                {product.dimensions}
              </p>
            </div>

            {/* Features */}
            {product.features && (
              <div className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">
                  Features & Specifications
                </h3>
                <div className="grid sm:grid-cols-2 gap-3">
                  {product.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg"
                    >
                      <div className="text-gray-600">
                        {getFeatureIcon(feature)}
                      </div>
                      <span className="text-gray-700 font-medium">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Price */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="text-3xl font-bold text-gray-600 mb-4">
<<<<<<< HEAD
                {product.price ? formatPrice(product.price) : "Custom"}
=======
                {product.price ? formatPrice(product.price) : "Request Quote"}
>>>>>>> 127d8eaa8d54b158eab95f2762a3d4491f33296f
              </div>
              {product.price && (
                <p className="text-sm text-gray-500">
                  Price includes basic configuration. Additional customizations
                  may apply.
                </p>
              )}
            </div>

            {/* Add to Cart */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex items-center space-x-4 mb-4">
                <label
                  htmlFor="quantity"
                  className="text-sm font-medium text-gray-700"
                >
                  Quantity:
                </label>
                <select
                  id="quantity"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                >
                  {[1, 2, 3, 4, 5].map((num) => (
                    <option key={num} value={num}>
                      {num}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-gray-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center space-x-2 shadow-md"
                >
                  <ShoppingCart size={20} />
                  <span>Add to Cart</span>
                </button>
                <Link
                  to="/custom"
                  className="flex-1 border-2 border-gray-600 text-gray-600 px-6 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-200 text-center"
                >
                  Customize This Design
                </Link>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-gray-900 to-slate-800 text-white p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">
                Need More Information?
              </h3>
              <p className="text-gray-100 mb-4">
                Our team is ready to help you with customizations, delivery, and
                installation details.
              </p>
              <a
                href="https://wa.me/6281234567890?text=Hello%20Polux%20Cabin%2C%20I%20would%20like%20to%20order%20a%20cabin"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold shadow-lg transition-all"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Products
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {products
              .filter(
                (p) => p.category === product.category && p.id !== product.id
              )
              .slice(0, 3)
              .map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  to={`/product/${relatedProduct.id}`}
                  className="bg-white rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-gray-600 text-sm mb-2 line-clamp-2">
                      {relatedProduct.description}
                    </p>
                    <div className="text-gray-800 font-semibold">
                      {relatedProduct.price
                        ? formatPrice(relatedProduct.price)
<<<<<<< HEAD
                        : "Custom"}
=======
                        : "Request Quote"}
>>>>>>> 127d8eaa8d54b158eab95f2762a3d4491f33296f
                    </div>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
