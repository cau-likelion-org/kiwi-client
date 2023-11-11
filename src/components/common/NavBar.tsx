// 세팅용 파일
import { styled } from 'styled-components';
import Image from 'next/image';

const NavBar = () => {
	return (
		<Wrapper>
			<LeftWrapper>
				<Image src="/logo.png" alt={'logo'} width={190} height={45} />
			</LeftWrapper>
			<RightWrapper>
				<SearchWrapper>
					<ImageWrapper>
						<Image src="/🔍.png" alt={'search'} width={25} height={25} />
					</ImageWrapper>
					<SearchInput placeholder="검색..." />
				</SearchWrapper>
				<ButtonWrapper>
					<Image src="/random.png" alt={'random'} width={50} height={50} style={{ cursor: 'pointer' }} />
					<Image src="/login.png" alt={'login'} width={50} height={50} style={{ cursor: 'pointer' }} />
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
	top: 1;
	background-color: white;
	/* border: 1px solid black; */
	z-index: 1;
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
	width: 500px;
	margin-right: 3%;
	justify-content: space-between;
	align-items: center;
`;

const SearchWrapper = styled.div`
	display: flex;
	position: relative;
	width: 250px;
	margin-left: 10%;
	/* margin-top: 3px; */
	/* border-bottom: 2px solid black; */
	padding: 5px;
`;

const ImageWrapper = styled.div`
	position: absolute;
	top: 15%;
`;
const SearchInput = styled.input`
	width: 100%;
	height: 100%;
	margin-left: 12%;
	font-size: 22px;
	border-bottom: 2px solid black !important;
	border: none;
	outline: none;
`;

const ButtonWrapper = styled.div`
	display: flex;
	width: 150px;
	margin-top: 6px;
	justify-content: space-between;
	align-items: center;
`;
