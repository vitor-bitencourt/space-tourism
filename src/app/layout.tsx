import type { Metadata } from 'next';
import { Barlow, Barlow_Condensed, Bellefair } from 'next/font/google';

import './globals.css';

const bellefair = Bellefair({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-bellefair',
});

const barlow = Barlow({
	weight: ['400'],
	subsets: ['latin'],
	display: 'swap',
	preload: true,
	variable: '--font-barlow',
});

const barlowCondensed = Barlow_Condensed({
	weight: ['400'],
	display: 'swap',
	subsets: ['latin'],
	preload: true,
	variable: '--font-barlow-condensed',
});

export const metadata: Metadata = {
	title: 'Space Tourism',
	description: 'An expedition to the space',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='pt-br'>
			<body
				className={`${bellefair.variable} ${barlow.variable} ${barlowCondensed.variable}`}>
				{children}
			</body>
		</html>
	);
}
