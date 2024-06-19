import { Suspense, useEffect, useRef } from 'react';
import useDebounceValue from '@/hooks/useDebounce';
import useSearchForm from '@/hooks/useSearchForm';
import AutoCompleteContainer from '../autoCompleteContainer/AutoCompleteContainer';
import * as S from './SearchPageForm.styled';
import AutoCompleteLoading from '../autoCompleteContainer/AutoCompleteLoading';

const SearchPageForm = ({ searchKeyword }: { searchKeyword?: string }) => {
	const { values, isFocused, handleFocus, handleBlur, handleChange, handleSearchSubmit } = useSearchForm({
		initialValue: { searchInput: searchKeyword || '', searchHeaderInput: searchKeyword || '' },
	});
	const debounceSearchInput = useDebounceValue(values.searchInput, 300);

	const inputRef = useRef<HTMLInputElement | null>(null);
	const autoCompleteRef = useRef<HTMLDivElement | null>(null);

	const isSearching = isFocused && values.searchInput.length > 0;

	useEffect(() => {
		const handleOutsideClose = (e: MouseEvent) => {
			const isOutsideDropdown =
				isFocused &&
				!autoCompleteRef.current?.contains(e.target as Node) &&
				!inputRef.current?.contains(e.target as Node);

			if (isOutsideDropdown) {
				handleBlur();
			}
		};
		document.addEventListener('click', handleOutsideClose);

		return () => document.removeEventListener('click', handleOutsideClose);
	}, [isFocused]);

	return (
		<S.FormWrapper name="searchInput" onSubmit={handleSearchSubmit}>
			<S.SearchBarInput
				name="searchInput"
				placeholder="검색어를 입력하세요..."
				value={values.searchInput}
				onChange={handleChange}
				onFocus={handleFocus}
				autoComplete="off"
				ref={inputRef}
			/>
			<Suspense fallback={<AutoCompleteLoading />}>
				{isSearching && <AutoCompleteContainer searchInput={debounceSearchInput} autoCompleteRef={autoCompleteRef} />}
			</Suspense>
		</S.FormWrapper>
	);
};

export default SearchPageForm;
