'use client';
import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';
import { google_URL } from './loginInfo';

const Login = () => {

  const handleLogin = ()=>{
    if (typeof window !== 'undefined') {
			window.location.href = google_URL;
		}
  }	
return (
		<Main>
			<LoginBtn onClick={handleLogin}>
				<Image src="/img/googleLogo.png" alt="구글 로고" width={24} height={24} />
				구글 로그인
			</LoginBtn>
		</Main>
	);
};

export default Login;

const Main = styled.div`
	margin-top: 64px;
	height: fit-content;
	padding-top: 10rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

const LoginBtn = styled.div`
	padding: 8px 16px;
	display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
	background-color: #fff;
	font-size: 2rem;
	cursor: pointer;
  border-radius: 5px;
	box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
`;
