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
`;

const NotFoundSearchText = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: red;
	margin-left: 12%;
`;

const BottomImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

const LionImageWrapper = styled.div`
	width: 65vw;
	position: absolute;
	bottom: 0;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

export default SearchNotFound;
