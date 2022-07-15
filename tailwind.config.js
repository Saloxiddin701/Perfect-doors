module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      brand: "#C18E61",
      white: "#FFFFFF",
      dark: "#252525",
      blue: "#0000ff",
      red: "#f00",
      gray: "#ccc",
      "bg-color": "#F9F9F9",
      "border-color": "#25252580",
    },
    screens: {
      'xs': {'max': '425px'},
      'sm': {'max': '639px'},
      'md': {'max': '768px'},
      'lg': {'max': '1023px'},
      'xl': {'max': '1279px'},
    },
  },
  plugins: [],
};
