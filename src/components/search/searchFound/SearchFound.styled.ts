import styled from 'styled-components';
import Image from 'next/image';

export const SearchFoundWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 20px;
`;

export const SearchResultWrapper = styled.div`
	display: flex;
	align-items: end;
	justify-content: center;
	gap: 2rem;
	margin: 30px;
`;

export const LionImageWrapper = styled.div`
	width: 12rem;
	display: flex;
	align-items: center;
`;

export const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
`;

export const SearchResultBox = styled.div`
	width: 65vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	background-color: white;
	border: 3px solid black;
	border-radius: 10px;
	padding: 2.5rem;
	cursor: pointer;

	@media screen and (max-width: 540px) {
		width: 50vw;
	}
`;

export const SearchResultTitle = styled.div`
	font-size: 1.8rem;
	font-weight: bold;
`;

export const SearchResultContent = styled.div`
	height: 6rem;
	overflow: hidden;
	line-height: 2rem;
	margin-top: 10px;
	margin-bottom: 10px;
	font-size: 1.4rem;
`;

export const SearchResultDirectory = styled.div`
	font-size: 1.6rem;
	font-weight: bold;
`;
