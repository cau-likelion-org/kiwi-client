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

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const { name, value } = e.target;
		setValues({ ...values, [name]: value });
	};

	const handleSearchSubmit = (e: React.ChangeEvent<HTMLFormElement>) => {
		e.preventDefault();
		const { name } = e.target;
		if (name === 'searchInput' || name === 'searchHeaderInput') {
			setValues({ ...values, searchInput: values[name], searchHeaderInput: '' });
			router.push(`search/?search=${values[name]}`);
		}
	};

	useEffect(() => {
		if (searchKeyword) setValues({ searchInput: searchKeyword, searchHeaderInput: '' });
	}, [searchKeyword]);

	return { values, handleChange, handleSearchSubmit };
};

export default useSearchForm;
