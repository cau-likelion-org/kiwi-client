'use client';

import '@styles/global.css';
import StyledComponentsRegistry from './lib/registry';
import NavBar from '@/components/common/NavBar';

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<NavBar />
				<StyledComponentsRegistry>{children}</StyledComponentsRegistry>
			</body>
		</html>
	);
}
