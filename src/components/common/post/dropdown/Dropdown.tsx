import { IOption } from '@/types/request';
import React, { FC, useState } from 'react';
import Select, { components } from 'react-select';
import * as S from './Dropdown.styled';

const customStyles = {
	menu: (provided: any, state: any) => ({
		...provided,
		fontFamily: 'NeoDunggeunmo Pro',
	}),
	option: (provided: any, state: any) => ({
		...provided,
		width: '100%',
		color: state.isSelected ? 'white' : 'black',
		backgroundColor: state.isSelected ? 'blue' : 'white',
		fontFamily: 'NeoDunggeunmo Pro',
		fontSize: '1.5rem',
		textAlign: 'left',
	}),
	control: (provided: any, state: any) => ({
		...provided,
		width: '300px',
		margin: '2rem',
		fontFamily: 'NeoDunggeunmo Pro',
		backgroundColor: state.isSelected ? 'blue' : 'white',
	}),
	singleValue: (provided: any, state: any) => ({
		...provided,
		width: '100%',
		fontFamily: 'NeoDunggeunmo Pro',
		color: state.isSelected ? 'white' : 'blue',
	}),
	valueContainer: (provided: any) => ({
		...provided,
		textAlign: 'left',
		fontFamily: 'NeoDunggeunmo Pro',
		padding: '1rem',
	}),
	indicatorSeparator: () => ({}),
	multiValue: (styles: any, { data }: any) => {
		return {
			...styles,
			width: '30%',
			backgroundColor: 'white',
			fontFamily: 'NeoDunggeunmo Pro',
		};
	},
	multiValueLabel: (styles: any, { data }: any) => ({
		...styles,
		color: '#4c4df5',
		fontSize: '1.5rem',
	}),
	multiValueRemove: (styles: any, { data, isFocused }: any) => ({
		...styles,
		color: isFocused ? 'green' : styles.color,
		':hover': {
			backgroundColor: '#4c4df5',
			color: 'white',
		},
	}),
};

const DropdownIndicator = (props: any) => {
	return (
		components.DropdownIndicator && (
			<components.DropdownIndicator {...props}>
				<S.BouncingArrow>▼</S.BouncingArrow>
			</components.DropdownIndicator>
		)
	);
};

interface PropsType {
	options: IOption[];
	generation: readonly IOption[] | null;
	setGeneration: React.Dispatch<React.SetStateAction<readonly IOption[] | null>>;
}

const Dropdown: React.FC<PropsType> = ({ options, generation, setGeneration }) => {
	const handleChange = (option: readonly IOption[] | null) => {
		if (option) {
			setGeneration(Array.from(option));
		}
	};

	return (
		<S.Wrapper>
			<Select
				isMulti
				isClearable={false}
				value={generation}
				onChange={handleChange}
				options={options}
				styles={customStyles}
				components={{ DropdownIndicator }}
				placeholder={'기수를 선택해주세요!'}
				noOptionsMessage={() => '모든 옵션이 선택되었습니다.'}
				isSearchable={false}
			/>
		</S.Wrapper>
	);
};

export default Dropdown;
