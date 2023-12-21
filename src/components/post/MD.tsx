import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ICommand, commands } from '@uiw/react-md-editor';
import Modal from './Modal';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
	ssr: false,
});

interface IOption {
	value: string;
	label: string;
}
interface PropsType {
	md: string;
	setMd: React.Dispatch<React.SetStateAction<string>>;
	class1: IOption | null;
	setClass1: React.Dispatch<React.SetStateAction<IOption | null>>;
	class2: IOption | null;
	setClass2: React.Dispatch<React.SetStateAction<IOption | null>>;
}

const customCommands = commands.getCommands().filter((cmd) => cmd.keyCommand !== 'image');

const Upload: React.FC<PropsType> = ({ md, setMd, class1, setClass1, class2, setClass2 }) => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [modal, setModal] = useState(false);

	const onModal = () => {
		setModal(true);
		document.body.style.overflow = 'hidden';
	};

	const closeModal = () => {
		setModal(false);
	};

	const handleEditorChange = (value?: string | undefined) => {
		if (value !== undefined) {
			setMd(value);
		}
	};

	// const handleImageUpload = async () => {
	// 	if (!inputRef.current?.files?.length) return;
	// 	const file = inputRef.current.files[0];
	// 	// const imageUrl = await uploadImageToServer(file); // 이미지를 서버에 업로드하고 URL을 반환받는 함수
	// 	const imageMarkdown = `![업로드한 이미지](${file})`;
	// 	setMd((currentMd) => (currentMd ? `${currentMd}\n${imageMarkdown}` : imageMarkdown));
	// };

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
				const file = fileInput.files[0];
				// const imageUrl = await uploadImageToServer(file); // 이미지를 서버에 업로드하고 URL을 반환받는 함수
				const imageMarkdown = `![Uploaded image](${file})`;
				api.replaceSelection(imageMarkdown);
			};
			fileInput.click();
		},
	};

	return (
		<>
			<Wrapper>
				<UploadBtn onClick={onModal}>*카테고리 선택</UploadBtn>
				{/* <input ref={inputRef} type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} /> */}
				{/* <UploadBtn2 onClick={() => inputRef.current?.click()}>이미지 업로드</UploadBtn2> */}
				<div className="markarea">
					<div data-color-mode="dark">
						<MDEditor
							commands={[...customCommands, imageUploadCommand]}
							value={md}
							onChange={handleEditorChange}
							height={500}
						/>
					</div>
				</div>
			</Wrapper>
			{modal && (
				<Modal closeModal={closeModal} class1={class1} class2={class2} setClass1={setClass1} setClass2={setClass2} />
			)}
		</>
	);
};

export default Upload;

const Wrapper = styled.div`
	width: 98%;
	margin-top: 1rem;
`;

const UploadBtn = styled.button`
	display: inline-flex;
	padding: 1rem 2rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: 1.875rem;
	border: 1px solid #000;
	background: #fff;
	font-size: 1rem;
	margin-bottom: 1.5rem;
	margin-right: 0.5rem;
	margin-left: 1rem;
`;

const UploadBtn2 = styled.button`
	display: inline-flex;
	padding: 1rem 2rem;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	border-radius: 1.875rem;
	border: 1px solid black;
	background: #fff;
	font-size: 1rem;
	margin-bottom: 1.5rem;
	margin-right: 0.5rem;
	margin-left: 1rem;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
