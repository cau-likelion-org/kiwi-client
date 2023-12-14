import type { NextPage } from 'next';
import '@uiw/react-md-editor/markdown-editor.css';
import '@uiw/react-markdown-preview/markdown.css';
import dynamic from 'next/dynamic';
import { useState, useRef } from 'react';
import styled from 'styled-components';
import { ICommand } from '@uiw/react-md-editor';

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
		const imageMarkdown = `![Uploaded image](${file})`;
		setMd((currentMd) => (currentMd ? `${currentMd}\n${imageMarkdown}` : imageMarkdown));
	};
	return (
		<Wrapper>
			<MDEditor value={md} onChange={setMd} height={500} aria-placeholder="마크다운 편집기입니다!" />
		</Wrapper>
	);
};

export default Upload;

const Wrapper = styled.div`
	width: 98%;
	margin-top: 1rem;
`;
