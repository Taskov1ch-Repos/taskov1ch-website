import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				sans: ["Rajdhani", "sans-serif"],
				mono: ["JetBrains Mono", "monospace"],
			},
			colors: {
				bg: "#09090b",
				surface: "#18181b",
				accent: "#fbbf24",
				cyan: "#22d3ee",
				muted: "#71717a",
			},
			backgroundImage: {
				"grid-pattern": "radial-gradient(#555 1px, transparent 1px)",
			}
		},
	},
	plugins: [
		typography,
	],
} satisfies Config;