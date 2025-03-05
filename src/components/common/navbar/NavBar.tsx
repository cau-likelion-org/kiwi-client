'use client';

import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { getRandomDoc } from '@/apis/viewer';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SearchHeaderInput from '@/components/search/searchHeaderInput/searchHeaderInput';
import { AuthVerify } from '@/apis/authAxois';
import * as S from './NavBar.styled';

export interface IMenu {
	src: string;
	routing: string;
}

const NavBar = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
	const router = useRouter();
	const pathname = usePathname();
	const [isLogin, setIsLogin] = useState(false);

	const gotoRandomDoc = async () => {
		const response = await getRandomDoc();
		const title = response.title;
		let encodedTitle = encodeURIComponent(title);
		router.push(`/viewer?title=${encodedTitle}`);
	};

	const handlePostClick = () => {
		if (!isLogin) {
			alert('🦁 로그인을 먼저 해주세요 🦁');
			router.push('/login');
		} else {
			router.push('/post');
		}
	};

	// 유효한 토큰을 가진 경우에만 상태 변경
	useEffect(() => {
		const checkLoginStatus = async () => {
			const loginStatus = await AuthVerify();
			setIsLogin(loginStatus === true);
		};

		checkLoginStatus();
	}, [pathname]);

	return (
		<>
			<S.Margin />
			<S.Wrapper>
				{isMobile ? (
					<S.LeftWrapper>
						<Image
							onClick={() => {
								router.push('/');
							}}
							src="/img/mobileLogo.png"
							alt={'logo'}
							width={100}
							height={34}
						/>
					</S.LeftWrapper>
				) : (
					<S.LeftWrapper>
						<Image
							onClick={() => {
								router.push('/');
							}}
							src="/img/logo.png"
							alt={'logo'}
							width={140}
							height={34}
						/>
					</S.LeftWrapper>
				)}
				<S.RightWrapper>
					{isMobile ? (
						<S.SearchWrapper>
							<SearchHeaderInput />
						</S.SearchWrapper>
					) : (
						<S.SearchWrapper>
							<SearchHeaderInput />
						</S.SearchWrapper>
					)}
					<S.ButtonWrapper>
						<Image
							onClick={() => {
								if (!isLogin) {
									router.push('/login');
								}
							}}
							src={isLogin ? '/img/welcome.png' : '/img/login.png'}
							alt={isLogin ? '로그인버튼' : '로그인'}
							width={44}
							height={44}
							style={{ cursor: 'pointer' }}
						/>
						<Image
							onClick={gotoRandomDoc}
							src="/img/random.png"
							alt={'random'}
							width={44}
							height={44}
							style={{ cursor: 'pointer' }}
						/>
						{!isMobile && (
							<Image
								onClick={handlePostClick}
								src="/img/newPost.png"
								alt={'newPost'}
								width={44}
								height={44}
								style={{ cursor: 'pointer' }}
							/>
						)}
					</S.ButtonWrapper>
				</S.RightWrapper>
			</S.Wrapper>
		</>
	);
};

export default NavBar;
