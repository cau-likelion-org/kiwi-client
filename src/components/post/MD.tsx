import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { useState, useRef, useEffect } from 'react';
import { ICommand, commands } from '@uiw/react-md-editor';
import Modal from '../common/post/modal/Modal';
import MDEditor from '@uiw/react-md-editor';
import { IOption } from '@/types/request';
import { uploadImageToServer } from '@/apis/docs';
import { useRouter } from 'next/navigation';
import * as S from './MD.styled';

const customCommands = commands
	.getCommands()
	.filter((cmd) => cmd.keyCommand !== 'image' && cmd.keyCommand !== 'comment');

const Upload: React.FC = () => {
	const router = useRouter();
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

	const cancelPost = () => {
		if (confirm('작성한 내용은 저장되지 않습니다. 작성을 취소할까요?')) {
			router.push('/');
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

	function createBlobUrl(file: any) {
		return URL.createObjectURL(file);
	}

	const imageUploadCommand: ICommand = {
		name: 'image-upload',
		keyCommand: 'image-upload',
		buttonProps: { 'aria-label': 'Upload image', title: 'Upload image' },
		icon: (
			<svg width="14" height="14" viewBox="0 0 20 15">
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
				const blobUrl = createBlobUrl(file);
				const imageUrl = await uploadImageToServer(blobUrl);
				const imageMarkdown = `<img src="${imageUrl}" alt="image" style="width: 30%;"/>`;
				api.replaceSelection(imageMarkdown);
			};
			fileInput.click();
		},
	};

	const toggleCommand: ICommand = {
		name: 'Toggle',
		keyCommand: 'Toggle',
		buttonProps: { 'aria-label': 'Insert expander', title: 'Toggle' },
		icon: <div>▶</div>,
		execute: (state, api) => {
			const expanderHtml = `<details><summary>토글 제목</summary>여기에 글을 입력하세요</details>`;
			api.replaceSelection(expanderHtml);
		},
	};

	return (
		<>
			<S.Wrapper>
				<S.BtnWrapper>
					<S.Btn onClick={cancelPost}>취소</S.Btn>
					<S.Btn onClick={onModal}>완료</S.Btn>
				</S.BtnWrapper>
				<S.Input value={title} onChange={inputChange} placeholder="문서 제목을 입력하세요" />
				<div className="markarea">
					<MDEditor
						commands={[...customCommands, imageUploadCommand, toggleCommand]}
						value={md}
						onChange={handleEditorChange}
						height={500}
						className="md-editor"
					/>
				</div>
			</S.Wrapper>
			{modal && (
				<Modal md={md} title={title} closeModal={closeModal} generation={generation} setGeneration={setGeneration} />
			)}
		</>
	);
};

export default Upload;
