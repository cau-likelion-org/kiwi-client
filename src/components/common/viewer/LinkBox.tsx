import { AuthVerify } from '@/apis/authAxois';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

interface LinkBoxProps {
	width?: string;
	height?: string;
	text?: string;
	onClick?: () => void;
	docTitle?: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ width = '51', height = '34', text, docTitle = '' }) => {
	const router = useRouter();
	const [isLogin, setIsLogin] = useState(false);

	useEffect(() => {
		const checkLoginStatus = async () => {
			const loginStatus = await AuthVerify();
			setIsLogin(loginStatus === true);
		};

		checkLoginStatus();
	}, []);

	const handleClick = () => {
		if (text === '편집') {
			if (!isLogin) {
				alert('로그인 후 편집이 가능합니다');
			} else {
				let encodedTitle = encodeURIComponent(docTitle);
				router.push(`/edit?title=${encodedTitle}`);
			}
		} else if (text === '역사') {
			let encodedTitle = encodeURIComponent(docTitle);
			router.push(`/docHistory?title=${encodedTitle}`);
		} else if (text === '역링크') {
			let encodedTitle = encodeURIComponent(docTitle);
			router.push(`/backlink?title=${encodedTitle}`);
		}
	};

	return text == '역링크' ? (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="61"
			height="34"
			viewBox="0 0 61 34"
			fill="none"
			onClick={handleClick}
			style={{ cursor: 'pointer' }}
		>
			<rect x="0.5" y="0.5" width="60" height="33" rx="9.5" fill="white" stroke="black" />
			<text x="50%" y="50%" textAnchor="middle" fill="black" fontSize="1rem" dy=".3em">
				{text}
			</text>
		</svg>
	) : (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width={width}
			height={height}
			viewBox="0 0 51 34"
			fill="none"
			onClick={handleClick}
			style={{ cursor: 'pointer' }}
		>
			<rect x="0.5" y="0.5" width="50" height="33" rx="9.5" fill="white" stroke="black" />
			<text x="50%" y="50%" textAnchor="middle" fill="black" fontSize="1rem" dy=".3em">
				{text}
			</text>
		</svg>
	);
};

export default LinkBox;
