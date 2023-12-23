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
		width: '300px',
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
		padding: '1rem',
	}),
	indicatorSeparator: () => ({}),
	multiValue: (styles: any, { data }: any) => {
		return {
			...styles,
			backgroundColor: 'white',
		};
	},
	multiValueLabel: (styles: any, { data }: any) => ({
		...styles,
		color: 'blue',
	}),
	multiValueRemove: (styles: any, { data, isFocused }: any) => ({
		...styles,
		color: isFocused ? 'green' : styles.color,
		':hover': {
			color: 'blue',
		},
	}),
};

const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<BouncingArrow>▼</BouncingArrow>
			</components.DropdownIndicator>
		)
	);
};

interface PropsType {
	generation: IOption[] | null;
	setGeneration: React.Dispatch<React.SetStateAction<IOption[] | null>>;
	category: IOption | null;
	setCategory: React.Dispatch<React.SetStateAction<IOption | null>>;
}

const Dropdown: React.FC<PropsType> = ({ generation, setGeneration, category, setCategory }) => {
	const handleChange = (option: IOption[] | null) => {
		if (option) {
			setGeneration(Array.from(option));
		}
	};

	const handleChange2 = (option: IOption | null) => {
		if (option) {
			setCategory(option);
		}
	};

	return (
		<Wrapper>
			<Select
				isMulti
				value={generation}
				onChange={handleChange}
				options={options}
				styles={customStyles}
				components={{ DropdownIndicator }}
				placeholder={'기수를 선택해주세요!'}
			/>
		</Wrapper>
	);
};

export default Dropdown;

const Wrapper = styled.div`
	font-size: 2rem;
	font-family: Pretendard;
`;

const BouncingArrow = styled.div`
	padding: 2px;
	font-size: 1.8rem;
	color: blue;
	animation: bounce 2s infinite;
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(10px);
		}
		60% {
			transform: translateY(5px);
		}
	}
`;
