import useSearchForm from '@/hooks/useSearchForm';
import Image from 'next/image';
import React from 'react';
import * as S from './SearchHeaderForm.styled';

const SearchHeaderForm = ({ searchKeyword }: { searchKeyword?: string }) => {
	const { values, handleChange, handleSearchSubmit } = useSearchForm({
		initialValue: { searchInput: '', searchHeaderInput: '' },
		searchKeyword,
	});

	return (
		<S.FormWrapper name="searchHeaderInput" onSubmit={handleSearchSubmit}>
			<S.SearchWrapper>
				<S.ImageButtonWrapper>
					<Image src="/img/searchIcon.png" alt={'search'} width={20} height={20} style={{ cursor: 'pointer' }} />
				</S.ImageButtonWrapper>
				<S.SearchHeaderInput
					name="searchHeaderInput"
					placeholder="검색..."
					value={values.searchHeaderInput}
					onChange={handleChange}
					autoComplete="off"
				/>
			</S.SearchWrapper>
		</S.FormWrapper>
	);
};

export default SearchHeaderForm;
