const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Poppins', ...defaultTheme.fontFamily.sans],
				serif: ['Playfair Display', 'Send Flowers', ...defaultTheme.fontFamily.serif]
			},
			colors: {
				'sea-pink': {
					50: '#fdf3f4',
					100: '#fbe8eb',
					200: '#f6d5da',
					300: '#ea9daa',
					400: '#e58799',
					500: '#d75c77',
					600: '#c13d60',
					700: '#a22e4f',
					800: '#882947',
					900: '#752642',
					950: '#411020'
				}
			}
		}
	},
	plugins: [require('@tailwindcss/forms')]
};
