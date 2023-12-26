'use client';

import Image from 'next/image';
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
	return (
		<>
			{searchResult.map((result) => (
				<SearchResult key={result.id}>
					<LionImageWrapper>
						<Image src="/img/search_lion.svg" alt="" width={128} height={137} />
					</LionImageWrapper>
					<SearchResultBox>
						<SearchResultTitle>{result.title}</SearchResultTitle>
						<SearchResultContent>{result.contents}</SearchResultContent>
						<SearchResultDirectory>{result.generation.join(', ')}</SearchResultDirectory>
					</SearchResultBox>
				</SearchResult>
			))}
		</>
	);
};

const SearchResult = styled.div`
	display: flex;
	gap: 20px;
	margin: 30px;
`;

const LionImageWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const SearchResultBox = styled.div`
	width: 50vw;
	height: 15vh;
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
