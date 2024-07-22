import styled from 'styled-components';

export const Margin = styled.div`
	width: 100%;
	min-height: 64px;
`;

export const Wrapper = styled.div`
	width: 100%;
	position: fixed;
	display: flex;
	align-items: center;
	justify-content: space-between;
	min-height: 64px;
	background-color: white;
	top: 0;
	z-index: 10;
`;

export const LeftWrapper = styled.div`
	display: flex;
	cursor: pointer;
	justify-content: center;
	align-items: center;
	margin-left: 3%;
	@media screen and (max-width: 540px) {
		margin-left: 3%;
	}
`;

export const RightWrapper = styled.div`
	display: flex;
	width: 60%;
	margin-right: 1%;
	justify-content: space-between;
	align-items: center;
	@media screen and (min-width: 1024px) {
		width: 40%;
	}
`;

export const SearchWrapper = styled.div`
	display: flex;
	position: relative;
	width: 50%;
	@media screen and (max-width: 540px) {
		width: 60%;
		margin-top: 0.5rem;
	}
`;

export const ButtonWrapper = styled.div`
	display: flex;
	width: 40%;
	margin-top: 6px;
	margin-right: 1.5rem;
	justify-content: space-between;
	align-items: center;
	@media screen and (max-width: 540px) {
		width: 35%;
		gap: 0.5rem;
	}
`;
