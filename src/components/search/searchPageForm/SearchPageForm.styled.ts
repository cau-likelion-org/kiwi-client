import styled from 'styled-components';

export const FormWrapper = styled.form`
	position: relative;
`;

export const SearchBarInput = styled.input`
	width: 32rem;
	height: 2.5rem;
	padding: 10px 10px 10px 30px;
	border: none;

	background: url('/img/search_bar.png');
	background-repeat: no-repeat;
	background-size: contain;

	font-size: 2rem;
	font-family: Pretendard;

	&:focus {
		outline: none;
	}
`;

export const NoResultWrapper = styled.span`
	padding: 15px;
	font-size: 1.4rem;
	box-shadow: 2px 2px 2px black;
`;
