import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ICommand, commands } from '@uiw/react-md-editor';
import Modal from './Modal';
import MDEditor from '@uiw/react-md-editor';
import { IOption } from '@/types/request';
import { uploadImageToServer } from '@/apis/docs';

const customCommands = commands.getCommands().filter((cmd) => cmd.keyCommand !== 'image');

const Upload: React.FC = () => {
	const [modal, setModal] = useState(false);
	const [title, setTitle] = useState<string>('');
	const [md, setMd] = useState<string>('');
	const [generation, setGeneration] = useState<readonly IOption[] | null>(null);

	const onModal = () => {
		if (md == '' || title == '') {
			alert('🦁제목 및 내용을 입력해주세요!🦁');
		} else {
			setModal(true);
		}
	};

	const closeModal = () => {
		setModal(false);
	};

	const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setTitle(event.target.value);
	};

	const handleEditorChange = (value?: string | undefined) => {
		if (value !== undefined) {
			setMd(value);
		}
	};

	const imageUploadCommand: ICommand = {
		name: 'image-upload',
		keyCommand: 'image-upload',
		buttonProps: { 'aria-label': 'Upload image', title: 'Upload image' },
		icon: (
			<svg width="14" height="14" viewBox="0 0 20 20">
				<path
					fill="currentColor"
					d="M15 9c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm4-7H1c-.55 0-1 .45-1 1v14c0 .55.45 1 1 1h18c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zm-1 13l-6-5-2 2-4-5-4 8V4h16v11z"
				></path>
			</svg>
		),
		execute: (state, api) => {
			const fileInput = document.createElement('input');
			fileInput.type = 'file';
			fileInput.accept = 'image/*';
			fileInput.onchange = async () => {
				if (!fileInput.files?.length) return;
				const [file] = Array.from(fileInput.files);
				const imageUrl = await uploadImageToServer(file); // 이미지를 서버에 업로드하고 URL을 반환받는 함수
				const imageMarkdown = `![Uploaded image](${file})`;
				api.replaceSelection(imageMarkdown);
			};
			fileInput.click();
		},
	};

	return (
		<>
			<Wrapper>
				<BtnWrapper>
					<Btn>취소</Btn>
					<Btn onClick={onModal}>완료</Btn>
				</BtnWrapper>
				<Input value={title} onChange={inputChange} placeholder="문서 제목을 입력하세요" />
				<div className="markarea">
					<div data-color-mode="dark">
						<MDEditor
							commands={[...customCommands, imageUploadCommand]}
							value={md}
							onChange={handleEditorChange}
							height={500}
							className="md-editor"
						/>
					</div>
				</div>
			</Wrapper>
			{modal && (
				<Modal md={md} title={title} closeModal={closeModal} generation={generation} setGeneration={setGeneration} />
			)}
		</>
	);
};

export default Upload;

const Wrapper = styled.div`
	width: 98%;
	.md-editor {
		white-space: pre-line;
	}
`;

const BtnWrapper = styled.div`
	width: 98%;
	display: flex;
	align-items: flex-end;
	justify-content: end;
	margin-top: 1rem;
	padding: 1rem;
	gap: 1rem;
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
	font-family: Pretendard;
	font-size: 1.3rem;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
`;

const Input = styled.input`
	width: 98%;
	font-family: Pretendard;
	margin-left: 1rem;
	font-size: 2.5rem;
	border: none;
	border-bottom: 2px solid #d9d9d9;
	margin-bottom: 1.5rem;
	&:focus {
		outline: none;
	}
`;
