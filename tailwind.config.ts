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
                primary: "#0a0a0a", // Near Black
                secondary: "#1c1c1c", // Dark Gray
                accent: {
                    green: "#00ff41", // Matrix/Night Vision Green
                    red: "#ff3333", // Alert Red
                    cyan: "#00f3ff", // Cyber Cyan
                },
                military: {
                    olive: "#4b5320",
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
                'grid-pattern': "linear-gradient(to right, #1c1c1c 1px, transparent 1px), linear-gradient(to bottom, #1c1c1c 1px, transparent 1px)",
            }
        },
    },
    plugins: [],
};
export default config;
