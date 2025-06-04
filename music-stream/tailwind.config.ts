import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1DB954", // Spotify-like green
          dark: "#1aa34a",
          light: "#1ed760"
        },
        secondary: {
          DEFAULT: "#282828", // Dark gray for UI elements
          dark: "#121212",
          light: "#3E3E3E"
        },
        background: {
          DEFAULT: "#121212",
          elevated: "#282828"
        }
      },
      animation: {
        "music-bounce": "music-bounce 0.5s infinite",
        "slide-up": "slide-up 0.3s ease-out",
        "fade-in": "fade-in 0.3s ease-out"
      },
      keyframes: {
        "music-bounce": {
          "0%, 100%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(0.7)" }
        },
        "slide-up": {
          "0%": { transform: "translateY(10px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" }
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        }
      }
    },
  },
  plugins: [],
};

export default config; 