import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			fontFamily: {
				bellefair: ['var(--font-bellefair)'],
				barlow: ['var(--font-barlow)'],
				barlowCondensed: ['var(--font-barlow-condensed)'],
			},
		},
	},
	plugins: [],
};
export default config;

