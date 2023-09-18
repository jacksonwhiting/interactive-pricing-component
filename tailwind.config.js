/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js}"],
	theme: {
		extend: {
			colors: {
				skin: {
					"hdg-pri": "#293356",
					"body-pri": "#848EAD",
					"canvas-pri": "#F1F5FE",
					"canvas-sec": "#F9FAFF",
					"accent-pri": "#10D8C4",
					"accent-pri-light": "#A4F3EB",
					"accent-sec": "#FF8D68",
					"accent-sec-light": "#FEEDE8",
					"gray-pri": "#CFD8EF",
					"gray-pri-light": "#ECF0FB",
				},
			},
			fontFamily: {
				fontPri: ["Manrope", "sans-serif"],
			},
			fontSize: {
				hdgL: "1.75rem",
				hdgM: "1.25rem",
				hdgS: "1rem",
				hdgXs: ".9375rem",
				bodyPri: ".75rem",
			},
		},
	},
	plugins: [],
}
