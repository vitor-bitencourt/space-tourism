'use client';

import React, { createContext, useContext, useEffect, useState } from 'react';

interface WindowWidthContextType {
	width: number;
}

const WindowWidthContext = createContext<WindowWidthContextType>({ width: 0 });
WindowWidthContext.displayName = 'WindowWidth';

export function useWindowWidth(): number {
	const context = useContext(WindowWidthContext);
	return context.width;
}

interface WindowWidthProviderProps {
	children: React.ReactNode;
}

export function WindowWidthProvider({
	children,
}: WindowWidthProviderProps): JSX.Element {
	const [windowWidth, setWindowWidth] = useState<WindowWidthContextType>({
		width: 0,
	});

	useEffect(() => {
		function handleResize() {
			setWindowWidth({ width: window.innerWidth });
		}

		handleResize();

		window.addEventListener('resize', handleResize);
		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<WindowWidthContext.Provider value={windowWidth}>
			{children}
		</WindowWidthContext.Provider>
	);
}
