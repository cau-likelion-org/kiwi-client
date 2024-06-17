import Image from 'next/image';
import styled from 'styled-components';

export const SearchNotFoundWrapper = styled.div`
	margin-top: 10px;
`;

export const NotFoundSearchText = styled.div`
	font-size: 1.5rem;
	font-weight: bold;
	color: red;
	margin-left: 12%;
`;

export const BottomImageWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: flex-end;
`;

export const LionImageWrapper = styled.div`
	width: 65vw;
	position: absolute;
	bottom: 0;
`;

export const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
