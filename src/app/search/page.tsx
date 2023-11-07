'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const SearchPage = () => {
	return (
		<SearchBarSection>
			<SearchBarWapper>
				<Image src="/search_bar.png" alt="" width={540} height={70} priority />
			</SearchBarWapper>
			<SearchResult>
				<Image src="/lion.png" alt="" width={95} height={122} />
				<SearchResultBox>
					<div>11기 해커톤</div>
					<div>Lorem</div>
					<div>
						11기 {'>'} 11기 행사 {'>'} 해커톤
					</div>
				</SearchResultBox>
			</SearchResult>
		</SearchBarSection>
	);
};

const SearchBarSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: blue;
`;

const SearchBarWapper = styled.div`
	padding: 20px;
`;

const SearchResult = styled.div`
	display: flex;
	gap: 20px;
	margin: 10px;
`;

const SearchResultBox = styled.div`
	width: 50vw;
	background-color: white;
	border: 3px solid black;
	border-radius: 10px;
	border: 4px solid #000;
	background-color: white;
	padding: 15px;
`;

export default SearchPage;
