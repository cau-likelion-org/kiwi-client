import Image from 'next/image';
import styled from 'styled-components';

const SearchHeadSection = () => {
	return (
		<SearchHeadWrapper>
			<HeadText>STAGE 1</HeadText>
			<HeartImageWrapper>
				<Image src="/heart.png" alt="" width={30} height={30} />
				<Image src="/heart.png" alt="" width={30} height={30} />
				<Image src="/heart.png" alt="" width={30} height={30} />
				<Image src="/heart.png" alt="" width={30} height={30} />
				<Image src="/heart.png" alt="" width={30} height={30} />
			</HeartImageWrapper>
			<SearchingText>YOU SEARCHED FOR.....</SearchingText>
		</SearchHeadWrapper>
	);
};

const SearchHeadWrapper = styled.div`
	padding: 20px;
`;

const HeadText = styled.div`
	font-size: 36px;
	color: white;
`;

const HeartImageWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

const SearchingText = styled.div`
	color: white;
	font-family: LIQUIDO;
	font-size: 50px;
	line-height: normal;
`;

export default SearchHeadSection;
