'use client';

import SearchBodySection from '@/components/search/SearchBodySection';
import SearchHeadSection from '@/components/search/SearchHeadSection';
import styled from 'styled-components';

const SearchPage = () => {
	return (
		<SearchBarSection>
			<SearchHeadSection />
			<SearchBodySection />
		</SearchBarSection>
	);
};

const SearchBarSection = styled.div`
	background-color: #4546f2;
`;

export default SearchPage;
