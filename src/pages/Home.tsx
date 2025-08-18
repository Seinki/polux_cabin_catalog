import {
  ArrowRight,
  Home as HomeIcon,
  Package,
  Star,
  Wrench,
} from "lucide-react";
import { Link } from "react-router-dom";
import jumboTron from "../assets/polux-industries.jpg";
import polux_cubebin_compact from "../assets/products/Polux-Cubebin-compact.png";
import polux_custom from "../assets/products/POLUX-Custom.png";
import polux1 from "../assets/products/polux1.png";

const Home = () => {
  const features = [
    {
      icon: HomeIcon,
      title: "Premium Quality",
      description:
        "Built with the finest material, Aluminium Composite Panel body cover, Galvanized Steel frame structure, and customable interior material",
    },
    {
      icon: Wrench,
      title: "CUSTOMABLE",
      description:
        "Size, design, colour, specification, modular partition, and many more as customers need with various function Easy to Movable to changing place and any land contour, to minimalized cut and field budget for land civil works",
    },
    {
      icon: Package,
      title: "Easy Installation",
      description:
        "Pre-fabricated modules for quick and efficient assembly, allowing you to move in and start using your cabin sooner",
    },
  ];

  const categories = [
    {
      name: "Premium Series",
      description: "Our flagship collection of luxury portable cabins",
      image: polux1,
      link: "/catalog?category=premium",
    },
    {
      name: "Cube Collection",
      description: "Modern cubic designs with efficient space utilization",
      image: polux_cubebin_compact,
      link: "/catalog?category=cube",
    },
    {
      name: "Custom Cabins",
      description: "Design your own cabin with unlimited possibilities",
      image: polux_custom,
      link: "/custom",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-gray-500 to-slate-800 text-white  py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 ">
                <span className="">
                  Indonesia’s First
                  <br />
                </span>
                <span className="text-2xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-polux-yellow to-polux-white">
                  Futuristic{" "}
                </span>
                <span className="text-2xl lg:text-5xl text-transparent bg-clip-text bg-gradient-to-br from-polux-green to-polux-white">
                  ECO-Friendly
                  <br />
                </span>
                <span className=" text-transparent bg-clip-text bg-gradient-to-br from-polux-yellow to-polux-white">
                  Portable Cabins
                </span>
              </h1>
              <p className="text-lg lg:text-2xl mb-8 text-polux-white leading-relaxed">
                Make your life more flexible and comfortable with our premium
                portable cabins.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link
                  to="/catalog"
                  className="border-2 border-polux-gold bg-polux-yellow text-polux-grayDark px-8 py-4 rounded-lg font-semibold hover:bg-transparent hover:border-2 border-polux-white hover:text-polux-white transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                >
                  <span className="text-base">Explore Cabins</span>
                  <ArrowRight size={20} />
                </Link>
                <Link
                  to="/custom"
                  className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-polux-yellow hover:text-polux-grayDark transition-all duration-300 transform hover:scale-105"
                >
                  Custom Design
                </Link>
              </div>
            </div>
            <div className="relative">
              <img
                src={jumboTron}
                alt="Premium Polux Cabin"
                className="rounded-2xl shadow-2xl transform rotate-2 hover:rotate-0 transition-transform duration-500"
              />
              <div className="absolute -bottom-4 -left-4 bg-yellow-400 text-yellow-900 px-6 py-3 rounded-lg font-bold shadow-lg">
                <div className="flex items-center space-x-2">
                  <Star className="fill-current" size={20} />
                  <span>Premium Quality</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Polux Cabin?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine innovative design, premium materials, and expert
              craftsmanship to deliver exceptional portable cabin solutions.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group flex flex-col items-center text-center"
                >
                  <div className="bg-gradient-to-br from-gray-500 to-gray-800 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                    <Icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Explore Our Collections
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From premium luxury cabins to custom-designed solutions, find the
              perfect portable cabin for your needs.
            </p>
          </div>
          <div className="grid lg:grid-cols-3 gap-8">
            {categories.map((category, index) => (
              <Link
                key={index}
                to={category.link}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={category.image}
                    alt={category.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                    <p className="text-gray-200 mb-4">{category.description}</p>
                    <div className="flex items-center space-x-2 text-polux-yellow font-medium">
                      <span>Explore Collection</span>
                      <ArrowRight
                        size={16}
                        className="group-hover:translate-x-2 transition-transform duration-300"
                      />
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-500 to-slate-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Ready to Build Your Dream Cabin?
          </h2>
          <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
            Start exploring our premium collection or create a custom design
            tailored to your specific needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/catalog"
              className="bg-polux-yellow text-polux-grayDark px-8 py-4 rounded-lg font-semibold hover:text-gray hover: border-2 border-white transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Browse Catalog
            </Link>
            <Link
              to="/custom"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-polux-yellow hover:text-polux-grayDark transition-all duration-300 transform hover:scale-105"
            >
              Design Custom Cabin
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
