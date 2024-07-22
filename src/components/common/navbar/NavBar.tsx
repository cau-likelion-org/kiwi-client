'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { token } from '@/app/recoilContextProvider';
import { useRecoilValue } from 'recoil';
import { getRandomDoc } from '@/apis/viewer';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import SearchHeaderInput from '@/components/search/searchHeaderInput/searchHeaderInput';
import * as S from './NavBar.styled';

export interface IMenu {
	src: string;
	routing: string;
}

const NavBar = () => {
	const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
	const router = useRouter();

	const { access: tokenState } = useRecoilValue(token);
	const [isLogin, setIsLogin] = useState(false);

	const gotoRandomDoc = async () => {
		const response = await getRandomDoc();
		const title = response.title;
		let encodedTitle = encodeURIComponent(title);
		router.push(`/viewer?title=${encodedTitle}`);
	};

	useEffect(() => {
		if (tokenState) setIsLogin(true);
	}, [tokenState]);

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
						{isMobile ? (
							<div></div>
						) : (
							<Image
								onClick={() => {
									if (!isLogin) {
										alert('🦁 로그인을 먼저 해주세요 🦁');
										router.push('/login');
									} else {
										router.push('/post');
									}
								}}
								src="/img/newPost.png"
								alt={'newPost'}
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
						{isLogin ? (
							<Image src="/img/welcome.png" width={44} height={44} alt={'로그인버튼'} />
						) : (
							<Image
								src="/img/login.png"
								onClick={() => {
									router.push(`/login`);
								}}
								width={44}
								height={44}
								alt={'로그인버튼'}
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
