'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import Dropdown from '../dropdown/Dropdown';
import { CreateDocs, IOption } from '@/types/request';
import { newDocs } from '@/apis/docs';
import { useRecoilValue } from 'recoil';
import { userNameAtom } from '@/app/recoilContextProvider';
import * as S from './Modal.styled';

const options: IOption[] = [
	{ value: '9기', label: '9기' },
	{ value: '10기', label: '10기' },
	{ value: '11기', label: '11기' },
	{ value: '12기', label: '12기' },
	{ value: '13기', label: '13기' },
];

type ModalProps = {
	md: string;
	title: string;
	closeModal: () => void;
	generation: readonly IOption[] | null;
	setGeneration: React.Dispatch<React.SetStateAction<readonly IOption[] | null>>;
};

const Modal = ({ closeModal, generation, setGeneration, md, title }: ModalProps) => {
	const author = useRecoilValue(userNameAtom);
	const router = useRouter();

	const handleSubmit = async () => {
		if (generation && generation.length > 0) {
			const body: CreateDocs = {
				title: title,
				content: md,
				generations: generation.map((item) => ({ generation: item.value })),
			};
			const result = await newDocs(body);
			let encodedTitle = encodeURIComponent(title);
			router.push(`/viewer?title=${encodedTitle}`);
		} else {
			alert('🦁카테고리 선택은 필수🦁');
		}
	};
	return (
		<S.Wrapper>
			<S.ModalSection>
				<S.X onClick={closeModal}>
					<svg xmlns="http://www.w3.org/2000/svg" width="32" height="33" viewBox="0 0 32 33" fill="none">
						<g clip-path="url(#clip0_929_193)">
							<path
								d="M16 28.875C22.6274 28.875 28 23.3345 28 16.5C28 9.66548 22.6274 4.125 16 4.125C9.37258 4.125 4 9.66548 4 16.5C4 23.3345 9.37258 28.875 16 28.875Z"
								stroke="black"
								stroke-miterlimit="10"
							/>
							<path d="M20 12.375L12 20.625" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
							<path d="M20 20.625L12 12.375" stroke="black" stroke-linecap="round" stroke-linejoin="round" />
						</g>
						<defs>
							<clipPath id="clip0_929_193">
								<rect width="32" height="33" fill="white" />
							</clipPath>
						</defs>
					</svg>
				</S.X>
				<S.Title>해당 문서의 카테고리를 선택하세요!</S.Title>
				<Dropdown options={options} generation={generation} setGeneration={setGeneration} />
				<S.Btn onClick={handleSubmit}>확인</S.Btn>
				<S.Lions>
					<S.StyledImage2 src="/img/lion.png" alt="파랑 사자" fill priority />
				</S.Lions>
			</S.ModalSection>
		</S.Wrapper>
	);
};

export default Modal;
