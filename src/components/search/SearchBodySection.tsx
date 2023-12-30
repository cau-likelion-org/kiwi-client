'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import SearchFound from './SearchFound';
import SearchNotFound from './SearchNotFound';
import Image from 'next/image';
import { getSearchResult } from '@/apis/docs';
import { ISearchResult } from '@/types/request';

const dummyData: ISearchResult[] = [
	{
		id: 5,
		title: '한윤호',
		generations: [
			{
				generation: '11기',
			},
			{
				generation: '12기',
			},
		],
		updated_at: '2023-12-30T03:01:42.531210',
		created_at: '2023-12-30T03:01:42.532248',
		author: 'oro6',
		content: '#파트 : [백엔드](http://localhost:3000/viewer?title=백엔드)',
		titleMatched: true,
	},
	{
		id: 4,
		title: '백엔드',
		generations: [
			{
				generation: '11기',
			},
			{
				generation: '12기',
			},
		],
		updated_at: '2023-12-30T03:00:35.900116',
		created_at: '2023-12-30T03:00:35.901128',
		author: 'oro6',
		content: '#인원 : 한윤호(http://127.0.0.1:8000/docs/recent/한윤호/), 이기웅',
		titleMatched: false,
	},
];

const SearchBodySection = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [searchKeyword, setSearchKeyword] = useState<string>('');
	const [searchResult, setSearchResult] = useState<ISearchResult[]>([]);

	useEffect(() => {
		const searchParams = params.get('search');
		if (typeof searchParams === 'string') {
			setSearchKeyword(searchParams);
		}
	}, [params]);

	// 검색어와 문서 제목이 100% 일치 : 리다이렉트, 일치 X -> 검색 결과
	useEffect(() => {
		if (searchKeyword) {
			getSearchResult(searchKeyword).then((res) => {
				if (res[0].titleMatched) router.push(`viewer?title=${searchKeyword}`);
				else setSearchResult(res);
			});
		}
	}, [router, searchKeyword]);

	return (
		<>
			<SearchBarWrapper>
				<TextImageWrapper>
					<StyledImage src="/img/search_text.png" alt="search_text" fill priority />
				</TextImageWrapper>
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

const TextImageWrapper = styled.div`
	width: 300px;
	height: 40px;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

export default SearchBodySection;
