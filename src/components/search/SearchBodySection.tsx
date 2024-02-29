'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import SearchForm from './SearchForm';
import Image from 'next/image';

import { useSearchQuery } from '@/hooks/useSearchQuery';
import SearchResultContainer from './SearchResult';

const SearchBodySection = () => {
	const router = useRouter();
	const params = useSearchParams();
	const [searchKeyword, setSearchKeyword] = useState('');
	const searchResult = useSearchQuery(searchKeyword);

	useEffect(() => {
		const searchParams = params.get('search')!;
		setSearchKeyword(searchParams);
	}, [params]);

	useEffect(() => {
		if (searchResult && searchResult.kind === 'searchResult') {
			const encodedTitle = encodeURIComponent(searchKeyword);
			router.push(`viewer?title=${encodedTitle}`);
		}
	}, [searchResult]);

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
			<SearchResultContainer searchResult={searchResult} searchKeyword={searchKeyword} />
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
