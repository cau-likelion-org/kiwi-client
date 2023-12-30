import Image from 'next/image';
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
				<Search>
					<ImageWrapper>
						<Image src="/img/searchIcon.png" alt={'search'} width={25} height={25} style={{ cursor: 'pointer' }} />
					</ImageWrapper>
					<SearchHeaderInput placeholder="검색..." value={searchInput} onChange={handleSearchInput} />
				</Search>
			)}
		</form>
	);
};

const SearchBarInput = styled.input`
	background: url('/img/search_bar.png');
	background-repeat: no-repeat;
	background-size: cover;
	border: none;
	font-size: 2rem;
	font-family: Pretendard;
	padding: 10px;
	padding-left: 30px;
	width: 550px;
	min-height: 53px;
	&:focus {
		outline: none;
	}
`;

const Search =styled.div`
	display: flex;
	align-items: center;
	border-bottom : 1px solid black;
	padding :3px 0rem;
`
const SearchHeaderInput = styled.input`
	font-family: NeoDunggeunmo Pro;
	width: 100%;
	height: 100%;
	font-size: 2rem;
	border: none;
	outline: none;
	padding-left: 1rem;
`;

const ImageWrapper = styled.div`
`;

export default SearchForm;
