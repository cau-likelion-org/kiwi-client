export interface ISearchDocs {
	status: number;
	message: string;
	title_match: boolean;
	data: [
		{
			id: string;
			title: string;
			updated_at: string;
			created_at: string;
			author: string;
			generation: string[];
			contents: string;
		},
	];
}

export interface Generation {
	generation: string;
}

export interface Depth {
	generations: Generation[];
}

export interface CreateDocs extends Depth {
	title: string;
	author: string;
	content: string;
}
