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
