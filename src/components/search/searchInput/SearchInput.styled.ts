import styled from 'styled-components';

export const SearchInputWrapper = styled.div`
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
