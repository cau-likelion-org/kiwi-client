import { getSearchResult } from '@/apis/docs';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const AutoCompleteBox = ({ searchInput }: { searchInput: string }) => {
	const router = useRouter();
	const [dropdownList, setDropdownList] = useState<string[]>([]);

	const handleClickItem = (title: string) => {
		router.push(`search/?search=${title}`);
	};

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
					} else if (res) {
						setDropdownList([res.title]);
					} else {
						setDropdownList([]);
					}
				});
			}, 200);

			return () => {
				clearTimeout(timer);
			};
		} else {
			setDropdownList([]);
		}
	}, [searchInput]);

	return (
		<BoxWrapper>
			{dropdownList.length > 0 ? (
				dropdownList.map((item, idx) => (
					<ItemWrapper key={idx} onClick={() => handleClickItem(item)}>
						{item}
					</ItemWrapper>
				))
			) : (
				<NoResultWrapper>검색결과가 없습니다.</NoResultWrapper>
			)}
		</BoxWrapper>
	);
};

const BoxWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	width: 35vw;
	background-color: white;
	margin-left: 2vw;
	gap: 10px;
	box-shadow: 2px 2px 2px black;
`;

const ItemWrapper = styled.div`
	padding: 15px;
	font-size: 1.4rem;
	cursor: pointer;
	&:hover {
		background-color: lightgrey;
	}
`;

const NoResultWrapper = styled.div`
	padding: 15px;
	font-size: 1.4rem;
	box-shadow: 2px 2px 2px black;
`;

export default AutoCompleteBox;
