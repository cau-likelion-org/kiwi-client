// type 정의

export type Generation = '9기' | '10기' | '11기' | '12기' | '13기';

export interface IOption {
	value: Generation;
	label: Generation;
}

export interface postCodeBody {
	code: string | null;
}

export interface IGenerations {
	[key: string]: Generation;
}

///문서 작성
export interface Generations {
	generation: string;
}

export interface Depth {
	generations: Generations[];
}

export interface DataType extends Depth {
	author: string;
	content: string;
	created_at: string;
	id: number;
	title: string;
	titleMatched: boolean;
	updated_at: string;
}

export interface CreateDocs extends Depth {
	title: string;
	content: string;
}

export interface RecentDocs extends Depth {
	title: string;
	updated_at: string;
}

export interface IHistoryData {
	title: string;
	author: string;
	created_at: string;
	content: string;
	change: string;
}
