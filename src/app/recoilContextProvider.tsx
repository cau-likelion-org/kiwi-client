'use client';

import { RecoilRoot, atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';
import { v1 } from 'uuid';
import LocalStorage from '@utils/localStorage';

const { persistAtom } = recoilPersist();

export interface IToken {
	access: string | null;
	refresh: string | null;
}

export const token = atom<IToken>({
	key: `token/${v1()}`,
	default: {
		access: LocalStorage.getItem('access'),
		refresh: LocalStorage.getItem('refresh'),
	},
});

export const userEmailAtom = atom({
	key: 'userEmail',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export const userNameAtom = atom({
	key: 'userName',
	default: '',
	effects_UNSTABLE: [persistAtom],
});

export default function RecoidContextProvider({ children }: { children: React.ReactNode }) {
	return <RecoilRoot>{children}</RecoilRoot>;
}
