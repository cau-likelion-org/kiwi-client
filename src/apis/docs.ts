import { CreateDocs, RecentDocs } from '@/types/request';
import axios, { AxiosResponse } from 'axios';
import { Server } from './settings';
import LocalStorage from '@/utils/localStorage';
import { ISearchResult, ISearchResultList, SearchResult } from '@/types/search';

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL;

export const getSearchResult = async (keyword: string): Promise<ISearchResult | ISearchResultList> => {
	const encodedKeyword = encodeURIComponent(keyword);
	const { data } = await Server.get<SearchResult | SearchResult[]>(`docs/search/${encodedKeyword}/`);
	if (Array.isArray(data)) {
		const searchResultList: ISearchResultList = {
			kind: 'searchResultList',
			data: data.map((result) => ({ ...result })),
		};
		return searchResultList;
	}

	return { kind: 'searchResult', data };
};

export const newDocs = async (body: CreateDocs) => {
	try {
		const token = LocalStorage.getItem('access');
		const result = await axios.post(`${baseURL}docs/`, body, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});
		return result.data;
	} catch (error) {
		alert('로그아웃 후 다시 시도해주세요!');
		throw error;
	}
};

export const uploadImageToServer = async (blobUrl: string): Promise<string> => {
	try {
		// blob URL로부터 Blob 객체 가져오기
		const response = await fetch(blobUrl);
		const blob: Blob = await response.blob();

		// Blob 객체를 File 객체로 변환
		const file: File = new File([blob], 'image.png', { type: 'image/png' });

		// 이미지 파일을 서버에 전송
		let formData = new FormData();
		formData.append('image', file);
		const config = {
			headers: {
				'Content-Type': 'multipart/form-data',
			},
		};
		const result: AxiosResponse<{ image: string }> = await axios.post(`${baseURL}docs/image/`, formData, config);
		return result.data.image;
	} catch (error) {
		console.error('이미지 업로드 불가', error);
		throw error;
	}
};

export const getRecentDocs = async (): Promise<RecentDocs[]> => {
	try {
		const result = await Server.get(`${baseURL}history/recent/`);
		return result.data.data;
	} catch (error) {
		console.error(`${error}`);
		throw error;
	}
};
