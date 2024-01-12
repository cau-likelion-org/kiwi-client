import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { ICommand, commands } from '@uiw/react-md-editor';
import MDEditor from '@uiw/react-md-editor';
import { Generations, IOption } from '@/types/request';
import { uploadImageToServer } from '@/apis/docs';
import { useRouter, useSearchParams } from 'next/navigation';
import { getDocsContent } from '@/apis/viewer';
import Modal from '../common/post/Modal';

const customCommands = commands
	.getCommands()
	.filter((cmd) => cmd.keyCommand !== 'image' && cmd.keyCommand !== 'comment');

const Editor: React.FC = () => {
	const [modal, setModal] = useState(false);
	const [md, setMd] = useState<string>('');
	const [selectedGenerations, setSelectedGenerations] = useState<readonly IOption[] | null>([]);
	const params = useSearchParams();
	const title: string = params.get('title') || '';
	const router = useRouter();
	useEffect(() => {
		const getDocument = async (docsTitle: string) => {
			if (title) {
				const result = await getDocsContent(docsTitle);
				setMd(result.content);
				const fetchedGenerations = result.generations.map((item: Generations) => ({
					value: item.generation,
					label: item.generation,
				}));
				setSelectedGenerations(fetchedGenerations);
			}
		};
		getDocument(title);
	}, [title]);

	const cancelEdit = () => {
		if (confirm('작성한 내용은 저장되지 않습니다. 편집을 취소할까요?')) {
			let encodedTitle = encodeURIComponent(title);
			router.push(`/viewer?title=${encodedTitle}`);
		}
	};

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

	return (
		<>
			<Wrapper>
				<BtnWrapper>
					<Btn onClick={cancelEdit}>취소</Btn>
					<Btn onClick={onModal}>완료</Btn>
				</BtnWrapper>
				<Input value={title} />
				<div className="markarea">
					<MDEditor
						commands={[...customCommands, imageUploadCommand]}
						value={md}
						onChange={handleEditorChange}
						height={500}
						className="md-editor"
					/>
				</div>
			</Wrapper>
			{modal && (
				<Modal
					md={md}
					title={title}
					closeModal={closeModal}
					generation={selectedGenerations}
					setGeneration={setSelectedGenerations}
				/>
			)}
		</>
	);
};

export default Editor;

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
