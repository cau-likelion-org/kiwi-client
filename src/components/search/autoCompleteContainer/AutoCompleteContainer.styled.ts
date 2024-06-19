import styled from 'styled-components';

export const OptionWrapper = styled.div`
	padding: 16px;

	font-size: 1.4rem;

	cursor: pointer;
	&:hover {
		background-color: lightgrey;
	}
`;

export const NoResultWrapper = styled.span`
	padding: 16px;

	font-size: 1.4rem;

	box-shadow: 2px 2px 2px black;
`;

export const AutoCompleteWrapper = styled.div`
	position: absolute;
	display: flex;
	flex-direction: column;
	gap: 10px;

	width: 320px;
	margin: 0 0 0 20px;

	background-color: white;

	box-shadow: 2px 2px 2px black;
	z-index: 1;
`;
