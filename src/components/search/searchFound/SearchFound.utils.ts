import { IGenerations } from '@/types/request';

export const getGenerationFormat = (generations: IGenerations[]) => {
	const genFormat: string[] = [];
	generations.forEach((data) => {
		genFormat.push(data.generation);
	});
	return genFormat.join(', ');
};
