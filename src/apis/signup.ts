import axios from 'axios';
import LocalStorage from '@/utils/localStorage';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// 회원가입
export const signUp = async (emailInput: string, nameInput: string) => {
	// 구글 로그인 후 context에 이메일 저장하고 있음
	try {
		const response = await axios.post(`${baseURL}users/signup/`, { email: emailInput, name: nameInput });
		if (response.data.status === '201') {
			const accessToken = response.data.data.token.access_token;
			const refreshToken = response.data.data.token.refresh_token;

			LocalStorage.setItem('access', accessToken);
			LocalStorage.setItem('refresh', refreshToken);
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
	let resultString = name.replace(/\s+/g, '+');
	try {
		const response = await axios.get(`${baseURL}users/check-name/?name=${resultString}`);
		return response.data;
	} catch (error) {
		// 사용할 수 없는 닉네임
		console.log(error);
		return false;
	}
};
