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
                primary: "#0f172a", // Dark Slate
                secondary: "#3f4d3a", // Tactical Olive
                accent: {
                    DEFAULT: "#ff4500", // High-Vis Orange/Red
                    green: "#00ff41", // Keep for HUD elements if needed
                },
                military: {
                    olive: "#3f4d3a",
                    slate: "#0f172a",
                    sand: "#c2b280",
                    gunmetal: "#2a3439",
                }
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                mono: ["Share Tech Mono", "monospace"], // For technical data
                display: ["Orbitron", "sans-serif"], // For headers
            },
            backgroundImage: {
                'grid-pattern': "linear-gradient(to right, #3f4d3a 1px, transparent 1px), linear-gradient(to bottom, #3f4d3a 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
};
export default config;
