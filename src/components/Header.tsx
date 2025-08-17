import { Home, Menu, Package, ShoppingCart, Wrench, X } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo-putih-notext.png";
import { useCart } from "../context/CartContext";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const navigation = [
    { name: "Home", href: "/", icon: Home },
    { name: "Catalog", href: "/catalog", icon: Package },
    { name: "Custom Cabin", href: "/custom", icon: Wrench },
  ];

  return (
    <header className="bg-gradient-to-r from-gray-500 to-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center">
              {/* <span className="text-white font-bold text-lg">P</span> */}
              <img
                src={logo}
                alt="Polux Cabin Logo"
                className="w-12 h-12 object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">Polux Cabin</h1>
              <p className="text-xs text-white">Premium Portable Cabins</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className="flex items-center space-x-2 text-white hover:text-polux-yellow transition-colors duration-200 font-medium"
                >
                  <Icon size={18} />
                  <span>{item.name}</span>
                </Link>
              );
            })}
          </nav>

          {/* Cart and Mobile Menu */}
          <div className="flex items-center space-x-4">
            <button
              onClick={() => navigate("/cart")}
              className="relative p-2 text-white hover:text-polux-yellow transition-colors duration-200"
            >
              <ShoppingCart size={30} />
              {totalItems > 0 && (
                <span className="absolute -top-1 -right-1 bg-polux-yellow text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-bold">
                  {totalItems}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-white hover:text-polux-yellow transition-colors duration-200"
            >
              {isMenuOpen ? <X size={30} /> : <Menu size={30} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-white">
            <nav className="flex flex-col space-y-4">
              {navigation.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-2 text-white hover:text-polux-yellow transition-colors duration-200 font-medium py-2"
                  >
                    <Icon size={18} />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
