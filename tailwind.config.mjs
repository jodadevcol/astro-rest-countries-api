/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			fontFamily: {
				sans: ['Nunito Sans Variable', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				dark: {
					100: 'hsl(209, 23%, 22%)', // dark elements
					200: 'hsl(207, 26%, 17%)', // dark bg
				},
				light: {
					100: 'hsl(200, 15%, 8%)', // light text
					200: 'hsl(0, 0%, 52%)', // light input
					300: 'hsl(0, 0%, 98%)', // light bg
				}
			}
		},
	},
	plugins: [],
}
