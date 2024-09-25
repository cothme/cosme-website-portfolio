/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			colors: {
				primary: "#090B1A",
				secondary: "#33E4EA",
				tertiary: "#D9D9D9",
				extra: "#353849",
			},
			fontFamily: {
				cairoblack: ["CairoBlack", "sans-serif"],
				cairobold: ["CairoBold", "sans-serif"],
				cairoextrabold: ["CairoExtraBold", "sans-serif"],
				cairoextralight: ["CairoExtraLight", "sans-serif"],
				cairolight: ["CairoLight", "sans-serif"],
				cairomedium: ["CairoMedium", "sans-serif"],
				cairoregular: ["CairoRegular", "sans-serif"],
				cairosemibold: ["CairoSemiBold", "sans-serif"],
				cairovariable: ["CairoVariable", "sans-serif"],
			},
			screens: {
				xsm: "320px",
				sm: "640px",
				md: "768px",
				lg: "1024px",
				xl: "1280px",
			},
		},
	},
	plugins: [],
};
