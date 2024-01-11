'use client';
import { getDocsContent } from '@/apis/viewer';
import LinkBox from '@/components/common/viewer/LinkBox';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
// import MDEditor from '@uiw/react-md-editor';
// import ReactMarkdown from 'react-markdown';
// import { renderToStaticMarkup } from 'react-dom/server';

interface LinkProps {
	link?: string;
}

const ViewerMain = () => {
	const router = useRouter();
	const params = useSearchParams();
	const docTitle = params.get('title');

	const [openList, setOpenList] = useState(true);
	const [depthOne, setDepthOne] = useState(true);

	const isDepthOne = (depth: number) => {
		if (depth === 1) setDepthOne(true);
		else setDepthOne(false);
	};

	const isClickedArrow = () => {
		if (openList) setOpenList(false);
		else setOpenList(true);
	};

	const isClickedLink = (link: string) => {
		let encodedTitle = encodeURIComponent(link);
		router.push(`/viewer?title=${encodedTitle}`);
		//여기에 링크로 이동하는 코드 작성
	};

	const [sortLinks, setSortLinks] = useState<{ id: number; title: string; link: string }[]>([]);

	const [viewerContentsLists, setViewerContentsLists] = useState<{ id: string; contents: string }[]>([]);

	const [contents, setContents] = useState<{ id: string; title: string; content: string }[]>([]);

	function transformDepth(data: { generation: string }[]) {
		return data.map((generation, index) => ({
			id: index + 1,
			title: `${generation.generation}`,
			link: '',
		}));
	}

	function parseLinks(text: string) {
		const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
		const boldRegex = /\*\*(.*?)\*\*/g;
		// const bulletPointRegex = /^\*\s/gm;
		// const bulletPointRegex2 = /^-\s/gm;
		const quoteRegex = /^>\s?(.*)$/gm; // 인용문
		const strikethroughRegex = /~~(.*?)~~/g;
		const codeRegex = /`(.*?)`/g; // 코드
		const codeBlockRegex = /```([^`]+)```/gs; //코드박스
		const tableRegex = /\n\|(.+\n)*.*\|/g; // 표
		const hrRegex = /^---$/gm;
		const checklistRegex = /-\s\[\s\]/g;
		// console.log(text);

		text = text.replace(linkRegex, (match, linkText, linkUrl) => {
			if (linkText === 'image') {
				return `<img src="${linkUrl}" alt="image" width="60%">`;
			}
			return `<a href="${linkUrl}">${linkText}</a>`;
		});

		// 표 변환
		text = text.replace(tableRegex, function (match) {
			let html = '<table>';
			const rows = match.trim().split('\n'); // 개행 문자로 행을 구분
			rows.forEach((row, rowIndex) => {
				if (rowIndex === 1) return;
				html += '<tr>';
				const cells = row.split('|').slice(1, -1); // '|' 문자로 셀을 구분
				cells.forEach((cell) => {
					const tag = rowIndex === 0 ? 'th' : 'td'; // 첫 번째 행을 헤더로 간주
					html += `<${tag}>${cell.trim()}</${tag}>`;
				});
				html += '</tr>';
			});
			html += '</table>';
			return html;
		});

		text = text.replace(checklistRegex, '<input type="checkbox" disabled>');
		text = text.replace(codeBlockRegex, '<pre>$1</pre>');
		text = text.replace(boldRegex, '<strong>$1</strong>');
		// text = text.replace(bulletPointRegex, '•  ');
		// text = text.replace(bulletPointRegex2, '•  ');
		text = text.replace(quoteRegex, '<blockquote>$1</blockquote>');
		text = text.replace(strikethroughRegex, '<del>$1</del>');
		text = text.replace(codeRegex, '<code>$1</code>');
		text = text.replace(hrRegex, '<hr>');

		text = text.replace(/^(\d+)\.\s(.*)$/gm, (match, number, listItem) => {
			return `<ol start="${number}"><li>${listItem.trim()}</li></ol>`;
		});

		text = text.replace(/^-\s(.*)$/gm, (match, listItem) => {
			return `<ul><li>${listItem.trim()}</li></ul>`;
		});

		text = text.replace(/^(\d+)\.\s(.*)$|-\s(.*)$/gm, (match, number, listItem1, listItem2) => {
			const listItem = listItem1 || listItem2;
			return `<li>${listItem.trim()}</li>`;
		});

		return text;
	}

	const processInput = (input: string) => {
		const lines = input.split('\n');
		let id = 1;
		let subId = 1;
		let subSubId = 1;
		const lists: { id: string; contents: string }[] = [];
		const docContents: { id: string; title: string; content: string }[] = [];

		// '#'로 시작하는 라인이 있는지 확인
		const hasTitle = lines.some((line) => line.startsWith('#'));

		// '#'로 시작하는 라인이 없는 경우 '1. 소개'를 추가
		if (!hasTitle) {
			lists.push({ id: '1', contents: '1. 소개' });
			docContents.push({ id: '1', title: '1. 소개', content: input });
		}

		lines.forEach((line, index) => {
			const level = line.match(/(#+)\s?/g)?.[0].trim().length;
			const text = line.replace(/#+\s?/, '');
			let title;

			if (level !== undefined && level > 0) {
				title = `${id}. ${text.trim()}`;
				id += 1;

				if (title !== undefined) {
					lists.push({ id: title.split('. ')[0], contents: title });
					docContents.push({
						id: title.split('. ')[0],
						title,
						content: '',
					});
				}
			} else {
				if (hasTitle && docContents.length > 0) {
					docContents[docContents.length - 1].content += line + '\n';
				}
			}
		});

		return { lists, docContents };
	};

	const scrollToSection = (sectionId: any) => {
		const element = document.getElementById(`section-${sectionId}`);
		if (element) {
			element.scrollIntoView({ behavior: 'smooth' });
		}
	};

	useEffect(() => {
		const fetchData = async () => {
			if (typeof docTitle === 'string') {
				try {
					const data = await getDocsContent(docTitle);
					const parsed = parseLinks(data.content);
					if (data !== undefined) {
						const { lists, docContents } = processInput(parsed);
						setViewerContentsLists(lists);
						setContents(docContents);

						// console.log(docContents);

						const sortLinks = transformDepth(data.generations);
						setSortLinks(sortLinks);
						isDepthOne(sortLinks.length + 1);
					}
				} catch (error) {
					alert('🦁문서가 존재하지 않습니다🦁');
					console.error(error);
				}
			}
		};
		fetchData();
	}, [docTitle]);

	return (
		<Main>
			<div className="heart">
				<StyledImage src="/img/heart4Group.png" alt="문서역사" fill priority />
			</div>
			<Viewer>
				<ViewerHeaderSection>
					<StyledImage src="/img/sketchbooktop.png" alt="문서역사" fill priority />
					<HeaderShadow>
						<div style={{ height: '50%', width: '100%' }}></div>
						<div style={{ height: '50%', width: '100%', backgroundColor: 'black' }}></div>
					</HeaderShadow>
				</ViewerHeaderSection>
				<ViewerBody>
					<ContentsHeader>
						<Title>{docTitle}</Title>
						<Links>
							<LinkBox text="편집" docTitle={docTitle || ''} />
							<LinkBox text="역사" docTitle={docTitle || ''} />
							<LinkBox text="역링크" docTitle={docTitle || ''} />
						</Links>
					</ContentsHeader>
					<ContentsBody>
						{!depthOne ? (
							<SortBox>
								<div className="sortTitle">분류</div>
								<div className="line">|</div>
								{sortLinks.map((sortLink, index) => (
									<div className="sortContent" key={index} onClick={() => isClickedLink(sortLink.title)}>
										{' '}
										{sortLink.title}
									</div>
								))}
								<div className="sortContent"></div>
							</SortBox>
						) : null}
						<ContentsLists>
							<ListTitle>
								<>목차</>
								{openList ? (
									<StyledImage
										src="/img/Polygon.png"
										alt="arrow"
										width={27}
										height={27}
										onClick={isClickedArrow}
										style={{ cursor: 'pointer' }}
									></StyledImage>
								) : (
									<StyledImage
										src="/img/Polygon_up.png"
										alt="arrow"
										width={27}
										height={27}
										onClick={isClickedArrow}
										style={{ cursor: 'pointer' }}
									></StyledImage>
								)}
							</ListTitle>
							{openList && (
								<ListBox>
									{viewerContentsLists.map((list) => (
										<List
											key={list.id}
											onClick={() => scrollToSection(list.id)}
											dangerouslySetInnerHTML={{ __html: parseLinks(list.contents) }}
										></List>
									))}
								</ListBox>
							)}
						</ContentsLists>
						{contents.map((list) => {
							return (
								<>
									<ContentTitle
										id={`section-${list.id}`}
										dangerouslySetInnerHTML={{ __html: parseLinks(list.title) }}
									/>
									<Content dangerouslySetInnerHTML={{ __html: parseLinks(list.content) }} />
								</>
							);
						})}
					</ContentsBody>
				</ViewerBody>
				<div style={{ backgroundColor: 'black', width: '100%', height: '15px', marginLeft: '15px' }} />
			</Viewer>
			<div className="lionwrap">
				<StyledImage src="/img/one-right-lionground.png" alt="문서역사 하단" fill priority />
			</div>
		</Main>
	);
};

export default ViewerMain;

const Main = styled.div`
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
		width: 100%;
		display: flex;
		margin-top: 10rem;
		gap: 3rem;
		bottom: 0;
	}
	.heart {
		margin-right: 70%;
		width: 20%;
		margin-bottom: 1.5rem;
		min-width: 10rem;
		margin-top: 2rem;
	}
