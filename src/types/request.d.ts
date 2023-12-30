// type 정의

export type Generation = '9기' | '10기' | '11기' | '12기';

export interface IOption {
	value: Generation;
	label: Generation;
}

export interface postCodeBody {
	code: string | null;
}

export interface ISearchResult {
	id: number;
	title: string;
	updated_at: string;
	created_at: string;
	author: string;
	generations: IGenerations[];
	content: string;
	titleMatched: boolean;
}

export interface IGenerations {
	[key: string]: Generation;
}
