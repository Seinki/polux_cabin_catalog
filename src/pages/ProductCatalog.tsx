import { Filter, Grid, List, Search } from "lucide-react";
import { useMemo, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import { products } from "../data/products";

const ProductCatalog = () => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(
    categoryParam || "all"
  );
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const categories = [
    { id: "all", name: "All Products", count: products.length },
    {
      id: "premium",
      name: "Premium Series",
      count: products.filter((p) => p.category === "premium").length,
    },
    {
      id: "cube",
      name: "Cube/Dome/Moxar",
      count: products.filter((p) => p.category === "cube").length,
    },
    {
      id: "medium",
      name: "Medium Series",
      count: products.filter((p) => p.category === "medium").length,
    },
    {
      id: "concept",
      name: "Concept Models",
      count: products.filter((p) => p.category === "concept").length,
    },
  ];

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        selectedCategory === "all" || product.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Product Catalog
          </h1>
          <p className="text-xl text-gray-600">
            Discover our complete range of premium portable cabins
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search cabins..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-500 focus:border-transparent"
              />
            </div>

            {/* View Toggle */}
            <div className="flex items-center space-x-2 bg-gray-100 rounded-lg p-1">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "grid"
                    ? "bg-white shadow-sm text-gray-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-md transition-colors duration-200 ${
                  viewMode === "list"
                    ? "bg-white shadow-sm text-gray-600"
                    : "text-gray-600 hover:text-gray-800"
                }`}
              >
                <List size={20} />
              </button>
            </div>

            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setIsFilterOpen(!isFilterOpen)}
              className="lg:hidden flex items-center space-x-2 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              <Filter size={20} />
              <span>Filters</span>
            </button>
          </div>

          {/* Category Filters */}
          <div className={`mt-6 ${isFilterOpen ? "block" : "hidden lg:block"}`}>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-gray-600 text-white shadow-md"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {category.name} ({category.count})
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {products.length} cabins
            {selectedCategory !== "all" &&
              ` in ${categories.find((c) => c.id === selectedCategory)?.name}`}
          </p>
        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div
            className={`grid gap-8 ${
              viewMode === "grid"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1"
            }`}
          >
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                viewMode={viewMode}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              No cabins found
            </h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search terms or filters
            </p>
            <button
              onClick={() => {
                setSearchTerm("");
                setSelectedCategory("all");
              }}
              className="px-6 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Clear Filters
            </button>
          </div>
        )}

        {/* Custom Cabin CTA */}
        <div className="mt-16 bg-gradient-to-r from-gray-900 to-slate-800 rounded-2xl p-8 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">Need Something Custom?</h2>
          <p className="text-xl text-gray-100 mb-6 max-w-2xl mx-auto">
            Can't find exactly what you're looking for? Create a custom cabin
            tailored to your specific needs and requirements.
          </p>
          <Link
            to="/custom"
            className="inline-block bg-white text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg"
          >
            Design Custom Cabin
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCatalog;
