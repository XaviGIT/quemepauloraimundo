/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'paulinho' : "url('src/assets/paulo-raimundo02.webp')",
			}
		},
	},
	plugins: [],
}
