import styled from 'styled-components';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import { token, userEmailAtom, userNameAtom } from '@/app/recoilContextProvider';
import { useRouter } from 'next/navigation';
import LocalStorage from '@/utils/localStorage';
import { signUp } from '@/apis/signup';

const ConfirmModal = (props: { setModalIsOpen: React.Dispatch<React.SetStateAction<boolean>>; nickname: string }) => {
	const route = useRouter();
	const totalHeight = document.documentElement.scrollHeight;
	const userEmail = useRecoilValue(userEmailAtom);
	const [userConfirm, setUserConfirm] = useState(false);
	const setUserEmail = useSetRecoilState(userEmailAtom);
	const setUserName = useSetRecoilState(userNameAtom);
	const setToken = useSetRecoilState(token)

	const handleConfirm = async () => {
		setUserConfirm(true);
		try {
			const result = await signUp(userEmail, props.nickname);
			console.log(result);
			setUserEmail(result.data.email);
			setUserName(result.data.name);
			setToken({access: LocalStorage.getItem('access'), refresh: LocalStorage.getItem('refresh')})
		} catch (error) {
			console.log('error');
			alert('회원가입 과정에서 에러가 발생했습니다. 다시 시도해 주세요.');
			setTimeout(() => {
				route.push('/login');
			}, 1000);
			return false;
		}
	};

	const handleStart = () => {
		route.push('/');
	};

	return (
		<ModalSection height={totalHeight}>
			<ModalStyle>
				{userConfirm ? (
					<Content>
						{props.nickname}님<br />
						멋사 위키에 오신 것을
						<br />
						환영합니다 !
					</Content>
				) : (
					<Content>
						닉네임은 최초 1회 설정 후 <br />
						변경이 불가능합니다. <br />
						<br />
						정말 {`{${props.nickname}}`}
						{`(으)`}로 하시겠습니까?
					</Content>
				)}
				{userConfirm ? (
					<ButtonWrapper>
						<ButtonStyle onClick={handleStart} $isRightButton={false}>
							시작하기
						</ButtonStyle>
					</ButtonWrapper>
				) : (
					<ButtonWrapper>
						<ButtonStyle onClick={handleConfirm} $isRightButton={false}>
							예
						</ButtonStyle>
						<ButtonStyle onClick={() => props.setModalIsOpen(false)} $isRightButton={true}>
							아니오
						</ButtonStyle>
					</ButtonWrapper>
				)}
				<div className="lionimgsection">
					<div className="lionimg">
						<StyledImage src="/img/modallion.png" alt="닉네임 박스 이미지" fill priority />
					</div>
				</div>
			</ModalStyle>
		</ModalSection>
	);
};

export default ConfirmModal;

const ModalSection = styled.div<{ height: number }>`
	position: fixed;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	width: 100%;
	top: 0;
	right: 50%;
	bottom: 0;
	left: 50%;
	transform: translate(-50%, 0%);
	height: ${(props) => props.height};
	background-color: rgba(0, 0, 0, 0.5);
	z-index: 3;
`;

const ModalStyle = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 30%;
	height: fit-content;
	font-size: 1.8rem;
	background-color: #ffffff;
	border-radius: 2rem;
	border: 1px solid #000;
	z-index: 3;
	padding: 12rem 2rem 1rem;
	.lionimgsection {
		width: 100%;
		margin-top: 1.5rem;
	}
	.lionimg {
		width: 10%;
		min-width: 5rem;
		position: relative;
		left: 0;
	}
`;

const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 2.5rem;
	margin-top: 2rem;
`;

const Content = styled.div`
	text-align: center;
	line-height: 3rem;
`;

const ButtonStyle = styled.div<{ $isRightButton: boolean }>`
	display: flex;
	text-align: center;
	justify-content: center;
	border-radius: 1rem;
	background: #b1ebff;
	min-width: 5rem;
	padding: 1.4rem 1rem;
	cursor: pointer;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
