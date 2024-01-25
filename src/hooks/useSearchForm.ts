import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import useDebounceValue from './useDebounce';

type SearchInputType = 'searchInput' | 'searchHeaderInput';
interface useFormProps {
	initialValue: {
		[k in SearchInputType]: string;
	};
	searchKeyword?: string;
}

const useSearchForm = ({ initialValue, searchKeyword }: useFormProps) => {
	const router = useRouter();
	const [values, setValues] = useState(initialValue);
	// const searchHeadValue = useDebounceValue<string>(initialValue.searchHeaderInput, 500);
	// const searchValue = useDebounceValue<string>(initialValue.searchInput, 500);

	const [isFocused, setIsFocused] = useState(false);

	const handleFocus = () => {
		setIsFocused(true);
	};

	const handleBlur = () => {
		setIsFocused(false);
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		setIsFocused(false);
		const { name } = e.target;

		if (name === 'searchInput' || name === 'searchHeaderInput') {
			if (values[name].length === 0) {
				alert('검색어를 입력해주세요');
				return;
			}
			setValues({ ...values, searchInput: values[name], searchHeaderInput: '' });
			router.push(`search/?search=${values[name]}`);
		}
	};

	useEffect(() => {
		if (searchKeyword) setValues({ searchInput: searchKeyword, searchHeaderInput: '' });
	}, [searchKeyword]);

	return { values, isFocused, handleChange, handleSearchSubmit, handleFocus, handleBlur };
};

export default useSearchForm;
