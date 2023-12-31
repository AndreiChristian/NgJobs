/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      // "forest",
      {
        mytheme: {
          primary: "#C8A2C8", // Lilac as the primary color
          secondary: "#FFA07A", // Light salmon (carrot shade) as secondary
          accent: "#98FF98", // Mint green for accents
          neutral: "#808080", // Gray as a neutral color
          "base-100": "#ffffff", // White for the base
          info: "#5F9EA0", // Cadet blue for informational elements
          success: "#90EE90", // Light green for success messages
          warning: "#FFD700", // Gold for warnings
          error: "#FF4500", // Red-orange for errors
        },
      },
    ],
    darkTheme: "dark", // name of one of the included themes for dark mode
    base: true, // applies background color and foreground color for root element by default
    styled: true, // include daisyUI colors and design decisions for all components
    utils: true, // adds responsive and modifier utility classes
    rtl: false, // rotate style direction from left-to-right to right-to-left. You also need to add dir="rtl" to your html tag and install `tailwindcss-flip` plugin for Tailwind CSS.
    prefix: "", // prefix for daisyUI classnames (components, modifiers and responsive class names. Not colors)
    logs: true, // Shows info about daisyUI version and used config in the console when building your CSS
  },
};
