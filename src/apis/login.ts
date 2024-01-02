import { postCodeBody } from '@/types/request';
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

			localStorage.setItem('access', accessToken);
			localStorage.setItem('refresh', refreshToken);
		}
		return response.data;
	} catch (error) {
		console.error('에러 발생', error);
		throw error;
	}
};

// 토큰 재발급
// export const getNewRefreshToken = async () => {
// 	const accessToken = localStorage.getItem("access");
// 	const refreshToken = localStorage.getItem("refresh");
// 	const result = await axios.post(
// 	  "http://front.cau-likelion.org/refresh",
// 	  {
// 		// 요청 body
// 		refreshToken,
// 	  },
// 	  {
// 		// headers.Authorization 필수
// 		headers: {
// 		  Authorization: accessToken,
// 		},
// 	  }
// 	);
// 	console.log(result)
// 	return result.data;
//   };

// 회원가입
export const signUp = async (emailInput: string, nameInput: string) => {
	// 구글 로그인 후 context에 이메일 저장하고 있음
	try {
		const response = await axios.post(`${baseURL}users/signup/`, { email: emailInput, name: nameInput });
		if (response.data.status === '201') {
			const accessToken = response.data.data.token.access_token;
			const refreshToken = response.data.data.token.refresh_token;

			localStorage.setItem('access', accessToken);
			localStorage.setItem('refresh', refreshToken);
		}
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 랜덤 닉네임 부여
export const getRandomNickname = async () => {
	try {
		const response = await axios.get(`${baseURL}users/rand-name/`);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
};

// 닉네임 중복여부 확인
export const checkNickName = async (name: string) => {
	var resultString = name.replace(/\s+/g, '+');
	try {
		const response = await axios.get(`${baseURL}users/check-name/?name=${resultString}`);
		return response.data;
	} catch (error) {
		// 사용할 수 없는 닉네임
		console.log(error);
		return false;
	}
};
