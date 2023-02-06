module.exports = {
  content: ["./public/index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        blue: "#2E3192",
        "light-blue": "#666AC5",
        "site-grey": "#C5C6E5",
        "light-grey": "#82837E",
        "off-light-grey": "#82837E80",
        "cyan":"#00958f",
        "light-cyan":"a9e1dc",
        "yellow":"#fdb500",
        "light-yellow":"#fbe3a9",
        "red":"#fd5a56",
        "light-red":"#f8cbc9",
        "skyblue":"#009FF9",
        "light-skyblue":"#009FF929"
      },
      fontFamily: {
        oxygen: ["Oxygen", "sans-serif"],
        oxygenBold: ["Oxygen-Bold", "sans-serif"],
        oxygenLight: ["Oxygen-Light", "sans-serif"],
      },
    },
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1440px",
      // => @media (min-width: 1536px) { ... }
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
