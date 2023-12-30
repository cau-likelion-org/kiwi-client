import { getSearchResult } from '@/apis/docs';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AutoCompleteBox = ({ searchInput }: { searchInput: string }) => {
	const router = useRouter();
	const [dropdownList, setDropdownList] = useState<string[]>([]);

	useEffect(() => {
		if (searchInput) {
			const timer = setTimeout(() => {
				getSearchResult(searchInput).then((res) => {
					if (Array.isArray(res)) {
						const titleList: string[] = [];
						res.forEach((data) => {
							if (data.title.includes(searchInput)) titleList.push(data.title);
						});
						setDropdownList(titleList);
					} else {
						setDropdownList([res.title]);
					}
				});
			}, 200);

			return () => {
				clearTimeout(timer);
			};
		}
	}, [searchInput]);

	return (
		<BoxWrapper>
			{dropdownList.length > 0 ? (
				dropdownList.map((item, idx) => <ItemWrapper key={idx}>{item}</ItemWrapper>)
			) : (
				<div>검색결과가 없습니다.</div>
			)}
		</BoxWrapper>
	);
};

const BoxWrapper = styled.div`
	width: 500px;
	// height: 100px;
	background-color: white;
	margin-left: 3vw;
	display: flex;
	flex-direction: column;
	gap: 10px;
	position: absolute;
`;

const ItemWrapper = styled.div`
	padding: 15px;
	font-size: 1.4rem;
	cursor: pointer;
	&:hover {
		background-color: lightgrey;
	}
`;

export default AutoCompleteBox;