`;
const Viewer = styled.div`
	width: 80%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;
const ViewerHeaderSection = styled.div`
	position: relative;
	top: 10px;
	width: calc(100% + 15px);
	height: 100px;
	display: flex;
`;
const ViewerBody = styled.div`
	background: white;
	width: 100%;
	margin: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	border-right: 15px solid black;
`;
const ContentsHeader = styled.div`
	display: flex;
	justify-content: space-between;
	width: 90%;
	margin-top: 20px;
	align-items: center;
`;
const Title = styled.div`
	color: #000;
	text-align: center;
	font-family: NeoDunggeunmo Pro;
	font-size: 30px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
`;
const Links = styled.div`
	display: flex;
	gap: 10px;
`;
const ContentsBody = styled.div`
	display: flex;
	margin-top: 20px;
	padding-top: 20px;
	border-top: 0.5px solid black;
	width: 90%;
	height: auto;
	flex-direction: column;
	padding-bottom: 100px;
	table {
		width: fit-content;
		border-collapse: collapse;
		margin-bottom: 20px;
	}

	th,
	td {
		padding: 10px;
		text-align: left;
		border: 1px solid #ddd;
	}

	tr:nth-child(even) {
		background-color: #f5f8fa;
	}

	th {
		background-color: white;
	}

	code {
		font-family: Pretendard;
		background-color: #f5f8fa;
		padding: 4px;
		border-radius: 4px;
		color: #333;
	}
	pre {
		font-family: Pretendard;
		background-color: #f5f8fa;
		padding: 2rem;
		border-radius: 4px;
		color: #333;
	}

	blockquote {
		border-left: 3px solid #cfd7de;
		padding: 20px 15px;
		margin: 10px 0;
		font-family: Pretendard;
	}

	a {
		text-decoration: none;
		color: #0968da;
	}

	hr {
		border: none;
		height: 5px;
		background-color: #cfd7de;
		margin: 20px 0;
	}
`;
const ContentsLists = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	margin-bottom: 40px;
`;
const ListTitle = styled.div`
	width: 284px;
	display: inline-flex;
	padding: 16px 8px 16px 21px;
	align-items: flex-end;
	gap: 200px;
	background-color: black;
	color: #fff;
	text-align: center;
	font-family: NeoDunggeunmo Pro;
	font-size: 20px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;

	@media (max-width: 795px) {
		width: 200px; // 원하는 값으로 수정
		gap: 130px;
	}
	// @media (max-width: 494px) {
	//   width: 150px; // 원하는 값으로 수정
	//   gap: 80px;
	// }
