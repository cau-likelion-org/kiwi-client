import Image from 'next/image';
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	margin-left: 10%;
`;

export const TextImageWrapper = styled.div`
	position: relative;
	width: 30rem;
`;

export const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
`;
