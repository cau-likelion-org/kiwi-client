import axios from 'axios';

export const Server = axios.create({
	baseURL: process.env.NEXT_PUBLIC_SERVER_URL,
	timeout: 3000,
	headers: { 'Content-Type': 'application/json' },
});

Server.interceptors.request.use(
	(config) => {
		return config;
	},
	(error) => {
		return Promise.reject(error);
	},
);

Server.interceptors.response.use(
	(response) => {
		return response;
	},
	(error) => {
		return Promise.reject(error);
	},
);
