import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

interface SearchFormProps {
	searchKeyword?: string;
	type: string;
}

const SearchForm = ({ searchKeyword, type }: SearchFormProps) => {
	const router = useRouter();

	const [searchInput, setSearchInput] = useState(searchKeyword);
	const [searchHeaderInput, setSearchHeaderInput] = useState('');

	const handleSearchHeaderSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchHeaderInput('');
		router.push(`search/?search=${searchHeaderInput}`);
	};

	const handleSearchHeaderInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchHeaderInput(e.target.value);
	};

	const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setSearchHeaderInput('');
		router.push(`search/?search=${searchInput}`);
	};

	const handleSearchInput = (e: React.ChangeEvent<HTMLInputElement>) => {
		setSearchInput(e.target.value);
	};

	useEffect(() => {
		if (searchKeyword) setSearchInput(searchKeyword);
	}, [searchKeyword]);

	return (
		<>
			{type === 'search' && (
				<FormWrapper onSubmit={handleSearchSubmit}>
					<SearchBarInput placeholder="검색어를 입력하세요..." value={searchInput} onChange={handleSearchInput} />
				</FormWrapper>
			)}
			{type === 'header' && (
				<FormWrapper onSubmit={handleSearchHeaderSubmit}>
					<SearchWrapper>
						<ImageButtonWrapper>
							<Image src="/img/searchIcon.png" alt={'search'} width={25} height={25} style={{ cursor: 'pointer' }} />
						</ImageButtonWrapper>
						<SearchHeaderInput placeholder="검색..." value={searchHeaderInput} onChange={handleSearchHeaderInput} />
					</SearchWrapper>
				</FormWrapper>
			)}
		</>
	);
};

const FormWrapper = styled.form``;

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

const SearchWrapper = styled.div`
	display: flex;
	align-items: center;
	border-bottom: 1px solid black;
	padding: 3px 0rem;
`;

const SearchHeaderInput = styled.input`
	font-family: NeoDunggeunmo Pro;
	width: 100%;
	height: 100%;
	font-size: 2rem;
	border: none;
	outline: none;
	padding-left: 1rem;
`;

const ImageButtonWrapper = styled.button`
	border: none;
	outline: none;
	background-color: inherit;
`;

export default SearchForm;
