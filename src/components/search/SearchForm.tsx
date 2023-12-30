import useSearchForm from '@/hooks/useSearchForm';
import Image from 'next/image';
import styled from 'styled-components';

interface SearchFormProps {
	searchKeyword?: string;
	type: string;
}

const SearchForm = ({ searchKeyword, type }: SearchFormProps) => {
	const { values, handleChange, handleSearchSubmit } = useSearchForm({
		initialValue: { searchInput: '', searchHeaderInput: '' },
		searchKeyword,
	});

	return (
		<>
			{type === 'search' && (
				<FormWrapper name="searchInput" onSubmit={handleSearchSubmit}>
					<SearchBarInput
						name="searchInput"
						placeholder="검색어를 입력하세요..."
						value={values.searchInput}
						onChange={handleChange}
					/>
				</FormWrapper>
			)}
			{type === 'header' && (
				<FormWrapper name="searchHeaderInput" onSubmit={handleSearchSubmit}>
					<SearchWrapper>
						<ImageButtonWrapper>
							<Image src="/img/searchIcon.png" alt={'search'} width={25} height={25} style={{ cursor: 'pointer' }} />
						</ImageButtonWrapper>
						<SearchHeaderInput
							name="searchHeaderInput"
							placeholder="검색..."
							value={values.searchHeaderInput}
							onChange={handleChange}
						/>
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
