'use client';

import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchFound from './SearchFound';
import SearchNotFound from './SearchNotFound';

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
					onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
				/>
			</SearchBarWrapper>
			<SearchResultWrapper>
				{searchResult.length > 0 ? (
					<SearchFound searchResult={searchResult} />
				) : (
					<SearchNotFound searchKeyword={searchKeyword} />
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

export default SearchBodySection;
