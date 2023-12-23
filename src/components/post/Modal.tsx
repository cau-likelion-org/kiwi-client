'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { styled } from 'styled-components';
import Dropdown from './Dropdown';

interface IOption {
	value: string;
	label: string;
}

type ModalProps = {
	md: string;
	title: string;
	closeModal: () => void;
	generation: readonly IOption[] | null;
	setGeneration: React.Dispatch<React.SetStateAction<readonly IOption[] | null>>;
};

const Modal = ({ closeModal, generation, setGeneration, md, title }: ModalProps) => {
	const handleSubmit = () => {
		if (generation && generation.length > 0) {
			generation.map((item, index) => {
				console.log(item.value);
			});
			console.log(title);
			console.log(md);
			closeModal();
		} else {
			alert('🦁카테고리 선택은 필수🦁');
		}
	};
	return (
		<Wrapper>
			<ModalSection>
				<X onClick={closeModal}>
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
				</X>
				<Title>해당 문서의 카테고리를 선택하세요!</Title>
				<Dropdown generation={generation} setGeneration={setGeneration} />
				<Btn onClick={handleSubmit}>확인</Btn>
				<Lions>
					<StyledImage2 src="/img/lion.png" alt="파랑 사자" fill priority />
				</Lions>
			</ModalSection>
		</Wrapper>
	);
};

export default Modal;

const Wrapper = styled.div`
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background-color: rgba(0, 0, 0, 0.6);
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	z-index: 3;
`;

const Btn = styled.div`
	border-radius: 1.25rem;
	background: #4c4df5;
	display: flex;
	padding: 1rem 2rem;
	justify-content: center;
	align-items: center;
	color: #fff;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-size: 1.5rem;
	font-style: normal;
	font-weight: 500;
	line-height: normal;
	cursor: pointer;
`;

const Title = styled.div`
	font-size: 1.8rem;
	font-weight: bold;
	color: var(--dark-gray, #585858);
`;

const ModalSection = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	width: 40rem;
	height: 30rem;
	border-radius: 2.5rem;
	background: #fff;
	box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
	padding: 40px 20px;
	margin-top: 3rem;
	position: absolute;
	color: #000;
	text-align: center;
	font-family: 'NeoDunggeunmo Pro';
	font-weight: 500;
`;

const X = styled.div`
	position: absolute !important;
	align-items: center;
	stroke-width: 0.5px;
	stroke: #000;
	width: 0.5rem;
	height: 1.03125rem;
	top: 1.5rem;
	right: 4rem;
`;

const Lions = styled.div`
	display: flex;
	width: 5rem;
	position: absolute;
	bottom: 1.5rem;
	left: 1.5rem;
`;

const StyledImage2 = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
