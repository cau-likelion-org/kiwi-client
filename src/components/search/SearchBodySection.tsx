'use client';

import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const dummyData: ISearchResult[] = [
	{
		id: 0,
		category: '11기 해커톤',
		content:
			'Lorem ipsum dolor sit amet consectetur. Velit at nibh rutrum ultrices. Vestibulum magna nunc euismod diam. Nisl bibendum neque dignissim leo commodo elit volutpat. Dictum facilisi blandit tincidunt gravida ut tellus cursus tempor ipsum. Purus accumsan sagittis facilisis mauris cras dolor interdum. Tempor volutpat tellus nibh quisque mi commodo orci sed tincidunt',
		directory: '11기 > 11기 행사 > 해커톤',
	},
	{
		id: 1,
		category: '10기 해커톤',
		content:
			'Lorem ipsum dolor sit amet consectetur. Velit at nibh rutrum ultrices. Vestibulum magna nunc euismod diam. Nisl bibendum neque dignissim leo commodo elit volutpat. Dictum facilisi blandit tincidunt gravida ut tellus cursus tempor ipsum. Purus accumsan sagittis facilisis mauris cras dolor interdum. Tempor volutpat tellus nibh quisque mi commodo orci sed tincidunt',
		directory: '10기 > 10기 행사 > 해커톤',
	},
	{
		id: 2,
		category: '9기 해커톤',
		content:
			'Lorem ipsum dolor sit amet consectetur. Velit at nibh rutrum ultrices. Vestibulum magna nunc euismod diam. Nisl bibendum neque dignissim leo commodo elit volutpat. Dictum facilisi blandit tincidunt gravida ut tellus cursus tempor ipsum. Purus accumsan sagittis facilisis mauris cras dolor interdum. Tempor volutpat tellus nibh quisque mi commodo orci sed tincidunt',
		directory: '9기 > 9기 행사 > 해커톤',
	},
];

interface ISearchResult {
	id: number;
	category: string;
	content: string;
	directory: string;
}

const SearchBodySection = ({ searchKeyword }: { searchKeyword: string }) => {
	const [searchResult, setSearchResult] = useState<ISearchResult[]>([]);
	const [searchInput, setSearchInput] = useState('');

	useEffect(() => {
		// TODO: 검색키워드에 따라 검색 API 호출
	}, []);

	return (
		<SearchBodyWrapper>
			<SearchBarWrapper>
				<SearchBarInput
					placeholder="검색어를 입력하세요..."
					value={searchInput}
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => e.target.value}
				/>
			</SearchBarWrapper>
			<SearchResultWrapper>
				{searchResult.length > 0 ? (
					searchResult.map((result) => (
						<SearchResult key={result.id}>
							<LionImageWrapper>
								<Image src="/search_lion.svg" alt="" width={128} height={137} />
							</LionImageWrapper>
							<SearchResultBox>
								<div>{result.category}</div>
								<SearchResultContent>{result.content}</SearchResultContent>
								<div>{result.directory}</div>
							</SearchResultBox>
						</SearchResult>
					))
				) : (
					<>
						<NotFoundSearchText>해당 문서가 없습니다. 위키에 {searchKeyword} 문서를 만드세요!</NotFoundSearchText>
						<BottomImageWrapper>
							<Image src="/no_search_lion.svg" alt="" width={800} height={250}></Image>
						</BottomImageWrapper>
					</>
				)}
			</SearchResultWrapper>
		</SearchBodyWrapper>
	);
};

const SearchBodyWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const SearchBarWrapper = styled.div``;

const SearchBarInput = styled.input`
	background: url('/search_bar.svg');
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	font-size: 24px;
	padding: 10px;
	padding-left: 30px;
	width: 550px;
	height: 50px;
	&:focus {
		outline: none;
	}
`;

const SearchResultWrapper = styled.div`
	margin-top: 50px;
`;

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

const SearchResultContent = styled.div`
	height: 9vh;
	overflow: hidden;
	line-height: 1.4;
	margin-top: 10px;
	margin-bottom: 10px;
`;

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

export default SearchBodySection;
