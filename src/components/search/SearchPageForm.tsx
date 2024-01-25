import useSearchForm from '@/hooks/useSearchForm';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import AutoCompleteBox from './AutoCompleteBox';

const SearchPageForm = ({ searchKeyword }: { searchKeyword: string }) => {
	const { values, isFocused, handleFocus, handleBlur, handleChange, handleSearchSubmit } = useSearchForm({
		initialValue: { searchInput: '', searchHeaderInput: '' },
		searchKeyword,
	});

	useEffect(() => {
		const body = document.querySelector('body')!;
		body.addEventListener('click', (e: MouseEvent) => {
			if (e.target instanceof HTMLDivElement && e.target.id !== 'complete') {
				handleBlur();
			}
		});
		return body.removeEventListener('click', (e) => {
			if (e.target instanceof HTMLDivElement && e.target.id !== 'complete') {
				handleBlur();
			}
		});
	}, []);

	return (
		<FormWrapper name="searchInput" onSubmit={handleSearchSubmit}>
			<SearchBarInput
				id="complete"
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
