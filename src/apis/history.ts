import axios from 'axios';

const baseURL = `http://llwiki.p-e.kr:8000/`;

// 특정 문서의 전체 편집 목록 불러오기
export const getDocHistories = async (title : string) => {
    console.log(title);
	try {
		const response = await axios.get(`${baseURL}history/${title}/`);
		// const response = await axios.get(`${baseURL}history/강호동/`);
		return response.data;
	} catch (error) {
		console.log(error);
		return false;
	}
};