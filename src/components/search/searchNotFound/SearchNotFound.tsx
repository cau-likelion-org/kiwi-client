import * as S from './SearchNotFound.styled';

const SearchNotFound = ({ searchKeyword }: { searchKeyword: string }) => {
	return (
		<S.SearchNotFoundWrapper>
			<S.NotFoundSearchText>해당 문서가 없습니다. 위키에 {searchKeyword} 문서를 만드세요!</S.NotFoundSearchText>
			<S.BottomImageWrapper>
				<S.LionImageWrapper>
					<S.StyledImage src="/img/no_search_lion.svg" alt="no_search_lion" fill priority />
				</S.LionImageWrapper>
			</S.BottomImageWrapper>
		</S.SearchNotFoundWrapper>
	);
};

export default SearchNotFound;
