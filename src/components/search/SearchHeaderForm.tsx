import useSearchForm from '@/hooks/useSearchForm';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const SearchHeaderForm = ({ searchKeyword }: { searchKeyword: string }) => {
	const { values, isFocused, handleChange, handleSearchSubmit, handleFocus, handleBlur } = useSearchForm({
		initialValue: { searchInput: '', searchHeaderInput: '' },
		searchKeyword,
	});

	return (
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
	);
};
const FormWrapper = styled.form``;

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

export default SearchHeaderForm;
