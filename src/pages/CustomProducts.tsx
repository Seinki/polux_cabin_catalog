import { useNavigate } from "react-router-dom";

export default function CustomProducts() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen bg-gray-50 mb-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Custom Cabin Designer
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        Design your perfect portable cabin with our interactive
                        configurator. Adjust dimensions, features, and materials to create
                        your ideal living space.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {/* Premium Custom Size Button */}
                    <button
                        className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 to-slate-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition group"
                        onClick={() => navigate("/custom-size-premium")}
                    >
                        <img
                            src="/src/assets/products/Premium-Private-Cube-Cabin.png"
                            alt="Premium Custom Size"
                            className="w-full h-64 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <span className="text-2xl font-bold text-white">Premium Custom Size</span>
                        <span className="text-lg text-gray-100">High-end materials & exclusive design</span>
                    </button>
                    {/* Low Cost Custom Size Button */}
                    <button
                        className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-500 to-slate-800 rounded-lg shadow-lg p-6 hover:shadow-2xl transition group"
                        onClick={() => navigate("/custom-size-lowcost")}
                    >
                        <img
                            src="/src/assets/products/Polux-Cubebin-compact.png"
                            alt="Low Cost Custom Size"
                            className="w-full h-64 object-cover rounded-md mb-4 transition-transform duration-300 ease-in-out group-hover:scale-105"
                        />
                        <span className="text-2xl font-bold text-white">Low Cost Custom Size</span>
                        <span className="text-lg text-gray-100">Affordable & efficient solution</span>
                    </button>
                </div>
            </div>
        </div>
    );
}