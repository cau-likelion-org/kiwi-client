import { Server } from './settings';
import { ISearchDocs } from './types';

export const getSearchResult = async (keyword: string): Promise<ISearchDocs> => {
	const result = await Server.get(`/docs/?search=${keyword}`);
	return result.data;
};
