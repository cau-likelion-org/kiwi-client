import axios from 'axios';
import { getNewToken } from './login';
import LocalStorage from '@/utils/localStorage';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

const parseJwt = (token: string | null) => {
	if (token) return JSON.parse(atob(token.split('.')[1]));
};
// 토큰 유효성 검사
export const AuthVerify = () => {
	const access = LocalStorage.getItem('access');
	const refresh = LocalStorage.getItem('refresh');

	if (!access || !refresh) {
		return '필요 토큰 미존재';
	}

	const decodedAccess = parseJwt(access);
	const decodedRefresh = parseJwt(refresh);

	if (decodedAccess && decodedAccess.exp * 1000 < Date.now()) {
		return 'Access 토큰 만료';
	}
	if (decodedRefresh && decodedRefresh.exp * 1000 < Date.now()) {
		return 'Refresh 토큰 만료';
	}

	return decodedAccess ? true : false;
};

// 주어진 토큰을 사용하여 API 요청에 인증된 Axios 인스턴스를 초기화
export const getAuthAxios = (token: string) => {
	// Axios 인스턴스 생성
	const authAxios = axios.create({
		baseURL,
		timeout: 8000,
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});

	// 응답 인터셉터 설정
	authAxios.interceptors.response.use(
		(response) => {
			return response;
		},
		async (error) => {
			const originalRequest = error.config;

			try {
				// 토큰 갱신 시도
				const { accessToken } = await getNewToken();

				if (!accessToken) {
					throw new Error('토큰 갱신 실패');
				}

				// 갱신된 토큰으로 원래 요청 재시도
				originalRequest.headers.Authorization = `Bearer ${accessToken}`;
				LocalStorage.setItem('access', accessToken);

				return authAxios(originalRequest); // 재시도된 요청 반환
			} catch (refreshError) {
				alert('토큰이 만료되었습니다. 재로그인 후 시도해주세요!');
				LocalStorage.removeItem('access');
				LocalStorage.removeItem('refresh');
				window.location.href = '/login'; // 로그인 페이지로 리다이렉트
				return Promise.reject(refreshError); // 에러 전달
			}
		},
	);

	return authAxios;
};
