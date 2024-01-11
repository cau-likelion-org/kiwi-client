'use client';
import { postCode } from '@/apis/login';
import {token, userEmailAtom, userNameAtom } from '@/app/recoilContextProvider';
import { postCodeBody } from '@/types/request';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useSetRecoilState } from 'recoil';
import Loading from '../common/Loading';
import LocalStorage from '@/utils/localStorage';

const GoogleLogin = () => {
	const route = useRouter();
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setUserName = useSetRecoilState(userNameAtom);
	const setToken = useSetRecoilState(token)

	let code: string | null = null;

	if (typeof window !== 'undefined') {
		code = new URL(window.location.href).searchParams.get('code');
	}

	const body: postCodeBody = {
		code: code,
	};

	useEffect(() => {
		const login = async () => {
		  try {
			if (code !== null) {
			  const result = await postCode(body);
			  
			  // 로그인 성공
			  if (result.status === '200') {
				setUserEmail(result.data.email);
				setUserName(result.data.name);
				setToken({ access: LocalStorage.getItem('access'), refresh: LocalStorage.getItem('refresh') });
				setTimeout(() => {
				  route.push('/');
				}, 1000);
			  } else if (result.status === '202') {
				// 회원가입 필요
				setUserEmail(result.data.email);
				setTimeout(() => {
				  route.push('/signup');
				}, 1000);
			  }
			}
		  } catch (error) {
			// console.error('An error occurred during login:', error);
			alert('likelion.org 계정으로만 로그인이 가능합니다. 다시 시도해주세요.');
				setTimeout(() => {
				  route.push('/login');
				}, 1000);
		  }
		};
	  
		login();
	  }, []);
	  

	return <Loading />;
};

export default GoogleLogin;