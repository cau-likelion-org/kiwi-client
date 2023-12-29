import axios from 'axios';
import { Server } from './settings';
import { CreateDocs, ISearchDocs } from './types';

const baseURL = 'http://llwiki.p-e.kr:8000';

export const getSearchResult = async (keyword: string): Promise<ISearchDocs> => {
	const result = await Server.get(`/docs/?search=${keyword}`);
	return result.data;
};

export const newDocs = async (body: CreateDocs) => {
	// const token = localStorage.getItem('access');
	const token =
		'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA0NDcwMTIzLCJpYXQiOjE3MDM4NjUzMjMsImp0aSI6ImNkYmVhYzBhMDYwYjQ2MmNiMjlhZjAxYmNjOWFmOGRhIiwidXNlcl9pZCI6M30.pektrmv59h84IK1mxVyWASlqkl7F2IOTbRabuOlJUGM';
	const result = await axios.post(`${baseURL}/docs/`, body, {
		headers: {
			Authorization: `Bearer ${token}`,
		},
	});
	return result.data;
};

export const uploadImageToServer = async (image: File) => {
	let formData = new FormData();
	formData.append('image', image);
	const result = await axios.post(`${baseURL}/docs/image`, formData, {
		headers: {
			'Content-Type': 'multipart/form-data',
		},
	});
	return result.data;
};

export const getRecentDocs = async () => {
	const result = await axios.get(`${baseURL}/history/recent/`);
	console.log(result);
	return result.data;
};
