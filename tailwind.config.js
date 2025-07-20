/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          "SF Pro Display",
          "-apple-system",
          "system-ui",
          "Arial",
          "sans-serif",
        ],
      },
      colors: {
        primary: "#FF6B9D",
        "primary-end": "#FFB74D",
        accent: "#FFD700",
        "text-main": "#000000",
        "text-subtle": "#666666",
        "card-background": "#FFFFFF",
        success: "#4CAF50",
        error: "#F44336",
      },
      spacing: {
        xs: "4px",
        sm: "8px",
        md: "16px",
        lg: "24px",
        xl: "32px",
        "2xl": "48px",
      },
      borderRadius: {
        sm: "8px",
        md: "12px",
        lg: "16px",
        xl: "20px",
      },
      boxShadow: {
        card: "0 2px 8px rgba(0, 0, 0, 0.1)",
        elevated: "0 4px 16px rgba(0, 0, 0, 0.15)",
      },
    },
  },
  plugins: [],
};
