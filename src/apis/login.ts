import { postCodeBody } from '@/types/request';
import LocalStorage from '@/utils/localStorage';
import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const postCode = async (body: postCodeBody) => {
	try {
		const response = await axios.post(`${baseURL}users/google/callback/`, body);
		// console.log(response.data);
		// 가입된 사용자
		if (response.data.status === '200') {
			const accessToken = response.data.data.token.access_token;
			const refreshToken = response.data.data.token.refresh_token;

			LocalStorage.setItem('access', accessToken);
			LocalStorage.setItem('refresh', refreshToken);
		}
		return response.data;
	} catch (error) {
		// console.error('에러 발생', error);
		throw error;
	}
};

// 토큰 재발급
export const getNewToken = async () => {
	const refreshToken = localStorage.getItem('refresh');
	try {
		const response = await axios.post(
			`${baseURL}users/token/refresh/`,
			{
				refresh: refreshToken,
			},
			{
				headers: {
					Authorization: `Bearer ${refreshToken}`,
				},
			},
		);

		if (response.status === 200) {
			const newAccessToken = response.data.access;
			return {
				accessToken: newAccessToken,
			};
		} else {
			throw new Error('토큰 갱신 실패');
		}
	} catch (error) {
		throw new Error('토큰 갱신 요청 실패');
	}
};
