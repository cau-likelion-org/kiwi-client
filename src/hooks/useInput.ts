import { useRouter } from 'next/navigation';
import { ChangeEvent, useCallback, useEffect, useState } from 'react';

const useInput = (initialValue: string) => {
	const router = useRouter();
	const [value, setValue] = useState(initialValue);
	const [isFocused, setIsFocused] = useState(false);

	const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
		setValue(e.target.value);
	};

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = useCallback(() => {
		setIsFocused(false);
	}, []);

	const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
		if (e.code === 'Enter') {
			handleBlur();
			router.push(`search/?search=${value}`);
		}
	};

	// SearchInput과 HeaderSearchInput 동기화
	useEffect(() => {
		setValue(initialValue);
	}, [initialValue]);

	return { value, isFocused, handleChange, handleFocus, handleBlur, handleKeydown };
};

export default useInput;
