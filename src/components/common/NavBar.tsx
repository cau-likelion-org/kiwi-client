'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import { getRandomDoc } from '@/apis/viewer';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SearchHeaderInput from '../search/searchHeaderInput/searchHeaderInput';
import { AuthVerify } from '@/apis/authAxois';

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
		const loginStatus = AuthVerify();
		setIsLogin(loginStatus === true);
	}, [pathname]);

	return (
		<>
			<Margin />
			<Wrapper>
				<LeftWrapper onClick={() => router.push('/')}>
					<Image
						src={isMobile ? '/img/mobileLogo.png' : '/img/logo.png'}
						alt={'logo'}
						width={isMobile ? 100 : 140}
						height={34}
					/>
				</LeftWrapper>
				<RightWrapper>
					<SearchWrapper>
						<SearchHeaderInput />
					</SearchWrapper>
					<ButtonWrapper>
						{isMobile ? null : (
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
						)}
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
						{/* {isLogin && <button onClick={handleLogoutClick}>로그아웃</button>} */}
					</ButtonWrapper>
				</RightWrapper>
			</Wrapper>
		</>
	);
};

export default NavBar;

const Margin = styled.div`
	width: 100%;
	min-height: 64px;
`;

const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 64px;
	background-color: white;
	top: 0;
	z-index: 10;
`;

const LeftWrapper = styled.div`
	display: flex;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	margin-left: 3%;
	@media screen and (max-width: 540px) {
		margin-left: 3%;
	}
`;

const RightWrapper = styled.div`
	display: flex;
	width: 60%;
	margin-right: 1%;
	justify-content: space-between;
	align-items: center;
	@media screen and (min-width: 1024px) {
		width: 40%;
	}
`;

const SearchWrapper = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	@media screen and (max-width: 540px) {
		width: 60%;
		margin-top: 0.5rem;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 40%;
	margin-top: 6px;
	margin-right: 1.5rem;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 540px) {
		width: 35%;
		gap: 0.5rem;
	}
`;
