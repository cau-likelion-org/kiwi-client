import { Suspense, useEffect } from 'react';
import useDebounceValue from '@/hooks/useDebounce';
import useSearchForm from '@/hooks/useSearchForm';
import AutoCompleteContainer from '../autoCompleteContainer/AutoCompleteContainer';
import * as S from './SearchPageForm.styled';

const SearchPageForm = ({ searchKeyword }: { searchKeyword?: string }) => {
	const { values, isFocused, handleFocus, handleBlur, handleChange, handleSearchSubmit } = useSearchForm({
		initialValue: { searchInput: searchKeyword || '', searchHeaderInput: searchKeyword || '' },
	});
	const debounceSearchInput = useDebounceValue(values.searchInput, 300);

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
		<S.FormWrapper name="searchInput" onSubmit={handleSearchSubmit}>
			<S.SearchBarInput
				id="complete"
				name="searchInput"
				placeholder="검색어를 입력하세요..."
				value={values.searchInput}
				onChange={handleChange}
				onFocus={handleFocus}
				autoComplete="off"
			/>
			<S.BoxWrapper>
				<Suspense fallback={<S.NoResultWrapper>검색중...</S.NoResultWrapper>}>
					{isFocused && values.searchInput.length > 0 && <AutoCompleteContainer searchInput={debounceSearchInput} />}
				</Suspense>
			</S.BoxWrapper>
		</S.FormWrapper>
	);
};

export default SearchPageForm;
