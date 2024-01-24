import useSearchForm from '@/hooks/useSearchForm';
import Image from 'next/image';
import styled from 'styled-components';
import AutoCompleteBox from './AutoCompleteBox';

interface SearchFormProps {
	type: string;
	searchKeyword?: string;
}

const SearchForm = ({ type, searchKeyword }: SearchFormProps) => {
	const { values, isFocused, handleChange, handleSearchSubmit, handleFocus, handleBlur } = useSearchForm({
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
						onFocus={handleFocus}
						autoComplete="off"
					/>
					{isFocused && values.searchInput.length > 0 && <AutoCompleteBox searchInput={values.searchInput} />}
				</FormWrapper>
			)}
			{type === 'header' && (
				<FormWrapper name="searchHeaderInput" onSubmit={handleSearchSubmit}>
					<SearchWrapper>
						<ImageButtonWrapper>
							<Image src="/img/searchIcon.png" alt={'search'} width={20} height={20} style={{ cursor: 'pointer' }} />
						</ImageButtonWrapper>
						<SearchHeaderInput
							name="searchHeaderInput"
							placeholder="검색..."
							value={values.searchHeaderInput}
							onChange={handleChange}
							autoComplete="off"
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
	background-size: contain;
	border: none;
	font-size: 2rem;
	font-family: Pretendard;
	padding: 10px;
	padding-left: 30px;
	width: 55rem;
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
	font-size: 1.5rem;
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
