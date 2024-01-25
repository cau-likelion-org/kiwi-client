import { IGenerations } from './request';

interface SearchResult {
	id: number;
	title: string;
	updated_at: string;
	created_at: string;
	author: string;
	generations: IGenerations[];
	content: string;
	titleMatched: boolean;
}

export interface ISearchResult {
	kind: 'searchResult';
	data: SearchResult;
}

export interface ISearchResultList {
	kind: 'searchResultList';
	data: SearchResult[];
}
