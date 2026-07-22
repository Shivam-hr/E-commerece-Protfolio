import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
    colors: {
      cream: "#F7F5EE",
      card: "#FFFFFF",
      cardSoft: "#FCFBFA",
      border: "#EAE6DC",
      ink: "#121212",
      muted: "#555555",
      mutedLight: "#8A8578",
      accent: "#C4E843",
      accentHover: "#B3D437",
      cardWarm: "#FBF8F0",
      
    },
    fontFamily: {
      display: ["var(--font-playfair)", "serif"],
      body: ["var(--font-inter)", "sans-serif"],
    },
    borderRadius: {
      btn: "28px",
      card: "16px",
      img: "20px",
      input: "14px",
    },
    boxShadow: {
      floating: "0px 20px 40px rgba(0, 0, 0, 0.06)",
    },
    },
  },
  plugins: [],
};
export default config;
