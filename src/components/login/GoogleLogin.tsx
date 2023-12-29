'use client';

import { postCode } from '@/apis/login';
import { isLoginAtom } from '@/app/recoilContextProvider';
import { postCodeBody } from '@/types/request';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'
import { useSetRecoilState } from 'recoil';
import styled from 'styled-components';

const GoogleLogin = () => {
    const route = useRouter();
	const setIsLogin = useSetRecoilState(isLoginAtom);

	let code = null;

	if (typeof window !== 'undefined') {
		code = new URL(window.location.href).searchParams.get('code');
	}

	const body: postCodeBody = {
		code: code,
	};

	useEffect(() => {
		const login = async () => {
			try {
			  await postCode(body);
			  route.push('/');
			} catch (error) {
			  console.error('Error in postCode:', error);
			  route.push('/');
			}
		  };
		
		  login();
	}, []);

	return (
		<Container>
			<FontSize>로그인이 완료되었습니다.</FontSize>
		</Container>
	);
}

export default GoogleLogin

const Container = styled.div`
	height: 98vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;
const FontSize = styled.div`
	font-size: 24px;
	font-weight: 700;
`;
