// type 정의

export type Generation = '9기' | '10기' | '11기';

export interface IOption {
	value: Generation;
	label: Generation;
}

export interface postCodeBody {
	code: string | null;
}