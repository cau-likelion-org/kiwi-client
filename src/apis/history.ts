import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// 특정 문서의 전체 편집 목록 불러오기
export const getDocHistories = async (title: string) => {
	try {
		const response = await axios.get(`${baseURL}history/${title}/`);
		return response.data;
	} catch (error) {
		console.error(error);
	}
};
