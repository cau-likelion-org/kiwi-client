import styled from 'styled-components';

export const FormWrapper = styled.form``;

export const SearchBarInput = styled.input`
	background: url('/img/search_bar.png');
	background-repeat: no-repeat;
	background-size: contain;
	border: none;
	font-size: 2rem;
	font-family: Pretendard;
	padding: 10px;
	padding-left: 30px;
	width: 55rem;
	height: 2.5rem;

	&:focus {
		outline: none;
	}
`;

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

export const NoResultWrapper = styled.span`
	padding: 15px;
	font-size: 1.4rem;
	box-shadow: 2px 2px 2px black;
`;
