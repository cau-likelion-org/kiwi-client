// 세팅용 파일
'use client';

import { styled } from 'styled-components';
import Image from 'next/image';
import SearchForm from '../search/SearchForm';
import { useRouter } from 'next/navigation';

const NavBar = () => {
	const router = useRouter();
	return (
		<Wrapper>
			<LeftWrapper>
				<Image src="/img/logo.png" alt={'logo'} width={190} height={45} />
			</LeftWrapper>
			<RightWrapper>
				<SearchWrapper>
					<ImageWrapper>
						<Image src="/img/🔍.png" alt={'search'} width={25} height={25} style={{ cursor: 'pointer' }} />
					</ImageWrapper>
					<SearchForm type="header" />
				</SearchWrapper>
				<ButtonWrapper>
					<Image
						onClick={() => {
							router.push('/post');
						}}
						src="/img/newPost.png"
						alt={'newPost'}
						width={32}
						height={40}
						style={{ cursor: 'pointer' }}
					/>
					<Image src="/img/random.png" alt={'random'} width={42} height={42} style={{ cursor: 'pointer' }} />
					<Image src="/img/login.png" alt={'login'} width={33} height={40} style={{ cursor: 'pointer' }} />
				</ButtonWrapper>
			</RightWrapper>
		</Wrapper>
	);
};

export default NavBar;

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

const ImageWrapper = styled.div`
	position: absolute;
	top: 15%;
	margin-right: 3rem;
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 40%;
	margin-top: 6px;
	justify-content: space-between;
	align-items: center;
`;
