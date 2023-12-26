'use client';

import { useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import SearchFound from './SearchFound';
import SearchNotFound from './SearchNotFound';
import Image from 'next/image';

const dummyData: ISearchResult[] = [
	{
		id: '20231223205359_홍보팀',
		title: '홍보팀',
		updated_at: '2023-12-23 20:53:59',
		created_at: '2023-11-11 20:53:59',
		author: '웅장한홍보팀장',
		generation: ['12기'],
		contents: '12기 홍보팀은 이기웅, 누구로 구성되어 있으며 ~',
	},
	{
		id: '20231223205359_베베',
		title: '베베',
		updated_at: '2023-12-23 20:53:59',
		created_at: '2023-11-11 20:53:59',
		author: '웅장한홍보팀장',
		generation: ['11기, 12기'],
		contents:
			'베베는 11기 해커톤 프로젝트로, 백엔드는 이기웅, 민병록 ~ Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestiae ut nostrum ipsa dolorum deleniti at non, reprehenderit amet facere error, inventore reiciendis minima? Hic delectus ab aspernatur maxime. Numquam, adipisci! asdasd',
	},
];

interface ISearchResult {
	id: string;
	title: string;
	updated_at: string;
	created_at: string;
	author: string;
	generation: string[];
	contents: string;
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
		<>
			<SearchBarWrapper>
				<Image src="/img/search_text.png" alt="" width={300} height={50} />
				<SearchForm searchKeyword={searchKeyword} type="search" />
			</SearchBarWrapper>
			{searchResult.length > 0 ? (
				<SearchFound searchResult={searchResult} />
			) : (
				<SearchNotFound searchKeyword={searchKeyword} />
			)}
		</>
	);
};

const SearchBarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-left: 18%;
`;

export default SearchBodySection;
