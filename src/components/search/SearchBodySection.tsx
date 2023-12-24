'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
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
	const [searchKeyword, setSearchKeyword] = useState<string>('');
	const [searchResult, setSearchResult] = useState<ISearchResult[]>([]);

	useEffect(() => {
		const searchParams = params.get('search');
		if (typeof searchParams == 'string') {
			setSearchKeyword(searchParams);
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
				<SearchForm searchKeyword={searchKeyword} type="search" />
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

const SearchResultWrapper = styled.div`
	margin-top: 50px;
`;

export default SearchBodySection;
