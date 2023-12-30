'use client';

import { IGenerations, ISearchResult } from '@/types/request';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import styled from 'styled-components';

const SearchFound = ({ searchResult }: { searchResult: ISearchResult[] }) => {
	const router = useRouter();

	const handleClickSearchResult = (id: number) => {
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
						<SearchResultContent>{result.content}</SearchResultContent>
						<SearchResultDirectory>{getGenerationFormat(result.generations)}</SearchResultDirectory>
					</SearchResultBox>
				</SearchResult>
			))}
		</SearchFoundWrapper>
	);
};

const getGenerationFormat = (generations: IGenerations[]) => {
	const genFormat: string[] = [];
	generations.forEach((data) => {
		genFormat.push(data.generation);
	});
	return genFormat.join(', ');
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
	cursor: pointer;
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
