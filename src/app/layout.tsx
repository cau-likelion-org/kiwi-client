import './global.css';
import StyledComponentsRegistry from './lib/registry';
import NavBar from '@/components/common/navbar/NavBar';
import type { Metadata } from 'next';
import RecoidContextProvider from './recoilContextProvider';
import ReactQueryProvider from './ReactQueryProvider';

export const metadata: Metadata = {
	title: '멋사 중앙대 위키',
	description: '멋쟁이 사자처럼 중앙대학교의 위키 입니다',
	authors: [{ name: '중하하 2기' }],
	creator: '중하하 2기',
	publisher: '중하하 2기',
	keywords: ['중앙대학교', '멋쟁이 사자처럼', '멋사', '멋사 위키', '중앙대학교 멋사'],
	openGraph: {
		title: '멋사 중앙대 위키',
		description: '멋쟁이 사자처럼 중앙대학교의 위키 입니다',
		url: 'https://wiki.cau-likelion.org/',
		siteName: '멋사 중앙대 위키',
		type: 'website',
	},
	viewport: {
		width: 'device-width',
		initialScale: 1,
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html>
			<head>
				<link rel="manifest" href="/manifest.json" />
				<link rel="icon" href="/img/icon.png" type="image/png" sizes="32x32" />
			</head>
			<body>
				<RecoidContextProvider>
					<ReactQueryProvider>
						<StyledComponentsRegistry>
							<NavBar />
							{children}
						</StyledComponentsRegistry>
					</ReactQueryProvider>
				</RecoidContextProvider>
			</body>
		</html>
	);
}
