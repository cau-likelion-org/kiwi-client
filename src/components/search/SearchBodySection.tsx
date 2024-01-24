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
import Loading from '../common/Loading';

const SearchBodySection = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [searchKeyword, setSearchKeyword] = useState<string>('');
	const [searchResult, setSearchResult] = useState<ISearchResult[]>([]);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const searchParams = params.get('search')!;
		setIsLoading(true);
		setSearchKeyword(searchParams);
	}, [params]);

	// 검색어와 문서 제목이 100% 일치 : 리다이렉트, 일치 X -> 검색 결과
	useEffect(() => {
		if (searchKeyword) {
			getSearchResult(searchKeyword).then((res) => {
				if (Array.isArray(res)) {
					setSearchResult(res);
				} else if (res.titleMatched) {
					let encodedTitle = encodeURIComponent(searchKeyword);
					router.push(`viewer?title=${encodedTitle}`);
				}
				setIsLoading(false);
			});
		}
	}, [router, searchKeyword]);

	return (
		<>
			<SearchBarWrapper>
				<TextImageWrapper>
					<StyledImage
						src="/img/search_text.png"
						alt="search_text"
						fill
						priority
						sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					/>
				</TextImageWrapper>
				<SearchForm searchKeyword={searchKeyword} type="search" />
			</SearchBarWrapper>
			{isLoading ? (
				<Loading />
			) : searchResult.length > 0 ? (
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
	margin-left: 10%;
`;

const TextImageWrapper = styled.div`
	position: relative;
	width: 30rem;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
`;

export default SearchBodySection;
