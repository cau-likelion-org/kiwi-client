import Image from 'next/image';
import styled from 'styled-components';

const SearchNotFound = ({ searchKeyword }: { searchKeyword: string }) => {
	return (
		<>
			<NotFoundSearchText>해당 문서가 없습니다. 위키에 {searchKeyword} 문서를 만드세요!</NotFoundSearchText>
			<BottomImageWrapper>
				<Image src="/no_search_lion.svg" alt="" width={800} height={250}></Image>
			</BottomImageWrapper>
		</>
	);
};

const NotFoundSearchText = styled.div`
	display: flex;
	justify-content: center;
	color: red;
`;

const BottomImageWrapper = styled.div`
	display: flex;
	align-items: flex-end;
	height: 54vh;
`;

export default SearchNotFound;
