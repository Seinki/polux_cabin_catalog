import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";
import logo from "./assets/logo-putih.png";
import Header from "./components/Header";
import ScrollToTop from "./components/ScrollToTop";
import { CartProvider } from "./context/CartContext";
import Cart from "./pages/Cart";
import CustomCabin from "./pages/CustomCabin";
import Home from "./pages/Home";
import ProductCatalog from "./pages/ProductCatalog";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen bg-white">
          <ScrollToTop />
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalog" element={<ProductCatalog />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/custom" element={<CustomCabin />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>

          {/* Footer Section */}
          <footer className="bg-blue-900 text-white py-12 bg-gradient-to-r from-gray-500 to-slate-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-4 gap-8">
              {/* Brand */}
              <div>
                <img src={logo} alt="Polux Cabin Logo" className="w-32" />
                {/* <h3 className="text-1xl font-bold mb-4">Polux Cabin</h3> */}
                <p className="text-white text-sm">
                  Indonesia’s First Portable Cabin Revolution
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-blue-200 text-sm">
                  <li>
                    <Link to="/" className="hover:text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/catalog" className="hover:text-white">
                      Catalog
                    </Link>
                  </li>
                  <li>
                    <Link to="/custom" className="hover:text-white">
                      Custom Cabin
                    </Link>
                  </li>
                  <li>
                    <Link to="/about" className="hover:text-white">
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link to="/contact" className="hover:text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div>
                <h4 className="font-semibold mb-4">Contact</h4>
                <p className="text-white text-sm">📍 Bandung, Indonesia</p>
                <p className="text-white text-sm">📧 info@poluxcabin.com</p>
                <p className="text-white text-sm">
                  📱 WhatsApp:
                  <a
                    href="https://wa.me/6285250000690"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="ml-1 text-blue-200 hover:underline"
                  >
                    +62 852-5000-0690
                  </a>
                </p>
              </div>

              {/* CTA WhatsApp */}
              <div className="flex flex-col items-start">
                <h4 className="font-semibold mb-4">Get a Quote</h4>
                <a
                  href="https://wa.me/6281234567890?text=Hello%20Polux%20Cabin%2C%20I%20would%20like%20to%20order%20a%20cabin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-lg transition-all"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="mt-10 border-t border-gray-500 pt-6 text-center text-blue-300 text-sm">
              © {new Date().getFullYear()} Polux Cabin. All Rights Reserved. |
              <Link to="/terms" className="hover:text-white ml-1">
                Terms
              </Link>{" "}
              |
              <Link to="/privacy" className="hover:text-white ml-1">
                Privacy
              </Link>
            </div>
          </footer>
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;
