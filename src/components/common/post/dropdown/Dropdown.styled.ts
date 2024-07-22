import styled from 'styled-components';

export const Wrapper = styled.div`
	font-size: 1.5rem;
	font-family: Pretendard;
`;

export const BouncingArrow = styled.div`
	padding: 2px;
	font-size: 1.8rem;
	color: blue;
	animation: bounce 2s infinite;
	@keyframes bounce {
		0%,
		20%,
		50%,
		80%,
		100% {
			transform: translateY(0);
		}
		40% {
			transform: translateY(10px);
		}
		60% {
			transform: translateY(5px);
		}
	}
`;
