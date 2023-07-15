const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serif: ['Send Flowers', ...defaultTheme.fontFamily.serif]
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
