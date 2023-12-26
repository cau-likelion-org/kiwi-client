import Image from 'next/image';
import styled from 'styled-components';

const SearchNotFound = ({ searchKeyword }: { searchKeyword: string }) => {
	return (
		<SearchNotFoundWrapper>
			<NotFoundSearchText>해당 문서가 없습니다. 위키에 {searchKeyword} 문서를 만드세요!</NotFoundSearchText>
			<BottomImageWrapper>
				<Image src="/img/no_search_lion.svg" alt="" width={800} height={250}></Image>
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
	height: 54vh;
	display: flex;
	align-items: flex-end;
`;

export default SearchNotFound;
