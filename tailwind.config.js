/** @type {import('tailwindcss').Config} */
export default {
	content: ["./index.html", "./src/**/*.{js,ts,jsx, tsx}"],
	theme: {
		extend: {
			height: {
				680: "680px",
			},
			colors: {
				red1: "#D42920",
				red: {
					50: "#FCEAE9",
					100: "#F8D5D3",
					200: "#F1A6A2",
					300: "#EA7B76",
					400: "#E34D45",
					500: "#D42920",
					600: "#A82119",
					700: "#811913",
					800: "#54100D",
					900: "#2C0907",
					950: "#160403",
				},
				blue1: "#10628D",
				green1: "#7F936E",
				neutral: "#FBF3D9",
				yellow1: "#F9C22C",
				yellow2: "#f1d592",
				yellow3: "#F3F2EF",
				"gray-dark": "#273444",

				gray: "#8492a6",
				"gray-light": "#d3dce6",
			},

			// izzy: {
			// 	50: "#FDFDFC",
			// 	100: "#FDFDFC",
			// 	200: "#FBFAF9",
			// 	300: "#F8F8F6",
			// 	400: "#F6F6F3",
			// 	500: "#F3F2EF",
			// 	600: "#F5F8FA",
			// 	700: "#A19982",
			// 	800: "#f5f5f5",
			// 	900: "#f6f8fa",
			// 	950: "#F3F3F3",
			// },
			// springbud: {
			// 	100: "#CDD8A1",
			// 	200: "#C5FD92",
			// 	300: "#92aef1",
			// },
			// manilla: {
			// 	100: "#f1d592",
			// 	200: "#92F1D5",
			// 	300: "#D592F1",
			// 	400: "#4F7942	",
			// 	500: "#7F946E",
			// },
		},
	},

	plugins: [],
};
