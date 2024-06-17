import styled from 'styled-components';

export const BoxWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 40vw;
	background-color: white;
	margin-left: 2%;
	gap: 10px;
	box-shadow: 2px 2px 2px black;
	z-index: 1;
`;

export const ItemWrapper = styled.div`
	padding: 15px;
	font-size: 1.4rem;
	cursor: pointer;
	&:hover {
		background-color: lightgrey;
	}
`;

export const NoResultWrapper = styled.span`
	padding: 15px;
	font-size: 1.4rem;
	box-shadow: 2px 2px 2px black;
`;
