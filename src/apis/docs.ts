import { CreateDocs, ISearchResult } from '@/types/request';
import axios from 'axios';
import { Server } from './settings';
import { error } from 'console';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getSearchResult = async (keyword: string) => {
	const result = await Server.get<ISearchResult[] | ISearchResult>(`docs/search/${keyword}/`);
	return result.data;
};

export const newDocs = async (body: CreateDocs) => {
	try {
		const token = localStorage.getItem('access');
		const result = await axios.post(`${baseURL}docs/`, body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return result.data;
	} catch (error) {
		console.error('문서 생성 불가', error);
		throw error;
	}
};

export const uploadImageToServer = async (blobUrl: string) => {
	try {
		// blob URL로부터 Blob 객체 가져오기
		const response = await fetch(blobUrl);
		const blob = await response.blob();

		// Blob 객체를 File 객체로 변환
		const file = new File([blob], 'image.png', { type: 'image/png' });

		// 이미지 파일을 서버에 전송
		let formData = new FormData();
		formData.append('image', file);
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
		const result = await axios.post(`${baseURL}docs/image/`, formData, config);
		return result.data.image;
	} catch (error) {
		console.error('이미지 업로드 불가', error);
		throw error;
	}
};

export const getRecentDocs = async () => {
	try {
		const result = await axios.get(`${baseURL}history/recent/`);
		return result.data.data;
	} catch {
		console.error(error);
	}
};
