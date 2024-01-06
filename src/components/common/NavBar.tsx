'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import SearchForm from '../search/SearchForm';
import { useRouter } from 'next/navigation';
import { token } from '@/app/recoilContextProvider';
import { useRecoilValue } from 'recoil';
import { getRandomDoc } from '@/apis/viewer';
import { useEffect, useState } from 'react';

export interface IMenu {
	src: string;
	routing: string;
}

const NavBar = () => {
	const router = useRouter();

	const { access: tokenState } = useRecoilValue(token);
	const [isLogin, setIsLogin] = useState(false);

	const gotoRandomDoc = async () => {
		const response = await getRandomDoc();
		const title = response.title;
		router.push(`/viewer?title=${title}`);
	};

	useEffect(() => {
		if (tokenState) setIsLogin(true);
	}, [tokenState]);

	const loginButton = (): IMenu[] => {
		const resultArray = [
			// { src: "/img/newPost.png", routing: isLogin ? '/post':'/login' },
			// { src: "/img/random.png", routing: 'https://blog.cau-likelion.org' },
			{ src: isLogin ? '/img/welcome.png' : '/img/login.png', routing: isLogin ? '/login' : '/' },
		];
		return resultArray;
	};
	return (
		<>
			<Margin />
			<Wrapper>
				<LeftWrapper>
					<Image
						onClick={() => {
							router.push('/');
						}}
						src="/img/logo.png"
						alt={'logo'}
						width={140}
						height={34}
					/>
				</LeftWrapper>
				<RightWrapper>
					<SearchWrapper>
						<SearchForm type="header" />
					</SearchWrapper>
					<ButtonWrapper>
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
						<Image
							onClick={gotoRandomDoc}
							src="/img/random.png"
							alt={'random'}
							width={44}
							height={44}
							style={{ cursor: 'pointer' }}
						/>
						{loginButton().map(({ src, routing }, index) => (
							<Image
								key={index + routing}
								src={src}
								onClick={() => {
									router.push(`${routing}`);
								}}
								width={44}
								height={44}
								alt={'로그인버튼'}
							/>
						))}
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
`;

const RightWrapper = styled.div`
	display: flex;
	width: 60%;
	margin-right: 1%;
	justify-content: space-between;
	align-items: center;
	@media screen and (min-width: 1024px) {
		width: 30%;
	}
`;

const SearchWrapper = styled.div`
	display: flex;
	position: relative;
	width: 50%;
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 40%;
	margin-top: 6px;
	margin-right: 1.5rem;
	justify-content: space-between;
	align-items: center;
`;
