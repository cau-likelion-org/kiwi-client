'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { google_URL } from './loginInfo';

const Login = () => {
	const handleLogin = () => {
		if (typeof window !== 'undefined') {
			window.location.href = google_URL;
		}
	};
	return (
		<Main>
			<Box>
				<Content>
					<Title>
						<StyledImage src="/img/loginTitle.png" alt="로그인 타이틀" fill priority />
					</Title>
					<BtnWrapper>
						<LoginBtn id='loginbtn' onClick={handleLogin}>
							<Image src="/img/googleLogo.png" alt="구글 로고" width={24} height={24} />
							<div className="text"> 구글로 로그인하기</div>
						</LoginBtn>
						<LoginBtn>
							<div className="info"> LIKE LION 계정으로 로그인이 가능합니다</div>
						</LoginBtn>
					</BtnWrapper>
				</Content>
				<StyledImage src="/img/loginBox.png" alt="로그인 박스" fill priority />
			</Box>
			<div className="mini animate1" id="mini1">
				<Image src="/img/crylion.png" alt="" width={30} height={30} />
			</div>
			<div className="mini animate3" id="mini2">
				<Image src="/img/heart.png" alt="" width={30} height={30} />
			</div>
			<div className="mini animate2" id="mini3">
				<Image src="/img/minilion.png" alt="" width={30} height={30} />
			</div>
			<div className="mini animate2" id="mini4">
				<Image src="/img/heart.png" alt="" width={30} height={30} />
			</div>
			<div className="mini animate1" id="mini5">
				<Image src="/img/minilion.png" alt="" width={30} height={30} />
			</div>
			<div className="mini animate3" id="mini6">
				<Image src="/img/heart.png" alt="" width={30} height={30} />
			</div>
		</Main>
	);
};

export default Login;

const Main = styled.div`
	height: fit-content;
	width: 100%;
	height: 90vh;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	.mini {
		position: absolute;
		z-index: 0;
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
		right: 4%;
	}
	#mini6 {
		bottom: 20%;
		right: 10%;
	}
`;

const LoginBtn = styled.div`
	width: fit-content;
	padding: 0.8rem 1.2rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background-color: #fff;
	font-size: 2rem;
	border-radius: 5px;
	font-family: Pretendard;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	.text {
		color: #000;
		font-size: 1.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-left: 2rem;
		padding: 0rem 3rem;
	}
	.info {
		padding: 0.3rem 0rem;
		color: #797878;
		font-family: Pretendard;
		font-size: 1.3rem;
		font-style: normal;
		font-weight: 500;
		line-height: normal;
	}
`;

const BtnWrapper = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 1rem;
	#loginbtn{
		cursor: pointer;
	}
`;
const Box = styled.div`
	z-index: 1;
	width: 50%;
	min-height: 80vh;
	min-width: 400px;
	height: fit-content;
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	height: max-content;
	@media (max-width: 1000px) {
		width: 70%;
	}
	@media (max-width: 640px) {
		width: 90%;
	}
`;

const Content = styled.div`
	z-index: 2;
	position: absolute;
	height: 70%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 3rem;
	margin-bottom: -10%;
	@media (max-width: 1000px) {
		width: 80%;
	}
	@media (max-width: 640px) {
		width: 90%;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: contain;
`;

const Title = styled.div`
	width: 30%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
