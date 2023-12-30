import axios from 'axios';
import { Server } from './settings';
import { CreateDocs, ISearchDocs } from './types';

const baseURL = 'http://llwiki.p-e.kr:8000';

export const getSearchResult = async (keyword: string): Promise<ISearchDocs> => {
	const result = await Server.get(`/docs/?search=${keyword}`);
	return result.data;
};

export const newDocs = async (body: CreateDocs) => {
	const token = localStorage.getItem('access');
	const result = await axios.post(`${baseURL}/docs/`, body, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return result.data;
};

// export const uploadImageToServer = async (blobUrl: string) => {
// 	let formData = new FormData();
// 	formData.append('image', blobUrl);
// 	const config = {
// 		headers: {
// 			'Content-Type': 'multipart/form-data',
// 		},
// 	};
// 	const result = await axios.post(`${baseURL}/docs/image/`, formData, config);
// 	return result;
// };

export const uploadImageToServer = async (blobUrl: string) => {
	// blob URL로부터 Blob 객체 가져오기
	const response = await fetch(blobUrl);
	const blob = await response.blob();

	// Blob 객체를 File 객체로 변환
	const file = new File([blob], 'image.png', { type: 'image/png' });

	// 이미지 파일을 서버에 전송
	let formData = new FormData();
	formData.append('image', blob);
	const config = {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	};
	const result = await axios.post(`${baseURL}/docs/image/`, formData, config);
	return result;
};

export const getRecentDocs = async () => {
	const result = await axios.get(`${baseURL}/history/recent/`);
	console.log(result.data.data);
	return result.data.data;
};
