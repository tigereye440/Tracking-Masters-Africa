import type { Config } from "tailwindcss" with { "resolution-mode": "import" };

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          maroon: "#7A1E1E",   // primary — logo wordmark, headers
          charcoal: "#2A2A28", // secondary — text, dark sections
          cream: "#F5F3EE",    // base background
          red: "#C0392B",      // accent — CTAs only
          steel: "#8A8A82",    // neutral — borders, secondary text
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        prose: "72ch",
      },
    },
  },
  plugins: [],
};

export default config;
