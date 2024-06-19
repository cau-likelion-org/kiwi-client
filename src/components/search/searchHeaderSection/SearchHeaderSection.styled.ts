import Image from 'next/image';
import styled from 'styled-components';

export const SearchHeaderWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	padding: 50px;
`;

export const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
`;

export const HeartImageWrapper = styled.div`
	position: relative;
	width: 25rem;
`;
