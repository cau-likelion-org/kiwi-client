'use client';

import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';

const SearchPage = () => {
	const [searchResult, setSearchResult] = useState([
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
	]);

	return (
		<SearchBarSection>
			<SearchBarWapper>
				<Image src="/search_bar.png" alt="" width={540} height={70} priority />
			</SearchBarWapper>
			<SearchResultWrapper>
				{searchResult.map((result) => (
					<SearchResult key={result.id}>
						<LionImageWrapper>
							<Image src="/lion.png" alt="" width={45} height={60} />
						</LionImageWrapper>
						<SearchResultBox>
							<div>{result.category}</div>
							<SearchResultContent>{result.content}</SearchResultContent>
							<div>{result.directory}</div>
						</SearchResultBox>
					</SearchResult>
				))}
			</SearchResultWrapper>
		</SearchBarSection>
	);
};

const SearchBarSection = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	background-color: #4546f2;
	height: 100vh;
`;

const SearchBarWapper = styled.div`
	padding: 20px;
`;

const SearchResultWrapper = styled.div`
	margin-top: 50px;
`;

const SearchResult = styled.div`
	display: flex;
	gap: 20px;
	margin: 30px;
`;

const LionImageWrapper = styled.div`
	display: flex;
	align-items: center;
`;

const SearchResultBox = styled.div`
	width: 50vw;
	height: 15vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
	border: 3px solid black;
	border-radius: 10px;
	padding: 15px;
`;

const SearchResultContent = styled.div`
	height: 9vh;
	overflow: hidden;
	line-height: 1.4;
	margin-top: 10px;
	margin-bottom: 10px;
`;

export default SearchPage;
