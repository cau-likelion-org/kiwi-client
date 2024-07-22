import styled from 'styled-components';

export const Wrapper = styled.div`
	width: 98%;
	.md-editor {
		white-space: pre-line;
	}
`;

export const BtnWrapper = styled.div`
	width: 98%;
	display: flex;
	align-items: flex-end;
	justify-content: end;
	margin-top: 1rem;
	padding: 1rem;
	gap: 1rem;
`;

export const Btn = styled.div`
	border-radius: 1.25rem;
	background: #4c4df5;
	display: flex;
	padding: 1rem 2rem;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-family: Pretendard;
	font-size: 1.3rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

export const Input = styled.input`
	width: 98%;
	font-family: Pretendard;
	margin-left: 1rem;
	font-size: 2.5rem;
	border: none;
	border-bottom: 2px solid #d9d9d9;
	margin-bottom: 1.5rem;
	&:focus {
		outline: none;
	}
`;
