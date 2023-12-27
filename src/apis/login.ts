import axios from 'axios';

const baseURL = ``;

// 회원가입
export const signUp = async (emailInput: string, nameInput: string) => {
    // 구글 로그인 후 리다이
	try {
		const response = await axios.post(`${baseURL}users/signup/`, { email: emailInput, name: nameInput });
		return response;
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
		const response = await axios.get(`${baseURL}users/check-name/?name=${resultString}/`);
		return response;
	} catch (error) {
		// 사용할 수 없는 닉네임
		console.log(error);
		return false;
	}
};
