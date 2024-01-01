import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// 역링크 리스트 불러오기
export const getReverseList = async (title: string) => {
	try {
		const response = await axios.get(`${baseURL}docs/backlink/${title}/`);
		if (response.status === 200) {
			return response.data;
		} else {
			console.log('Error occurred while fetching backlinks');
		}
	} catch (error) {
		console.error(error);
	}
};
