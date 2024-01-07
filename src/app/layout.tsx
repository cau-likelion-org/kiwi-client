import './global.css';
import StyledComponentsRegistry from './lib/registry';
import NavBar from '@/components/common/NavBar';
import type { Metadata } from 'next';
import RecoidContextProvider from './recoilContextProvider';

export const metadata: Metadata = {
	// verification: {
	// 	google: 'EOz8bF08VwtMDtyyB7n5kcMxUo5ARoeoIqnIeC8_haM',
	// },
	title: '멋사 중앙대 위키',
	description: '멋쟁이 사자처럼 중앙대학교의 위키 입니다',
	authors: [{ name: '중하하 2기' }],
	creator: '중하하 2기',
	publisher: '중하하 2기',
	icons: {
		icon: '/img/icon.png',
	},
	keywords: [
		'중앙대학교',
		'멋쟁이 사자처럼',
		'멋사',
		'멋사 위키',
		'중앙대학교 멋사'
	],
	openGraph: {
		title: '멋사 중앙대 위키',
		description: '멋쟁이 사자처럼 중앙대학교의 위키 입니다',
		url: 'https://kiwi-client.vercel.app/',
		siteName: '멋사 중앙대 위키',
		// images: [
		// 	{
		// 		url: 'https://kiwi-client.vercel.app/어쩌구.png',
		// 	},
		// ],
		type: 'website',
	},
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
