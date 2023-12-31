'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import SearchForm from '../search/SearchForm';
import { useRouter } from 'next/navigation';
import { isLoginAtom, userNameAtom } from '@/app/recoilContextProvider';
import { useRecoilValue } from 'recoil';

const NavBar = () => {
	const router = useRouter();
	const isLogin = useRecoilValue(isLoginAtom);
	const userName = useRecoilValue(userNameAtom);
	let token: string | null;
	if (typeof window !== 'undefined') {
		token = localStorage.getItem('access');
	}
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
						width={190}
						height={45}
					/>
				</LeftWrapper>
				<RightWrapper>
					<SearchWrapper>
						<SearchForm type="header" />
					</SearchWrapper>
					<ButtonWrapper>
						<Image
							onClick={() => {
								if (!isLogin||!token) {
									alert('🦁 로그인을 먼저 해주세요 🦁');
									router.push('/login');
								} else {
									router.push('/post');
								}
							}}
							src="/img/newPost.png"
							alt={'newPost'}
							width={32}
							height={40}
							style={{ cursor: 'pointer' }}
						/>
						<Image src="/img/random.png" alt={'random'} width={42} height={42} style={{ cursor: 'pointer' }} />
						<Image
							onClick={() => {
								if (isLogin&&token) {
									alert(`🦁 ${userName}님의 로그인이 이미 완료되었습니다 🦁`);
								} else {
								router.push('/login');
							}
							}}
							src="/img/login.png"
							alt={'login'}
							width={33}
							height={40}
							style={{ cursor: 'pointer' }}
						/>
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
		width: 40%;
	}
`;

const SearchWrapper = styled.div`
	display: flex;
	position: relative;
	width: 45%;
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 40%;
	margin-top: 6px;
	justify-content: space-between;
	align-items: center;
`;
