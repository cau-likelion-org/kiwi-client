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
