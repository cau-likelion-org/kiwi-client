import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const SearchForm = ({ searchKeyword, type }: { searchKeyword?: string; type: string }) => {
	const router = useRouter();

	const [searchInput, setSearchInput] = useState(searchKeyword);

	const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		router.push(`search/?search=${searchInput}`);
	};

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		setSearchInput(searchKeyword);
	}, [searchKeyword]);

	return (
		<form onSubmit={handleSearchSubmit}>
			{type === 'search' && (
				<SearchBarInput placeholder="검색어를 입력하세요..." value={searchInput} onChange={handleSearchInput} />
			)}
			{type === 'header' && (
				<SearchHeaderInput placeholder="검색..." value={searchInput} onChange={handleSearchInput} />
			)}
		</form>
	);
};

const SearchHeaderInput = styled.input`
	width: 100%;
	height: 100%;
	margin-left: 12%;
	font-size: 22px;
	border-bottom: 2px solid black !important;
	border: none;
	outline: none;
`;

const SearchBarInput = styled.input`
	background: url('/img/search_bar.svg');
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	font-size: 24px;
	padding: 10px;
	padding-left: 30px;
	width: 550px;
	height: 50px;
	&:focus {
		outline: none;
	}
`;

export default SearchForm;
