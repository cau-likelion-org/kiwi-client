'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

interface ISearchResult {
	id: string;
	title: string;
	updated_at: string;
	created_at: string;
	author: string;
	generation: string[];
	contents: string;
}

const SearchFound = ({ searchResult }: { searchResult: ISearchResult[] }) => {
	const router = useRouter();

	const handleClickSearchResult = (id: string) => {
		const selectedDocTitle = searchResult.filter((result) => result.id === id)[0].title;
		router.push(`viewer?title=${selectedDocTitle}`);
	};

	return (
		<SearchFoundWrapper>
			{searchResult.map((result) => (
				<SearchResult key={result.id}>
					<LionImageWrapper>
						<StyledImage src="/img/search_lion.svg" alt="search_lion" fill priority />
					</LionImageWrapper>
					<SearchResultBox onClick={() => handleClickSearchResult(result.id)}>
						<SearchResultTitle>{result.title}</SearchResultTitle>
						<SearchResultContent>{result.contents}</SearchResultContent>
						<SearchResultDirectory>{result.generation.join(', ')}</SearchResultDirectory>
					</SearchResultBox>
				</SearchResult>
			))}
		</SearchFoundWrapper>
	);
};

const SearchFoundWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 15px;
`;

const SearchResult = styled.div`
	display: flex;
	align-items: end;
	gap: 20px;
	margin: 30px;
`;

const LionImageWrapper = styled.div`
	width: 128px;
	height: 137px;
	display: flex;
	align-items: center;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const SearchResultBox = styled.div`
	width: 50vw;
	height: 18vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
	border: 3px solid black;
	border-radius: 10px;
	padding: 15px;
`;

const SearchResultTitle = styled.div`
	font-size: 1.8rem;
	font-weight: bold;
`;

const SearchResultContent = styled.div`
	height: 9vh;
	overflow: hidden;
	line-height: 1.4;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1.4rem;
`;

const SearchResultDirectory = styled.div`
	font-size: 1.6rem;
	font-weight: bold;
`;

export default SearchFound;
