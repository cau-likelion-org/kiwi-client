'use client';

import { useRouter, useSearchParams } from 'next/navigation';
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

const SearchBodySection = () => {
	const params = useSearchParams();
	const router = useRouter();

	const [searchKeyword, setSearchKeyword] = useState<string>('');

	const [searchResult, setSearchResult] = useState<ISearchResult[]>([]);
	const [searchInput, setSearchInput] = useState('');

	const handleSubmitSearch = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`search/?search=${searchInput}`);
	};

	useEffect(() => {
		const searchParams = params.get('search');
		if (typeof searchParams == 'string') {
			setSearchKeyword(searchParams);
			setSearchInput(searchParams);
		}
	}, [params]);

	// useEffect(() => {
	// 	// TODO: 검색결과 가져오는 API 요청
	// 	getSearchResult().then((res) => {
	// 		setSearchResult(res);
	// 	})
	// }, [])

	return (
		<SearchBodyWrapper>
			<SearchBarWrapper>
				<form onSubmit={handleSubmitSearch}>
					<SearchBarInput
						placeholder="검색어를 입력하세요..."
						value={searchInput}
						onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchInput(e.target.value)}
					/>
				</form>
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
	background: url('/img/search_bar.svg');
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
