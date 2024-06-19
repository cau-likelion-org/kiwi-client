import { Suspense } from 'react';
import * as S from './SearchPageForm.styled';
import useDebounceValue from '@/hooks/useDebounce';
import AutoCompleteContainer from '../autoCompleteContainer/AutoCompleteContainer';
import AutoCompleteLoading from '../autoCompleteContainer/AutoCompleteLoading';
import useFocusSearchInput from '@/hooks/useFocusSearchInput';
import useInput from '@/hooks/useInput';

const SearchPageForm = ({ searchKeyword }: { searchKeyword?: string }) => {
	const {
		value: searchInput,
		isFocused,
		handleChange,
		handleFocus,
		handleBlur,
		handleKeydown,
	} = useInput(searchKeyword || '');

	const debounceSearchInput = useDebounceValue(searchInput, 300);

	const { inputRef, autoCompleteRef, isSearching } = useFocusSearchInput({
		isFocused,
		searchInput,
		handleBlur,
	});

	return (
		<S.SearchInputWrapper>
			<S.SearchBarInput
				ref={inputRef}
				value={searchInput}
				placeholder="검색어를 입력하세요..."
				onChange={handleChange}
				onFocus={handleFocus}
				onKeyDown={handleKeydown}
				autoComplete="off"
			/>
			<Suspense fallback={<AutoCompleteLoading />}>
				{isSearching && <AutoCompleteContainer searchInput={debounceSearchInput} autoCompleteRef={autoCompleteRef} />}
			</Suspense>
		</S.SearchInputWrapper>
	);
};

export default SearchPageForm;
