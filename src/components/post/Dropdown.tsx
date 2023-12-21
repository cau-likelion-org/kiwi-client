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
	indicatorSeparator: () => ({}),
};

const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<BouncingArrow style={{ padding: '2px', color: 'blue' }}>▼</BouncingArrow>
			</components.DropdownIndicator>
		)
	);
};

interface PropsType {
	class1: IOption | null;
	class2: IOption | null;
	setClass1: React.Dispatch<React.SetStateAction<IOption | null>>;
	setClass2: React.Dispatch<React.SetStateAction<IOption | null>>;
}

const Dropdown: React.FC<PropsType> = ({ class1, setClass1, class2, setClass2 }) => {
	const handleChange = (option: IOption | null) => {
		if (option) {
			setClass1(option);
		}
	};

	const handleChange2 = (option: IOption | null) => {
		if (option) {
			setClass2(option);
		}
	};

	return (
		<Wrapper>
			<Select
				value={class1}
				onChange={handleChange}
				options={options}
				styles={customStyles}
				components={{ DropdownIndicator }}
				placeholder={'카테고리1'}
			/>
			<Select
				value={class2}
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

const BouncingArrow = styled.div`
	padding: 2px;
	color: blue;
	animation: bounce 1s infinite;
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(-10px);
		}
		60% {
			transform: translateY(-5px);
		}
	}
`;
