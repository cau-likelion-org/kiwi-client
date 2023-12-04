import Image from 'next/image';
import styled from 'styled-components';

const SearchHeadSection = () => {
	return (
		<SearchHeadWrapper>
			<HeartImageWrapper>
				<Image src="/img/heart.svg" alt="" width={310} height={98} />
			</HeartImageWrapper>
			<SearchingText>YOU SEARCHED FOR.....</SearchingText>
		</SearchHeadWrapper>
	);
};

const SearchHeadWrapper = styled.div`
	padding: 20px;
`;

const HeartImageWrapper = styled.div`
	display: flex;
	gap: 10px;
`;

const SearchingText = styled.div`
	color: white;
	font-family: Pretendard;
	font-size: 50px;
	line-height: normal;
`;

export default SearchHeadSection;
