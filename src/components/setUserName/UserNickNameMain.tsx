'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import styled from 'styled-components';
import ConfirmModal from './ConfirmModal';

const UserNickNameMain = () => {
	const [userNickname, setUserNickname] = useState('어쩔사자티비');
	const [modalIsOpen, setModalIsOpen] = useState(false);

    const handleModal = ()=>{
        if(modalIsOpen){
            setModalIsOpen(false)
        }else{
            setModalIsOpen(true)
        }
    }
	return (
		<Main>
			{modalIsOpen === true && <ConfirmModal setModalIsOpen={setModalIsOpen} nickname={userNickname}/>}
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
									placeholder="ex) arti_fashion_design"
									value={userNickname}
									onChange={(e) => setUserNickname(e.target.value)}
								></input>
								<div className="shufflebtn">
									<StyledImage src="/img/shufflelogo.png" alt="닉네임 박스 이미지" fill priority />
								</div>
							</div>
						</div>
					</div>
					<SubmitBtn onClick={handleModal}>다음</SubmitBtn>
				</Content>
				<StyledImage src="/img/windowDesign.png" alt="닉네임 박스 이미지" fill priority />
			</Box>
			<div className="lionwrap">
				<StyledImage src="/img/lionred.png" alt="닉네임 박스 이미지" fill priority />
				<StyledImage src="/img/lionorange.png" alt="닉네임 박스 이미지" fill priority />
				<StyledImage src="/img/liongreen.png" alt="닉네임 박스 이미지" fill priority />
				<StyledImage src="/img/lionblue.png" alt="닉네임 박스 이미지" fill priority />
				<StyledImage src="/img/lionpurple.png" alt="닉네임 박스 이미지" fill priority />
			</div>
		</Main>
	);
};

export default UserNickNameMain;

const Main = styled.div`
	margin-top: 64px;
	height: fit-content;
	padding-top: 10rem;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	font-family: NeoDunggeunmo Pro;
	.lionwrap {
		position: relative;
		width: 90%;
		display: flex;
		margin-top: 10rem;
		gap: 3rem;
		bottom: 0;
	}
	/* background-image: linear-gradient(rgba(255, 255, 255, 0.07) 2px, transparent 2px),
		linear-gradient(90deg, rgba(255, 255, 255, 0.07) 2px, transparent 2px);
	background-size:
		100px 100px,
		100px 100px;
	background-position:
		-2px -2px,
		-2px -2px; */
`;

const Title = styled.div`
	position: relative;
	width: 40%;
	min-width: 400px;
	display: flex;
	align-items: center;
	justify-content: center;
	height: max-content;
	margin-bottom: 5rem;
	.overlay {
		z-index: 1;
		position: absolute;
		height: 100%;
		width: 90%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		letter-spacing: 0.3125rem;
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
`;

const Content = styled.div`
	z-index: 1;
	position: absolute;
	margin-top: 4rem;
	height: 70%;
	width: 90%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 3rem;
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
		width: 40%;
	}
	.top {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
		font-size: 2.5rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin-bottom: 3rem;
	}
	.barimg {
		width: 60%;
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
	}
	.shufflebtn {
		min-width: 3.7rem;
		height: fit-content;
		display: flex;
		align-items: center;
		justify-content: center;
		cursor: pointer;
	}
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
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
	gap: 0.8rem;
	border-radius: 1rem;
	background: #4c4df5;
	color: white;
`;
