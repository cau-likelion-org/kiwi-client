import './global.css';
import StyledComponentsRegistry from './lib/registry';
import NavBar from '@/components/common/NavBar';
import type { Metadata } from 'next';
import RecoidContextProvider from './recoilContextProvider';

export const metadata: Metadata = {
	title: '멋사 위키',
	description: '멋쟁이 사자처럼 위키 페이지',
	icons: {
		icon: '/img/icon.png',
	},
	keywords: ['멋쟁이 사자처럼', '멋사', '위키', '중앙대학교'],
	creator: 'JayJay03',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<body>
				<RecoidContextProvider>
					<StyledComponentsRegistry>
						<NavBar />
						{children}
					</StyledComponentsRegistry>
				</RecoidContextProvider>
			</body>
		</html>
	);
}
