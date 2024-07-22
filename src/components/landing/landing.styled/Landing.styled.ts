import styled from 'styled-components';

export const ScrollContainer = styled.div`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
`;

export const Section1 = styled.section`
	height: fit-content;
	scroll-snap-align: center;
	.mini {
		position: absolute;
		z-index: 1;
		@media (max-width: 1000px) {
			display: none;
		}
		&.animate1 {
			animation: moveUpDown 1s infinite alternate ease-in-out;
		}

		&.animate2 {
			animation: moveUpDown 1s 0.5s infinite alternate ease-in-out;
		}

		&.animate3 {
			animation: moveUpDown 1s 1s infinite alternate ease-in-out;
		}
		@keyframes moveUpDown {
			to {
				transform: translateY(10px);
			}
		}
	}
	#mini1 {
		top: 30%;
		left: 15%;
	}
	#mini2 {
		bottom: 40%;
		left: 7%;
	}
	#mini3 {
		bottom: 10%;
		left: 16%;
	}
	#mini4 {
		top: 30%;
		right: 14%;
	}
	#mini5 {
		top: 55%;
		right: 28%;
	}
	#mini6 {
		bottom: 35%;
		right: 5%;
	}
	#mini7 {
		top: 12%;
		left: 34%;
	}
	#mini8 {
		top: 17%;
		left: 12%;
	}
	#mini9 {
		top: 30%;
		right: 3%;
	}
	#mini10 {
		top: 48%;
		left: 30%;
	}
	#mini11 {
		bottom: 7%;
		right: 11%;
	}
`;

export const Section2 = styled.section`
	height: fit-content;
	scroll-snap-align: center;
`;

export const Section3 = styled.section`
	height: 98vh;
	scroll-snap-align: end;
`;