`;
const ListBox = styled.div`
	width: 241px;
	display: inline-flex;
	align-items: center;
	// gap: 8px;
	border: 3px solid #000;
	flex-direction: column;
	padding: 30px 50px 30px 16px;

	@media (max-width: 795px) {
		width: 157px; // 원하는 값으로 수정
		// gap: 5px;
	}
	// @media (max-width: 494px) {
	//   width: 100px; // 원하는 값으로 수정
	// }
`;
const List = styled.div`
	width: 175px;
	height: 19.313px;
	flex-shrink: 0;
	color: #000;
	font-family: NeoDunggeunmo Pro;
	font-size: 18px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	margin-bottom: 15px;
	cursor: pointer;
`;
const ContentTitle = styled.div`
	display: flex;
	flex-direction: row;
	align-items: flex-start;
	color: #000;
	text-align: center;
	font-family: NeoDunggeunmo Pro;
	font-size: 24px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	border-bottom: 0.5px solid black;
	margin-top: 20px;
`;
const Content = styled.div`
	white-space: pre-line;
	color: #000;
	font-family: Pretendard;
	font-size: 15px;
	font-style: normal;
	font-weight: 400;
	line-height: 150%;
	margin-bottom: 50px;
	// width: 75%;
	margin-top: 30px;
	white-space: pre-wrap;
`;
const HeaderShadow = styled.div`
	width: 15px;
	height: 100%;
	display: flex;
	flex-direction: column;
`;
const StyledImage = styled(Image)`
	position: relative !important;
	height: unset !important;
	object-fit: cover;
`;
const SortBox = styled.div`
	width: 70rem;
	height: 4.5rem;
	flex-shrink: 0;
	border-radius: 0.625rem;
	border: 0.8px solid #000;
	margin-bottom: 2.5rem;

	display: flex;
	flex-direction: row;
	align-items: center;
	padding: 0.5rem;
	@media (max-width: 980px) {
		width: 40rem; // 원하는 값으로 수정
	}
	@media (max-width: 460px) {
		width: 30rem; // 원하는 값으로 수정
	}

	.sortTitle {
		color: #000;
		text-align: center;
		font-family: NeoDunggeunmo Pro;
		font-size: 1.7rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		padding: 0 2rem 0 2rem;
	}
	.line {
		text-align: center;
		color: #b1b1b1;
		font-family: NeoDunggeunmo Pro;
		font-size: 1.5625rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
	.sortContent {
		color: #4c4df5;
		text-align: center;
		font-family: NeoDunggeunmo Pro;
		font-size: 1.7rem;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
		margin: 0 2rem 0 2rem;
		cursor: pointer;
		&:hover {
			border-bottom: 1.5px solid #0757f1;
			border-color: #0757f1;
		}
	}
`;
