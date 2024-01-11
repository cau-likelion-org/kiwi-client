'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import ConfirmModal from './ConfirmModal';
import { checkNickName, getRandomNickname } from '@/apis/login';

const UserNickNameMain = () => {
	const [userNickname, setUserNickname] = useState('어쩔사자티비');
	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [isAvailable, setIsAvailable] = useState(true);

	const handleModal = async () => {
		try {
			const result = await checkNickName(userNickname);
			if (!userNickname) {
				alert('닉네임을 설정해주세요');
				return false;
			}
			if (result.status === '200') {
				if (modalIsOpen) {
					setModalIsOpen(false);
				} else {
					setModalIsOpen(true);
				}
			} else {
				setIsAvailable(false);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const handleRandomBtn = async () => {
		try {
			const response = await getRandomNickname();
			setUserNickname(response.data.name);
			setIsAvailable(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Main>
			{modalIsOpen === true && <ConfirmModal setModalIsOpen={setModalIsOpen} nickname={userNickname} />}
			<Title>
				<div className="overlay">{'STEP 01 >> 닉네임 설정'}</div>
				<StyledImage src="/img/nicknametitle.png" alt="닉네임 박스 이미지" fill priority />
			</Title>
			<Box>
				<Content>
					<div className="content">
						<div className="left">
							<StyledImage src="/img/nicknamelion.png" alt="닉네임 박스 이미지" fill priority />
						</div>
						<div className="right">
							<div className="top">
								<div className="text">LV. 1</div>
								<div className="barimg">
									<StyledImage src="/img/nicknamebar.png" alt="닉네임 박스 이미지" fill priority />
								</div>
							</div>
							<div className="bottom">
								<input
									className="input"
									type="text"
									name="user"
									placeholder="닉네임을 써주세요"
									value={userNickname}
									readOnly
									onChange={(e) => {
										setUserNickname(e.target.value);
										setIsAvailable(true);
									}}
								></input>
								<div className="shufflebtn">
									<StyledImage
										onClick={handleRandomBtn}
										src="/img/shufflelogo.png"
										alt="닉네임 박스 이미지"
										fill
										priority
									/>
								</div>
							</div>
							{isAvailable === false ? (
								<div className="checkText">이미 사용 중인 닉네임 입니다</div>
							) : (
								<div className="checkText"></div>
							)}
						</div>
					</div>
					<SubmitBtn onClick={handleModal}>다음</SubmitBtn>
				</Content>
				<StyledImage src="/img/windowDesign.png" alt="닉네임 박스 이미지" fill priority />
			</Box>
			<div className="lionwrap">
				<LionImage src="/img/lionred.png" alt="닉네임 박스 이미지" fill priority />
				<LionImage src="/img/lionorange.png" alt="닉네임 박스 이미지" fill priority />
				<LionImage src="/img/liongreen.png" alt="닉네임 박스 이미지" fill priority />
				<LionImage src="/img/lionblue.png" alt="닉네임 박스 이미지" fill priority />
				<LionImage src="/img/lionpurple.png" alt="닉네임 박스 이미지" fill priority />
			</div>
		</Main>
	);
};

export default UserNickNameMain;

const Main = styled.div`
	height: 90vh;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-family: NeoDunggeunmo Pro;
	overflow-y: hidden;
	.lionwrap {
		position: relative;
		width: 30%;
		height: 29%;
		display: flex;
		margin-top: 10rem;
		gap: 0rem;
		bottom: 0;
		right: 26rem;
		@media screen and (min-width: 1024px) {
			width: 90%;
			height: 45%;
			margin-top: 10rem;
			gap: 5rem;
			bottom: 7rem;
			right: 0rem;
		}
	}
`;

const Title = styled.div`
	position: relative;
	width: 40%;
	min-width: 350px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: max-content;
	top: 4rem;
	.overlay {
		z-index: 1;
		position: absolute;
		height: 100%;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 2rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.3125rem;
		@media screen and (min-width: 1024px) {
			font-size: 2.5rem;
		}
	}
	@media screen and (min-width: 1024px) {
		width: 30%;
		top: 12rem;
	}
`;

const Box = styled.div`
	position: relative;
	width: 35%;
	min-width: 400px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	height: max-content;
	z-index: 2;
	top: 5rem;
	@media screen and (min-width: 1024px) {
		top: 13rem;
	}
`;

const Content = styled.div`
	z-index: 1;
	position: absolute;
	margin-top: 4rem;
	height: 50%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	.content {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: fit-content;
		gap: 1.8rem;
	}
	.left {
		position: relative;
		width: 15%;
		min-width: 11rem;
	}
	.right {
		width: 49%;
		display: flex;
		flex-direction: column;
		justify-content: center;
	}
	.top {
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-left: 1.5rem;
	}
	.barimg {
		width: 65%;
		margin-top: 2rem;
	}
	.bottom {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		gap: 0.8rem;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.input {
		width: 70%;
		height: 3.4rem;
		border: none;
		outline: none;
		border-radius: 1rem;
		border: 1px solid #000;
		color: #000;
		font-family: NeoDunggeunmo Pro;
		font-size: 1.8rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		padding: 0rem 1rem;
		text-align: center;
	}
	.shufflebtn {
		min-width: 3.7rem;
		height: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
		@media screen and (min-width: 1024px) {
			height: 5rem;
			width: 2rem;
		}
	}
	.checkText {
		width: 80%;
		color: #ff4e4e;
		min-height: 1.5rem;
		margin-top: 0.5rem;
		font-size: 1rem;
		text-align: center;
	}
	.text {
		margin-top: 2rem;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;

const LionImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;

const SubmitBtn = styled.button`
	z-index: 1;
	display: flex;
	align-items: center;
	justify-content: center;
	background: none;
	border: none;
	padding: 0;
	margin: 0;
	font-family: inherit;
	cursor: pointer;
	display: flex;
	padding: 1rem 2rem;
	justify-content: center;
	align-items: center;
	border-radius: 1rem;
	background: #4c4df5;
	color: white;
`;
