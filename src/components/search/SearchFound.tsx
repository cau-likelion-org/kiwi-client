'use client';

import Image from 'next/image';
import styled from 'styled-components';

interface ISearchResult {
	id: number;
	category: string;
	content: string;
	directory: string;
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
						<SearchResultCategory>{result.category}</SearchResultCategory>
						<SearchResultContent>{result.content}</SearchResultContent>
						<SearchResultDirectory>{result.directory}</SearchResultDirectory>
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

const SearchResultCategory = styled.div``;

const SearchResultContent = styled.div`
	height: 9vh;
	overflow: hidden;
	line-height: 1.4;
	margin-top: 10px;
	margin-bottom: 10px;
`;

const SearchResultDirectory = styled.div``;

export default SearchFound;
