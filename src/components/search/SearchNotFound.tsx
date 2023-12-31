import Image from 'next/image';
import styled from 'styled-components';

const SearchNotFound = ({ searchKeyword }: { searchKeyword: string }) => {
	return (
		<SearchNotFoundWrapper>
			<NotFoundSearchText>해당 문서가 없습니다. 위키에 {searchKeyword} 문서를 만드세요!</NotFoundSearchText>
			<BottomImageWrapper>
				<LionImageWrapper>
					<StyledImage src="/img/no_search_lion.svg" alt="no_search_lion" fill priority />
				</LionImageWrapper>
			</BottomImageWrapper>
		</SearchNotFoundWrapper>
	);
};

const SearchNotFoundWrapper = styled.div`
	margin-top: 10px;
	margin-left: 20%;
`;

const NotFoundSearchText = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: red;
`;

const BottomImageWrapper = styled.div`
	height: 48vh;
	display: flex;
	align-items: flex-end;
`;

const LionImageWrapper = styled.div`
	position: relative;
	width: 800px;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

export default SearchNotFound;
