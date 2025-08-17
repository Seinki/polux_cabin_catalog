import { ArrowLeft, Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import CheckoutModal, { buildOrderMessage } from "../components/CheckoutModal";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQuantity, clearCart } = useCart();
  const [modalOpen, setModalOpen] = useState(false);

  const totalPrice = cart.reduce(
    (sum, item) => sum + (item.price || 0) * item.quantity,
    0
  );
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckoutClick = () => {
    setModalOpen(true);
  };

  const handleProceed = () => {
    setModalOpen(false);
    const orderDetails = {
      name: "", // isi nama user jika ada
      address: "", // isi alamat user jika ada
      phone: "", // isi nomor user jika ada
      items: cart.map((item) => ({
        productName: item.name,
        quantity: item.quantity,
        price: item.price ?? 0,
      })),
      total: totalPrice,
    };
    const message = encodeURIComponent(buildOrderMessage(orderDetails));
    const waLink = `https://wa.me/6285250000690?text=${message}`;
    window.open(waLink, "_blank", "noopener,noreferrer");
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <ShoppingCart className="mx-auto text-gray-400 mb-4" size={64} />
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Your cart is empty
          </h1>
          <p className="text-gray-600 mb-8">
            Start by adding some beautiful cabins to your cart
          </p>
          <Link
            to="/catalog"
            className="inline-flex items-center space-x-2 bg-gray-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-gray-700 transition-colors duration-200"
          >
            <span>Browse Cabins</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900 mb-2">
              Shopping Cart
            </h1>
            <p className="text-gray-600">
              {totalItems} item{totalItems !== 1 ? "s" : ""} in your cart
            </p>
          </div>
          <Link
            to="/catalog"
            className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-700 font-medium transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            <span>Continue Shopping</span>
          </Link>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-6">
            {cart.map((item) => (
              <div
                key={`${item.id}-${Date.now()}`}
                className="bg-white rounded-lg shadow-md p-6"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="md:w-48">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-32 md:h-full object-cover rounded-lg"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900">
                          {item.name}
                        </h3>
                        <p className="text-gray-600 text-sm mt-1">
                          {item.description}
                        </p>
                        {item.dimensions && (
                          <p className="text-gray-500 text-sm mt-2">
                            Dimensions: {item.dimensions}
                          </p>
                        )}
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-red-500 hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors duration-200"
                        title="Remove from cart"
                      >
                        <Trash2 size={20} />
                      </button>
                    </div>

                    {item.features && (
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.features.slice(0, 3).map((feature, index) => (
                          <span
                            key={index}
                            className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    )}

                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(0, item.quantity - 1)
                            )
                          }
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                          title="Decrease quantity"
                        >
                          <Minus size={16} />
                        </button>
                        <span className="font-medium text-lg w-8 text-center">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                          title="Increase quantity"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-600">
                          {item.price
                            ? formatPrice(item.price * item.quantity)
                            : "Request Quote"}
                        </div>
                        {item.price && (
                          <div className="text-sm text-gray-500">
                            {formatPrice(item.price)} each
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-6 sticky top-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">
                Order Summary
              </h2>

              <div className="space-y-4 mb-6">
                <div className="flex justify-between text-gray-600">
                  <span>Items ({totalItems})</span>
                  <span>
                    {totalPrice > 0
                      ? formatPrice(totalPrice)
                      : "Quote Required"}
                  </span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Installation</span>
                  <span>Contact for quote</span>
                </div>
                <div className="flex justify-between text-gray-600">
                  <span>Delivery</span>
                  <span>Contact for quote</span>
                </div>
                <hr />
                <div className="flex justify-between text-xl font-bold text-gray-900">
                  <span>Total</span>
                  <span>
                    {totalPrice > 0 ? formatPrice(totalPrice) : "Request Quote"}
                  </span>
                </div>
              </div>

              <div className="space-y-3">
                <button
                  className="w-full bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
                  onClick={handleCheckoutClick}
                >
                  Checkout via WhatsApp
                </button>
                <button
                  onClick={clearCart}
                  className="w-full border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-50 transition-colors duration-200"
                >
                  Clear Cart
                </button>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded-lg">
                <h3 className="font-semibold text-gray-900 mb-2">
                  What happens next?
                </h3>
                <ul className="text-sm text-gray-800 space-y-1">
                  <li>• Our team will contact you via WhatsApp</li>
                  <li>• We'll discuss customizations and details</li>
                  <li>• Receive delivery and installation quotes</li>
                  <li>• Confirm your order and payment</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <CheckoutModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        onProceed={handleProceed}
        orderDetails={{
          name: "", // Provide user's name or leave empty for now
          address: "", // Provide user's address or leave empty for now
          phone: "", // Provide user's phone or leave empty for now
          items: cart.map((item) => ({
            productName: item.name,
            quantity: item.quantity,
            price: item.price ?? 0,
          })),
          total: totalPrice,
        }}
      />
    </div>
  );
};

export default Cart;
