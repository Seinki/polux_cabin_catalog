// Mapping id ke label untuk fitur ekstra
const EXTRA_FEATURES = [
    { id: "largeSofa", label: "Large Sofa" },
    { id: "smallSofa", label: "Small Sofa" },
    { id: "cabinets", label: "Cabinets" },
    { id: "chair", label: "Chair" },
    { id: "table", label: "Table" },
    { id: "mirrorCabin", label: "Mirror Cabin" },
    { id: "luxuryInteriorSet", label: "Luxury Interior Set", price: "30%"}

];
import { Calculator, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import polux_custom from "../assets/products/POLUX-Custom.png";
// import { Slider } from "../components/Slider";
// import CustomSize from "../components/CustomSizePremium";
import { useCart } from "../context/CartContext";
// import CustomSizePremium from "../components/CustomSizePremium";
// import CustomSizeLowCost from "../components/CustomSizeLowCost";
import { Slider } from "../components/Slider";

interface CustomSpecs {
    length: number;
    width: number;
    height: number;
    bedrooms: number;
    bathrooms: number;
    kitchen: boolean;
    bedType: string;
    materials: string;
    extras: string[];
        mobLength: number;
}

const CustomSizePremium = () => {
    const { addToCart } = useCart();
    const [specs, setSpecs] = useState<CustomSpecs>({
        length: 0,
        width: 0,
        height: 0,
        bedrooms: 0,
        bathrooms: 0,
        kitchen: false,
        bedType: "160x200",
        materials: "standard",
        extras: [],
            mobLength: 0,
    });

    const [estimatedPrice, setEstimatedPrice] = useState<number | null>(null);
    const [isCalculating, setIsCalculating] = useState(false);

    // Price calculation logic
    useEffect(() => {
        setIsCalculating(true);
        const timer = setTimeout(() => {
            // Hitung volume (panjang x lebar x tinggi)
            const volume = specs.length * specs.width * specs.height;
            // Jika semua dimensi 0, harga 0
            let basePrice = 0;
            if (specs.length === 0 && specs.width === 0 && specs.height === 0) {
                basePrice = 0;
            } else if (specs.length < 3 || specs.width < 3 || specs.height < 3) {
                // Jika ada dimensi < 3, harga = (length + width + height) * 5.539.000
                basePrice = (specs.length + specs.width + specs.height) * 3950000;
            } else {
                // Semua dimensi >= 3, pakai volume
                basePrice = volume * 3950000;
            }

            // Add room costs (minimum 1 bedroom & 1 bathroom for price calculation)
            const bedrooms = Math.max(1, specs.bedrooms);
            const bathrooms = Math.max(1, specs.bathrooms);
            basePrice += (bedrooms - 1) * 50000000;
            basePrice += (bathrooms - 1) * 30000000;
            if (specs.kitchen) basePrice += 40000000;

            // Material multiplier
            const materialMultipliers: Record<string, number> = {
                standard: 1,
                premium: 1.3,
                luxury: 1.6,
            };
            basePrice *= materialMultipliers[specs.materials];

            // Extra features (sesuai fitur yang ada di UI)
            const extraFeaturePrices: Record<string, number> = {
                bedSet: 4500000,
                largeSofa: 2800000,
                smallSofa: 1600000,
                cabinets: 1000000,
                chair: 500000,
                table: 500000,
                mirrorCabin: 8500000,
            };
            specs.extras.forEach((extra) => {
                if (extraFeaturePrices[extra]) basePrice += extraFeaturePrices[extra];
            });

            // Tambahkan harga MOB (selalu, walau 0)
            basePrice += specs.mobLength * 325000;

            // Jika luxuryInteriorSet dicentang, naikkan 30%
            if (specs.extras.includes("luxuryInteriorSet")) {
                basePrice *= 1.3;
            }

            setEstimatedPrice(basePrice > 0 ? basePrice : 0);
            setIsCalculating(false);
        }, 500);

        return () => clearTimeout(timer);
    }, [specs]);

    const handleSliderChange = (key: keyof CustomSpecs, value: number) => {
        setSpecs((prev) => ({ ...prev, [key]: value }));
    };

    // const handleSelectChange = (key: keyof CustomSpecs, value: any) => {
    //     setSpecs((prev) => ({ ...prev, [key]: value }));
    // };

    const toggleExtra = (extra: string) => {
        setSpecs((prev) => ({
            ...prev,
            extras: prev.extras.includes(extra)
                ? prev.extras.filter((e) => e !== extra)
                : [...prev.extras, extra],
        }));
    };

    const handleAddToCart = () => {
        const customProduct = {
            id: `custom-${Date.now()}`,
            name: `Custom Cabin ${specs.length}x${specs.width}m`,
            description: `Custom designed cabin with ${specs.bedrooms}BR${specs.kitchen ? ", Kitchen" : ""
                }${specs.bathrooms > 0 ? ", Toilet" : ""}`,
            price: estimatedPrice || 0,
            image: polux_custom,
            category: "custom",
            dimensions: `${specs.length} x ${specs.width} x ${specs.height} meters`,
            features: [
                `${specs.bedrooms} Bedroom${specs.bedrooms > 1 ? "s" : ""}`,
                `${specs.bathrooms} Bathroom${specs.bathrooms > 1 ? "s" : ""}`,
                ...(specs.kitchen ? ["Kitchen"] : []),
                `Bed ${specs.bedType}`,
                `${specs.materials.charAt(0).toUpperCase() + specs.materials.slice(1)
                } Materials`,
                ...specs.extras.map((e) => e.charAt(0).toUpperCase() + e.slice(1)),
            ],
        };

        addToCart(customProduct);
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(price);
    };

    return (
        <div className="min-h-screen bg-gray-50">
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

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Configuration Panel */}
                    <div className="space-y-8">
                        {/* Dimensions */}

                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">
                                Custom Size Cabin Low Cost
                            </h3>

                            <div className="space-y-6">

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Length: {specs.length}m
                                    </label>
                                    <Slider
                                        min={2}
                                        max={10}
                                        step={1}
                                        value={specs.length}
                                        onChange={(value) => handleSliderChange("length", value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Width: {specs.width}m
                                    </label>
                                    <Slider
                                        min={2}
                                        max={10}
                                        step={1}
                                        value={specs.width}
                                        onChange={(value) => handleSliderChange("width", value)}
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Height: {specs.height}m
                                    </label>
                                    <Slider
                                        min={2}
                                        max={10}
                                        value={specs.height}
                                        step={1}
                                        onChange={(value) => handleSliderChange("height", value)}
                                    />
                                </div>
                            </div>


                        </div>


                        {/* Layout Configuration */}

                        {/* <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Layout & Features
                            </h3>

                            <div className="grid sm:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Bedrooms
                                    </label>
                                    <select
                                        value={specs.bedrooms}
                                        onChange={(e) =>
                                            handleSelectChange("bedrooms", Number(e.target.value))
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    >
                                        <option value={0}>Select</option>
                                        <option value={1}>1 Bedroom</option>
                                        <option value={2}>2 Bedrooms</option>
                                        <option value={3}>3 Bedrooms</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Bathrooms
                                    </label>
                                    <select
                                        value={specs.bathrooms}
                                        onChange={(e) =>
                                            handleSelectChange("bathrooms", Number(e.target.value))
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    >
                                        <option value={0}>Select</option>
                                        <option value={1}>1 Bathroom</option>
                                        <option value={2}>2 Bathrooms</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Bed Type
                                    </label>
                                    <select
                                        value={specs.bedType}
                                        onChange={(e) =>
                                            handleSelectChange("bedType", e.target.value)
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    >
                                        <option value={0}>Select</option>
                                        <option value="130x200">Single Bed (130x200cm)</option>
                                        <option value="160x200">Queen Bed (160x200cm)</option>
                                        <option value="180x200">King Bed (180x200cm)</option>
                                    </select>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Materials
                                    </label>
                                    <select
                                        value={specs.materials}
                                        onChange={(e) =>
                                            handleSelectChange("materials", e.target.value)
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    >
                                        <option value="standard">Standard</option>
                                        <option value="premium">Premium (+30%)</option>
                                        <option value="luxury">Luxury (+60%)</option>
                                    </select>
                                </div>
                            </div>

                            <div className="mt-6">
                                <label className="flex items-center space-x-3">
                                    <input
                                        type="checkbox"
                                        checked={specs.kitchen}
                                        onChange={(e) =>
                                            handleSelectChange("kitchen", e.target.checked)
                                        }
                                        className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                                    />
                                    <span className="text-sm font-medium text-gray-700">
                                        Include Kitchen
                                    </span>
                                </label>
                            </div>
                        </div> */}

                        {/* Extra Features */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Extra Features
                            </h3>

                            {/* <div className="grid sm:grid-cols-2 gap-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Bed Size
                                    </label>
                                    <select
                                        value={specs.bedType}
                                        onChange={(e) =>
                                            handleSelectChange("bedType", e.target.value)
                                        }
                                        className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:ring-2 focus:ring-gray-500 focus:border-transparent"
                                    >
                                        <option value="">Select</option>
                                        <option value="120x200">120x200</option>
                                        <option value="160x200">160x200</option>
                                        <option value="180x200">180x200</option>
                                        <option value="200x200">200x200</option>
                                    </select>
                                </div>
                            </div> */}
                            <div className="grid sm:grid-cols-2 gap-4">
                                
                                {[
                                    { id: "bedSet", label: "Bed Set", price: "IDR4500000" },
                                    { id: "largeSofa", label: "Large Sofa", price: "IDR2800000" },
                                    { id: "smallSofa", label: "Small Sofa", price: "IDR1600000" },
                                    { id: "cabinets", label: "Cabinets", price: "IDR1000000" },
                                    { id: "chair", label: "Chair", price: "IDR500000" },
                                    { id: "table", label: "Table", price: "IDR500000" },
                                    { id: "mirrorCabin", label: "Mirror Cabin", price: "IDR8500000" },
                                ].map((extra) => (
                                    <label
                                        key={extra.id}
                                        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={specs.extras.includes(extra.id)}
                                            onChange={() => toggleExtra(extra.id)}
                                            className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-gray-700">
                                                {extra.label}
                                            </span>
                                            <span className="text-xs text-gray-500 block">
                                                {extra.price}
                                            </span>
                                        </div>
                                    </label>
                                ))}
                            </div>
                                    {/* MOB Price */}
                                    <div className="mt-6">
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            MOB Price
                                        </label>
                                        <Slider
                                            min={2}
                                            max={20}
                                            value={specs.mobLength}
                                            onChange={(value) => handleSliderChange("mobLength", value)}
                                        />
                                        <div className="text-sm text-gray-500 mt-1">{specs.mobLength} meter x IDR325000 = {formatPrice(specs.mobLength * 325000)}</div>
                                    </div>
                        </div>
                        <div className="grid sm:grid-cols-2 gap-4">
                                {[
                                    { id: "luxuryInteriorSet", label: "Luxury Interior Set", price: "30%"}
                                ].map((extra) => (
                                    <label
                                        key={extra.id}
                                        className="flex items-center space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer"
                                    >
                                        <input
                                            type="checkbox"
                                            checked={specs.extras.includes(extra.id)}
                                            onChange={() => toggleExtra(extra.id)}
                                            className="w-4 h-4 text-gray-600 border-gray-300 rounded focus:ring-gray-500"
                                        />
                                        <div className="flex-1">
                                            <span className="text-sm font-medium text-gray-700">
                                                {extra.label}
                                            </span>
                                            <span className="text-xs text-gray-500 block">
                                                {extra.price}
                                            </span>
                                        </div>
                                    </label>
                                ))}
                            </div>

                    </div>

                    {/* Preview & Pricing */}
                    <div className="space-y-8">
                        {/* 3D Preview Placeholder */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Preview</h3>
                            <div className="aspect-square bg-gradient-to-br from-gray-100 to-gray-100 rounded-lg flex items-center justify-center relative overflow-hidden">
                                <img
                                    src={polux_custom}
                                    alt="Custom Cabin Preview"
                                    className="w-full h-full object-cover rounded-lg"
                                />
                                <div className="absolute inset-0 bg-gray-900/80 flex items-center justify-center">
                                    <div className="text-center text-white">
                                        <h4 className="text-2xl font-bold mb-2">
                                            {specs.length} × {specs.width} × {specs.height}m
                                        </h4>
                                        <p className="text-gray-200">
                                            {specs.length * specs.width} sqm total area
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Specifications Summary */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">
                                Specifications
                            </h3>
                            <div className="space-y-3">
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Dimensions</span>
                                    <span className="font-medium">
                                        {specs.length} × {specs.width} × {specs.height}m
                                    </span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Total Area</span>
                                    <span className="font-medium">
                                        {specs.length * specs.width} sqm
                                    </span>
                                </div>
                                {/* <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Bedrooms</span>
                                    <span className="font-medium">{specs.bedrooms}</span>
                                </div>
                                <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Bathrooms</span>
                                    <span className="font-medium">{specs.bathrooms}</span>
                                </div> */}
                                {/* <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Kitchen</span>
                                    <span className="font-medium">
                                        {specs.kitchen ? "Yes" : "No"}
                                    </span>
                                </div> */}
                                {/* <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Bed Size</span>
                                    <span className="font-medium">{specs.bedType}cm</span>
                                </div> */}
                                {/* <div className="flex justify-between py-2 border-b border-gray-100">
                                    <span className="text-gray-600">Materials</span>
                                    <span className="font-medium capitalize">
                                        {specs.materials}
                                    </span>
                                </div> */}
                                {specs.extras.length > 0 && (
                                    <div className="flex justify-between py-2">
                                        <span className="text-gray-600">Extras</span>
                                        <span className="font-medium capitalize">
                                            {specs.extras
                                                .map((id) => {
                                                    const found = EXTRA_FEATURES.find((f) => f.id === id);
                                                    return found ? found.label : id;
                                                })
                                                .join(", ")}
                                        </span>
                                    </div>
                                )}
                            </div>
                        </div>

                        {/* Price & Add to Cart */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                                <Calculator className="text-gray-600" size={24} />
                                <span>Estimated Price</span>
                            </h3>

                            <div className="mb-6">
                                {isCalculating ? (
                                    <div className="flex items-center space-x-2 text-gray-600">
                                        <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-gray-600"></div>
                                        <span>Calculating...</span>
                                    </div>
                                ) : (
                                    <div className="text-4xl font-bold text-gray-600">
                                        {(() => {
                                            // Gunakan logika yang sama dengan useEffect agar konsisten
                                            const volume = specs.length * specs.width * specs.height;
                                            let subtotal = 0;
                                            if (specs.length === 0 && specs.width === 0 && specs.height === 0) {
                                                subtotal = 0;
                                            } else if (specs.length < 3 || specs.width < 3 || specs.height < 3) {
                                                subtotal = (specs.length + specs.width + specs.height) * 3950000;
                                            } else {
                                                subtotal = volume * 3950000;
                                            }
                                            const bedrooms = Math.max(1, specs.bedrooms);
                                            const bathrooms = Math.max(1, specs.bathrooms);
                                            subtotal += (bedrooms - 1) * 50000000;
                                            subtotal += (bathrooms - 1) * 30000000;
                                            if (specs.kitchen) subtotal += 40000000;
                                            const materialMultipliers: Record<string, number> = {
                                                standard: 1,
                                                premium: 1.3,
                                                luxury: 1.6,
                                            };
                                            subtotal *= materialMultipliers[specs.materials];
                                            const extraFeaturePrices: Record<string, number> = {
                                                bedSet: 4500000,
                                                largeSofa: 2800000,
                                                smallSofa: 1600000,
                                                cabinets: 1000000,
                                                chair: 500000,
                                                table: 500000,
                                                mirrorCabin: 8500000,
                                            };
                                            specs.extras.forEach((extra) => {
                                                if (extraFeaturePrices[extra]) subtotal += extraFeaturePrices[extra];
                                            });
                                            subtotal += specs.mobLength * 325000;
                                            if (specs.extras.includes("luxuryInteriorSet")) {
                                                subtotal *= 1.3;
                                            }
                                            if (subtotal < 0) subtotal = 0;
                                            const tax = subtotal * 0.11;
                                            const total = subtotal + tax;
                                            return (
                                                <>
                                                    <div className="text-lg font-medium text-gray-800 mb-1">Subtotal: {formatPrice(subtotal)}</div>
                                                    <div className="text-base text-gray-500 mb-1">Tax (11%): {formatPrice(tax)}</div>
                                                    <div>{formatPrice(total)}</div>
                                                </>
                                            );
                                        })()}
                                    </div>
                                )}
                                <p className="text-sm text-gray-500 mt-2">
                                    * Final price may vary based on location, materials, and
                                    additional customizations
                                </p>
                            </div>

                            <button
                                onClick={handleAddToCart}
                                disabled={isCalculating}
                                className="w-full bg-gray-600 text-white px-6 py-4 rounded-lg font-semibold hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                                <ShoppingCart size={20} />
                                <span>Add Custom Cabin to Cart</span>
                            </button>

                            <div className="mt-4 text-center">
                                <p className="text-sm text-gray-600">
                                    Need help with your design? Our experts are here to assist
                                    you.
                                </p>
                                <button className="text-gray-600 hover:text-gray-700 font-medium text-sm mt-1">
                                    Contact Design Consultant
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomSizePremium;
