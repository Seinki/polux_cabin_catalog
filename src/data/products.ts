import moluxCurve from "../assets/products/MoluxCurve.png";
import moxar_box from "../assets/products/Moxar-Box.png";
import moxar_container from "../assets/products/Moxar-Container.png";
import moxar from "../assets/products/moxar.png";
import polux_cubebin_compact from "../assets/products/Polux-Cubebin-compact.png";
import polux_cubebin_large from "../assets/products/Polux-Cubebin-large.png";
import polux_dome from "../assets/products/POLUX-Dome.png";
import polux_medium from "../assets/products/POLUX-Medium.png";
import polux_rotate from "../assets/products/POLUX-Rotate.png";
import polux_woodbin from "../assets/products/POLUX-Woodbin.png";
import polux1 from "../assets/products/polux1.png";
import polux2 from "../assets/products/polux2.png";
import polux3_beach_concept from "../assets/products/Polux3-Beach-Concept.png";
import polux3 from "../assets/products/polux3.png";
import premium_private_cube_cabine from "../assets/products/Premium-Private-Cube-Cabin.png";
import { Product } from "../types";

export const products: Product[] = [
  // Premium Series
  {
    id: "polux-1",
    name: "Polux 1",
    description:
      "Premium compact cabin perfect for couples or small families. Features modern amenities and efficient space utilization.",
    price: 480000000,
    image: polux1,
    category: "premium",
    dimensions: "3 x 7 meters",
    features: [
      "1 Bedroom",
      "Bed 160x200cm",
      "Kitchen",
      "Toilet",
      "Premium Materials",
    ],
  },
  {
    id: "polux-2",
    name: "Polux 2",
    description:
      "Spacious two-bedroom cabin ideal for families. Complete with full kitchen and modern bathroom facilities.",
    price: 655000000,
    image: polux2,
    category: "premium",
    dimensions: "3.7 x 10 meters",
    features: [
      "2 Bedrooms",
      "Bed 160x200cm",
      "Kitchen",
      "Toilet",
      "Premium Materials",
      "Extra Storage",
    ],
  },
  {
    id: "polux-3",
    name: "Polux 3",
    description:
      "Cozy single bedroom cabin with essential amenities. Perfect for weekend getaways or temporary accommodation.",
    price: 350000000,
    image: polux3,
    category: "premium",
    dimensions: "2.5 x 4.5 meters",
    features: ["1 Bedroom", "Bed 160x200cm", "Toilet", "Compact Design"],
  },

  // Cube/Dome/Moxar Series
  {
    id: "polux-cube",
    name: "Polux Cube",
    description:
      "Modern cubic design with optimal space efficiency. Features contemporary aesthetics and functional layout.",
    price: 210000000,
    image: premium_private_cube_cabine,
    category: "cube",
    dimensions: "4 x 4.2 meters",
    features: [
      "1 Bedroom",
      "Bed 160x200cm",
      "Toilet",
      "Modern Design",
      "Energy Efficient",
    ],
  },
  {
    id: "polux-cube-in",
    name: "Polux Cube In",
    description:
      "Compact version of the popular Cube series. Ideal for urban settings and smaller lots.",
    price: 185000000,
    image: polux_cubebin_large,
    category: "cube",
    dimensions: "4 x 2.4 meters",
    features: [
      "1 Bedroom",
      "Bed 160x200cm",
      "Toilet",
      "Compact Layout",
      "Urban Design",
    ],
  },
  {
    id: "polux-dome",
    name: "Polux Dome",
    description:
      "Unique dome-shaped cabin offering 360-degree views and exceptional structural integrity.",
    price: 329000000,
    image: polux_dome,
    category: "cube",
    dimensions: "3.5 x 5.5 meters",
    features: [
      "1 Bedroom",
      "Bed 160x200cm",
      "Toilet",
      "Dome Structure",
      "Panoramic Views",
    ],
  },
  {
    id: "moxar-container",
    name: "Moxar Container",
    description:
      "Industrial-inspired container cabin with modern amenities. Perfect for contemporary living.",
    price: 350000000,
    image: moxar_container,
    category: "cube",
    dimensions: "2.5 x 4.5 meters",
    features: [
      "Container Design",
      "Modern Amenities",
      "Industrial Style",
      "Durable Construction",
    ],
  },
  {
    id: "moxar-shelter",
    name: "Moxar Shelter",
    description:
      "Minimalist shelter design focusing on essential living needs. Ideal for remote locations.",
    price: 195000000,
    image: premium_private_cube_cabine,
    category: "cube",
    dimensions: "4 x 4 meters",
    features: [
      "Minimalist Design",
      "Essential Amenities",
      "Remote Living",
      "Weather Resistant",
    ],
  },
  {
    id: "moxar-box",
    name: "Moxar Box",
    description:
      "Large format box design providing ample living space with flexible interior configurations.",
    price: 480000000,
    image: moxar_box,
    category: "cube",
    dimensions: "5 x 6 meters",
    features: [
      "Large Format",
      "Flexible Layout",
      "Spacious Interior",
      "Multi-purpose Design",
    ],
  },

  // Medium Series (Custom sizes)
  {
    id: "moxar-4x3",
    name: "Moxar 4x3",
    description:
      "Custom-sized Moxar cabin designed to fit specific site requirements and client preferences.",
    price: undefined,
    image: moxar,
    category: "medium",
    dimensions: "4 x 3 meters (Custom)",
    features: [
      "Custom Size",
      "Flexible Design",
      "Site-Specific",
      "Request Quote",
    ],
  },
  {
    id: "moxar-shelter-5x6",
    name: "Moxar Shelter 5x6",
    description:
      "Large shelter configuration with enhanced space for extended living or commercial use.",
    price: undefined,
    image: moxar_box,
    category: "medium",
    dimensions: "5 x 6 meters (Custom)",
    features: [
      "Large Shelter",
      "Commercial Use",
      "Extended Living",
      "Request Quote",
    ],
  },
  // {
  //   id: "molux-cube",
  //   name: "Molux Cube",
  //   description:
  //     "Premium Molux series with cubic design and luxury finishing materials.",
  //   price: undefined,
  //   image: moluxCurve,
  //   category: "medium",
  //   dimensions: "Custom Size",
  //   features: [
  //     "Premium Molux Series",
  //     "Luxury Finishes",
  //     "Custom Configuration",
  //     "Request Quote",
  //   ],
  // },
  {
    id: "molux",
    name: "Molux",
    description:
      "Flagship Molux cabin with premium materials and bespoke design options.",
    price: undefined,
    image: moluxCurve,
    category: "medium",
    dimensions: "Custom Size",
    features: [
      "Premium Materials",
      "Bespoke Design",
      "Luxury Features",
      "Request Quote",
    ],
  },

  // Concept Models
  {
    id: "polux-rotate",
    name: "Polux Rotate",
    description:
      "Innovative rotating cabin design that follows the sun for optimal natural lighting throughout the day.",
    price: undefined,
    image: polux_rotate,
    category: "concept",
    dimensions: "2.5 x 4.5 meters",
    features: [
      "1 Bedroom",
      "Toilet",
      "Rotating Design",
      "Solar Tracking",
      "Innovative Concept",
    ],
  },
  {
    id: "polux-cubebin-large",
    name: "Polux Cubebin Large",
    description:
      "Large format Cubebin with spacious interiors and modern cubic aesthetics.",
    price: undefined,
    image: polux_cubebin_large,
    category: "concept",
    dimensions: "4 x 4.2 meters",
    features: [
      "1 Bedroom",
      "Toilet",
      "Bed 160x200cm",
      "Cubic Design",
      "Spacious Layout",
    ],
  },
  {
    id: "polux-cubebin-compact",
    name: "Polux Cubebin Compact",
    description:
      "Compact Cubebin variant optimized for smaller spaces without compromising functionality.",
    price: undefined,
    image: polux_cubebin_compact,
    category: "concept",
    dimensions: "4 x 2.4 meters",
    features: [
      "1 Bedroom",
      "Toilet",
      "Bed 130x200cm",
      "Compact Design",
      "Space Optimized",
    ],
  },
  {
    id: "polux-garage",
    name: "Polux Garage",
    description:
      "Multi-purpose garage cabin that can serve as a mini store, coffee shop, or workspace.",
    price: undefined,
    image: polux_medium,
    category: "concept",
    dimensions: "Variable",
    features: [
      "Multi-purpose",
      "Commercial Use",
      "Flexible Interior",
      "Business Ready",
      "Custom Layout",
    ],
  },
  {
    id: "polux-woodbin",
    name: "Polux Woodbin",
    description:
      "Large family cabin with natural wood aesthetics and complete living amenities.",
    price: undefined,
    image: polux_woodbin,
    category: "concept",
    dimensions: "3 x 9.5 meters",
    features: [
      "2 Bedrooms",
      "Kitchen",
      "Toilet",
      "Natural Wood",
      "Family Living",
    ],
  },
  {
    id: "molux-curve",
    name: "Molux Curve",
    description:
      "Elegant curved design cabin offering unique aesthetics and enhanced structural integrity.",
    price: undefined,
    image: moluxCurve,
    category: "concept",
    dimensions: "3 x 5 meters",
    features: [
      "1 Bedroom",
      "Toilet",
      "Curved Design",
      "Unique Aesthetics",
      "Premium Concept",
    ],
  },
  {
    id: "moxar-compact",
    name: "Moxar Compact",
    description:
      "Ultra-compact Moxar design perfect for minimal living or emergency accommodation.",
    price: undefined,
    image: moxar,
    category: "concept",
    dimensions: "2.4 x 3.6 meters",
    features: [
      "Ultra-compact",
      "Minimal Living",
      "Emergency Housing",
      "Essential Amenities",
    ],
  },
  {
    id: "polux-3-beach",
    name: "Polux 3 Beach Concept",
    description:
      "Beach-optimized version of Polux 3 with weather-resistant materials and coastal design elements.",
    price: undefined,
    image: polux3_beach_concept,
    category: "concept",
    dimensions: "2.5 x 4.5 meters",
    features: [
      "Beach Optimized",
      "Weather Resistant",
      "Coastal Design",
      "Ocean Views",
      "Salt Air Protection",
    ],
  },
  {
    id: "premium-private-cube",
    name: "Premium Private Cube",
    description:
      "Exclusive private cube cabin with luxury amenities and enhanced privacy features.",
    price: undefined,
    image: premium_private_cube_cabine,
    category: "concept",
    dimensions: "Custom",
    features: [
      "Privacy Enhanced",
      "Luxury Amenities",
      "Exclusive Design",
      "Premium Materials",
      "Custom Features",
    ],
  },
];
