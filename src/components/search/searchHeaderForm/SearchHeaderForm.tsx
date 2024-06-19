import Image from 'next/image';
import React from 'react';
import * as S from './SearchHeaderForm.styled';
import useInput from '@/hooks/useInput';
import useKeywordParams from '@/hooks/useKeywordParams';

const SearchHeaderForm = () => {
	const { searchKeyword } = useKeywordParams();
	const { value: searchHeaderInput, handleChange, handleKeydown } = useInput(searchKeyword);

	return (
		<S.SearchWrapper>
			<S.ImageButtonWrapper>
				<Image src="/img/searchIcon.png" alt={'search'} width={20} height={20} style={{ cursor: 'pointer' }} />
			</S.ImageButtonWrapper>
			<S.SearchHeaderInput
				placeholder="검색..."
				value={searchHeaderInput}
				onChange={handleChange}
				onKeyDown={handleKeydown}
				autoComplete="off"
			/>
		</S.SearchWrapper>
	);
};

export default SearchHeaderForm;
