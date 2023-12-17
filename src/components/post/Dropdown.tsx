import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';
import styled from 'styled-components';

interface IOption {
	value: string;
	label: string;
}

const options: IOption[] = [
	{ value: '9기', label: '9기' },
	{ value: '10기', label: '10기' },
	{ value: '11기', label: '11기' },
];

const options2: IOption[] = [
	{ value: '인물', label: '인물' },
	{ value: '프로젝트', label: '프로젝트' },
	{ value: '행사', label: '행사' },
];

const customStyles = {
	option: (provided: any, state: any) => ({
		...provided,
		width: '100%',
		color: state.isSelected ? 'white' : 'black',
		backgroundColor: state.isSelected ? 'blue' : 'white',
		textAlign: 'left',
	}),
	control: (provided: any, state: any) => ({
		...provided,
		width: '270px',
		margin: '2rem',
		backgroundColor: state.isSelected ? 'blue' : 'white',
	}),
	singleValue: (provided: any, state: any) => ({
		...provided,
		width: '100%',
		color: state.isSelected ? 'white' : 'blue',
	}),
	valueContainer: (provided: any) => ({
		...provided,
		textAlign: 'left',
	}),
};

const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<div style={{ padding: '2px', color: 'blue' }}>▼</div>
			</components.DropdownIndicator>
		)
	);
};

const Dropdown: FC = () => {
	const [selectedOption, setSelectedOption] = useState<IOption | null>(null);
	const [selectedOption2, setSelectedOption2] = useState<IOption | null>(null);

	const handleChange = (option: IOption | null) => {
		setSelectedOption(option);
	};

	const handleChange2 = (option: IOption | null) => {
		setSelectedOption2(option);
	};

	return (
		<Wrapper>
			<Select
				value={selectedOption}
				onChange={handleChange}
				options={options}
				styles={customStyles}
				components={{ DropdownIndicator }}
				placeholder={'카테고리1'}
			/>
			<Select
				value={selectedOption2}
				onChange={handleChange2}
				options={options2}
				styles={customStyles}
				components={{ DropdownIndicator }}
				placeholder={'카테고리2'}
			/>
		</Wrapper>
	);
};

export default Dropdown;

const Wrapper = styled.div`
	font-size: 1.5rem;
	font-family: Pretendard;
`;
