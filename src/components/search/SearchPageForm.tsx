import useSearchForm from '@/hooks/useSearchForm';
import React from 'react';
import styled from 'styled-components';
import AutoCompleteBox from './AutoCompleteBox';

const SearchPageForm = ({ searchKeyword }: { searchKeyword: string }) => {
	const { values, isFocused, handleChange, handleSearchSubmit, handleFocus, handleBlur } = useSearchForm({
		initialValue: { searchInput: '' },
		searchKeyword,
	});

	return (
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
	height: 2.5rem;

	&:focus {
		outline: none;
	}
`;

export default SearchPageForm;
