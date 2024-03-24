/** @type {import('tailwindcss').Config} */

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"primary": "hsl(var(--primary))",
				"primary-content": "hsl(var(--primary-content))",
				"secondary": "hsl(var(--secondary))",
				"secondary-content": "hsl(var(--secondary-content))",
				"accent": "hsl(var(--accent))",
				"accent-content": "hsl(var(--accent-content))",
			}
		},
	},

	plugins: [
		function ({ addUtilities }) {
			const newUtils = {
				'.full-bleed': {
					boxShadow:
						'0 0 0 100vmax hsl(var(--primary))',
					clipPath: 'inset(0 -100vmax)',
				},
			};
			addUtilities(newUtils, ['responsive', 'hover']);
		},
	],

}
