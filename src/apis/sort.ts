import axios from 'axios';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

// 문서 내용 불러오기
export const getSortContent = async (title: string) => {
	try {
		let encodedTitle = encodeURIComponent(title);
        console.log(encodedTitle);
		const response = await axios.get(`${baseURL}docs/${encodedTitle}/`);
		if (response.status === 200) {
			return response.data;
		} else {
			console.log('Error occurred while fetching sort content');
		}
	} catch (error) {
		console.error(error);
	}
};