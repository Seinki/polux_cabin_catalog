/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        polux: {
          navy: "#0F1C3F", // Primary
          navyLight: "#1E3A8A", // Alternate navy
          gray: "#E5E7EB", // Secondary neutral
          grayDark: "#111827", // Text color
          gold: "#D4AF37", // Premium accent
          yellow: "#FACC15", // Highlight CTA
          red: "#EF4444", // Error
          green: "#10B981", // Success
          blue: "#3B82F6", // Info
          cyan: "#06B6D4", // Info accent
          purple: "#8B5CF6", // Purple accent
          white: "#FFFFFF", // Background
          black: "#000000", // Text on dark backgrounds
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"], // default ganti ke Poppins
      },
      textStrokeWidth: {
        DEFAULT: "2px",
        sm: "1px",
        lg: "3px",
      },
      textStrokeColor: {
        DEFAULT: "#000",
        white: "#fff",
        gold: "#D4AF37",
      },
    },
  },
  plugins: [],
};
