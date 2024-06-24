import { useEffect, useRef } from 'react';

interface UseFocusSearchInputProps {
	isFocused: boolean;
	searchInput: string;
	handleBlur: () => void;
}

const useFocusSearchInput = ({ isFocused, searchInput, handleBlur }: UseFocusSearchInputProps) => {
	const inputRef = useRef<HTMLInputElement | null>(null);
	const autoCompleteRef = useRef<HTMLDivElement | null>(null);
	const isSearching = isFocused && searchInput.length > 0;

	useEffect(() => {
		const handleOutsideClose = (e: MouseEvent) => {
			const isOutsideArea =
				isFocused &&
				!autoCompleteRef.current?.contains(e.target as Node) &&
				!inputRef.current?.contains(e.target as Node);

			if (isOutsideArea) {
				handleBlur();
			}
		};
		document.addEventListener('click', handleOutsideClose);

		return () => document.removeEventListener('click', handleOutsideClose);
	}, [isFocused, handleBlur]);

	return { inputRef, autoCompleteRef, isSearching };
};

export default useFocusSearchInput;
