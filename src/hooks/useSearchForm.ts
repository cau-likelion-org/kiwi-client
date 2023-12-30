import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

interface useFormProps {
	initialValue: {
		searchInput: string;
		searchHeaderInput: string;
	};
	searchKeyword?: string;
}

const useSearchForm = ({ initialValue, searchKeyword }: useFormProps) => {
	const router = useRouter();
	const [values, setValues] = useState(initialValue);
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
