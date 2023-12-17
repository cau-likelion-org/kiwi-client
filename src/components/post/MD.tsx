import type { NextPage } from 'next';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ICommand, commands } from '@uiw/react-md-editor';

const MDEditor = dynamic(() => import('@uiw/react-md-editor'), {
	ssr: false,
});

const Upload: NextPage = () => {
	const inputRef = useRef<HTMLInputElement>(null);
	const [md, setMd] = useState<string | undefined>();
	const handleImageUpload = async () => {
		if (!inputRef.current?.files?.length) return;
		const file = inputRef.current.files[0];
		// const imageUrl = await uploadImageToServer(file); // 이미지를 서버에 업로드하고 URL을 반환받는 함수
		const imageMarkdown = `![업로드한 이미지](${file})`;
		setMd((currentMd) => (currentMd ? `${currentMd}\n${imageMarkdown}` : imageMarkdown));
	};
	return (
		<Wrapper>
			<button
				onClick={() => {
					console.log(md);
				}}
			>
				콘솔
			</button>
			<input ref={inputRef} type="file" accept="image/*" onChange={handleImageUpload} style={{ display: 'none' }} />
			<UploadBtn onClick={() => inputRef.current?.click()}>이미지 업로드</UploadBtn>
			<MDEditor value={md} onChange={setMd} height={500} />
		</Wrapper>
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
	margin-bottom: 1rem;
`;

const BtnWrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 1rem;
`;
