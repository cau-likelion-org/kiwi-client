'use client';
import SearchBodySection from '@/components/search/SearchBodySection';
import SearchHeadSection from '@/components/search/SearchHeadSection';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

const SearchPage = () => {
	return (
		<>
			<SearchHeadSection />
			<SearchBodySection />
		</>
	);
};

export default SearchPage;
