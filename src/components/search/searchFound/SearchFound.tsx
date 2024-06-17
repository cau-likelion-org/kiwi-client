'use client';

import { useRouter } from 'next/navigation';
import * as S from './SearchFound.styled';
import type { SearchResult } from '@/types/search';
import { getGenerationFormat } from './SearchFound.utils';

const SearchFound = ({ searchResult }: { searchResult: SearchResult[] }) => {
	const router = useRouter();

	const handleClickSearchResult = (id: number) => {
		const selectedDocTitle = searchResult.filter((result) => result.id === id)[0].title;
		const encodedTitle = encodeURIComponent(selectedDocTitle);
		router.push(`viewer?title=${encodedTitle}`);
	};

	return (
		<S.SearchFoundWrapper>
			{searchResult.map((result) => (
				<S.SearchResultWrapper key={result.id}>
					<S.LionImageWrapper>
						<S.StyledImage src="/img/search_lion.svg" alt="search_lion" fill priority />
					</S.LionImageWrapper>
					<S.SearchResultBox onClick={() => handleClickSearchResult(result.id)}>
						<S.SearchResultTitle>{result.title}</S.SearchResultTitle>
						<S.SearchResultContent>{result.content}</S.SearchResultContent>
						<S.SearchResultDirectory>{getGenerationFormat(result.generations)}</S.SearchResultDirectory>
					</S.SearchResultBox>
				</S.SearchResultWrapper>
			))}
		</S.SearchFoundWrapper>
	);
};

export default SearchFound;
