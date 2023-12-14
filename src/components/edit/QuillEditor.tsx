// import styles from '../contents/QuillEditor.module.css';
import ReactQuill, { Quill } from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useRef, useMemo } from 'react';
import { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';

interface QuillEditorProps {
	html: string;
	setHtml: Dispatch<SetStateAction<string>>;
}
// import { imageApi } from '../../../apis/posts';

export default function QuillEditor({ html, setHtml }: QuillEditorProps) {
	const quillRef = useRef<ReactQuill>(null);

	// const imageHandler = () => {
	// 	const input = document.createElement('input');
	// 	input.setAttribute('type', 'file');
	// 	input.setAttribute('accept', 'image/*');
	// 	input.click();

	// 	input.addEventListener('change', async () => {
	// 		const file = input.files![0];

	// 		try {
	// 			const res = await imageApi({ img: file });
	// 			const imgUrl = res.data.imgUrl;
	// 			const editor = quillRef.current ? (quillRef.current.getEditor() as Quill) : null;
	// 			const range = editor.getSelection();
	// 			editor.insertEmbed(range.index, 'image', imgUrl);
	// 			editor.setSelection(range.index + 1);
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 	});
	// };

	const modules = useMemo(
		() => ({
			toolbar: {
				container: [
					[{ header: '1' }, { header: '2' }],
					[{ size: [] }],
					['bold', 'italic', 'underline', 'strike', 'blockquote'],
					[{ list: 'ordered' }, { list: 'bullet' }, { align: [] }],
					['image'],
				],
				// handlers: { image: imageHandler },
			},
			clipboard: {
				matchVisual: false,
			},
		}),
		[],
	);

	const formats = [
		'header',
		'font',
		'size',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'align',
		'image',
	];

	return (
		<Wrapper>
			<ReactQuill
				ref={quillRef}
				onChange={setHtml}
				// className={styles.quill}
				modules={modules}
				formats={formats}
				value={html}
				placeholder={'ㅎㅇㅎㅇ'}
				theme="snow"
			/>
		</Wrapper>
	);
}

const Wrapper = styled.div`
	width: 98%;
	margin-top: 1rem;
	/* min-height: 98vh; */
`;
