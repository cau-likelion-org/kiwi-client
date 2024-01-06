'use client';
import { postCode } from '@/apis/login';
import { token, userEmailAtom, userNameAtom } from '@/app/recoilContextProvider';
import { postCodeBody } from '@/types/request';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import Loading from '../common/Loading';

const GoogleLogin = () => {
	const route = useRouter();
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setUserName = useSetRecoilState(userNameAtom);
	const { access: tokenState } = useRecoilValue(token);

	let code: string | null = null;

	if (typeof window !== 'undefined') {
		code = new URL(window.location.href).searchParams.get('code');
	}

	const body: postCodeBody = {
		code: code,
	};

	useEffect(() => {
		const login = async () => {
			if (code !== null) {
				const result = await postCode(body);
				// 로그인 성공
				if (result.status === '200') {
					setUserEmail(result.data.email);
					setUserName(result.data.name);
					if (tokenState) {
						setTimeout(() => {
							route.push('/');
						}, 1000);
					}
				} else if (result.status === '202') {
					// 회원가입 필요
					setUserEmail(result.data.email);
					setTimeout(() => {
						route.push('/signup');
					}, 1000);
				} else {
					// 로그인 과정 중에 문제 발생
					alert('로그인 과정에서 문제가 발생했습니다. 다시 시도해주세요.');
					setTimeout(() => {
						route.push('/');
					}, 1000);
				}
			}
		};
		login();
	}, []);

	return <Loading />;
};

export default GoogleLogin;
