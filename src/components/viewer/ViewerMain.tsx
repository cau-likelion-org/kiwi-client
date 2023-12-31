"use client";
import { getDocsContent } from '@/apis/viewer';
import LinkBox from '@/components/common/viewer/LinkBox';
import Image from 'next/image';
import { useSearchParams, useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';

interface LinkProps{
  link?: string;
}

const ViewerMain = () => {
  const router = useRouter();
  const params = useSearchParams();
	const docTitle = params.get('title');

  const [openList, setOpenList] = useState(true);
  const [depthOne, setDepthOne] = useState(true);

  const isDepthOne = (depth : number)=>{
    if(depth === 1)setDepthOne(true);
    else setDepthOne(false);
  }

  const isClickedArrow = () => {
    if(openList)setOpenList(false);
    else setOpenList(true);
    console.log(1);
  }

  const isClickedLink = (link : string) => {
    router.push(`/viewer?title=${link}기`);
    //여기에 링크로 이동하는 코드 작성
  };

  const [sortLinks, setSortLinks] = useState<{ id: number, title: string, link: string }[]>([])

  const [viewerContentsLists, setViewerContentsLists] = useState<{ id: number, contents: string }[]>([]);

  const [contents, setContents] = useState<{ id: number, title: string, content: string }[]>([]);
  // const [linkReplacements, setLinkReplacements] = useState< { displayText: string, url: string }[]>([]);


  function transformDepth(data :{ generation: string }[]) {
  return data.map((generation, index) => ({
    id: index + 1,
    title: `${generation.generation}`,
    link: '',
  }));
}

function parseLinks(text:string) {
  // text = text || '';
  const regex = /\[([^\]]+)\]\(([^)]+)\)/g;

  return text.replace(regex, (match, linkText, linkUrl) => {
    return `<a href="${linkUrl}">${linkText}</a>`;
  });
}

const processInput = (input: string) => {
  const lines = input.split('\n');
  let id = 1;
  const lists: { id: number, contents: string }[] = [];
  const docContents: { id: number, title: string, content: string }[] = [];

  lines.forEach((line, index) => {
    const level = line.match(/#/g)?.length;
    const text = line.replace(/#+\s?/, '');

    if(level !== undefined && level > 0){
      const title = `${id}. ${text.trim()}`;
      lists.push({ id, contents: title });
      docContents.push({
        id,
        title,
        content: '',
      });
      id += 1;
    } else {
      // '#'로 시작하지 않는 라인을 docContents의 마지막 항목의 content에 추가
      if (docContents.length > 0) {
        docContents[docContents.length - 1].content += line;
      }
    }
  });

  return { lists, docContents };
};



  useEffect(()=>{
    const fetchData = async ()=>{
      if(typeof docTitle === 'string'){
        console.log(docTitle);
        const data = await getDocsContent(docTitle);
        console.log(data);
        const parsed = parseLinks(data.content);
        console.log(parsed);
        if(data !== undefined){
          const { lists, docContents } = processInput(data.content);
          setViewerContentsLists(lists);
          setContents(docContents);
          

          const sortLinks = transformDepth(data.generations);
          setSortLinks(sortLinks);
          isDepthOne(sortLinks.length + 1);
        }
      }
    }
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
          <div style={{height: '50%', width: '100%'}}></div>
          <div style={{height: '50%', width: '100%',backgroundColor:"black"}}></div>
          </HeaderShadow>
          </ViewerHeaderSection> 
          <ViewerBody>
            <ContentsHeader>
              <Title>{docTitle}</Title>
              <Links>
                <LinkBox text="편집" docTitle={docTitle || ''}/>
                <LinkBox text="역사" docTitle={docTitle || ''}/>
                <LinkBox text="역링크" docTitle={docTitle || ''}/>
              </Links>
            </ContentsHeader>
            <ContentsBody>
              {
                !depthOne ?

              <SortBox>
                <div className="sortTitle">
                  분류
                </div>
                <div className="line">|</div>
                {sortLinks.map((sortLink, index)=>(
                   <div className = "sortContent" key={index}  onClick={()=>isClickedLink(sortLink.title)}> {sortLink.title}기</div>
                 ))}
                <div className="sortContent"></div>
              </SortBox>

              :
              null
              }
              <ContentsLists>
                <ListTitle>
                  <>목차</>
                  {openList ?
                    <StyledImage src="/img/Polygon.png" alt="arrow" width={27} height={27} onClick={isClickedArrow}></StyledImage>
                    :
                    <StyledImage src="/img/Polygon_up.png" alt="arrow" width={27} height={27} onClick={isClickedArrow}></StyledImage>
                  }
                </ListTitle>
                {openList &&
                  <ListBox>
                    {viewerContentsLists.map((list) => (
                      <List key={list.id} dangerouslySetInnerHTML={{ __html: parseLinks(list.contents) }}></List>
                    ))}
                  </ListBox>
                }

              </ContentsLists>
              {contents.map((list)=>{
                return(
                  <>
                    {/* <ContentTitle>{list.title}</ContentTitle>
                    <Content>{list.content}</Content> */}
                    {/* <ContentTitle>{parseLinks(list.title)}</ContentTitle> */}
                    <ContentTitle dangerouslySetInnerHTML={{ __html: parseLinks(list.title) }} />
                    <Content dangerouslySetInnerHTML={{ __html: parseLinks(list.content) }} />

                  </>
                )
              })}
            </ContentsBody>            
          </ViewerBody>
          <div style={{backgroundColor:"black", width: "100%", height:"15px",marginLeft:"15px"}}/>
        </Viewer>
        <div className="lionwrap">
        <StyledImage src="/img/one-right-lionground.png" alt="문서역사 하단" fill priority />
			</div>
    </Main>
    
  )
}

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
`
const ViewerHeaderSection = styled.div`
position: relative;
top: 10px; 
width: calc(100% + 15px);
height: 100px;
display: flex;
`
const ViewerBody = styled.div`
background: white;
width: 100%;
margin: 0;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
border-right: 15px solid black;
`
const ContentsHeader = styled.div`
display: flex;
justify-content: space-between;
width: 90%;
margin-top: 20px;
align-items: center;
`
const Title = styled.div`
color: #000;
text-align: center;
font-family: NeoDunggeunmo Pro;
font-size: 30px;
font-style: normal;
font-weight: 400;
line-height: normal;
`
const Links = styled.div`
display: flex;
gap: 10px;
`
const ContentsBody = styled.div`
display: flex;
margin-top: 20px;
padding-top: 20px;
border-top: 0.5px solid black;
width: 90%;
height: auto;
flex-direction: column;
padding-bottom: 100px;
`
const ContentsLists = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-bottom: 40px;
`
const ListTitle = styled.div`
width: 284px;
display: inline-flex;
padding: 16px 8px 16px 21px;
align-items: flex-end;
gap: 200px;
background-color: black;
color: #FFF;
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
`
const ListBox = styled.div`
width: 241px;
display: inline-flex;
padding: 30px 50px 30px 16px;
align-items: center;
gap: 8px;
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
`
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
`
const ContentTitle = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
color: #000;
text-align: center;
font-family: NeoDunggeunmo Pro;
font-size: 24px;
font-style: normal;
font-weight: 400;
line-height: normal;
border-bottom: 0.5px solid black;
padding-bottom: 20px;
`
const Content = styled.div`
white-space: pre-line;
color: #000;
font-family: Pretendard;
font-size: 15px;
font-style: normal;
font-weight: 400;
line-height: 150%;
// width: 75%;
margin-top: 40px;
`
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

.sortTitle{
  color: #000;
  text-align: center;
  font-family: NeoDunggeunmo Pro;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding: 0 2rem 0 2rem;
}
.line{
  text-align: center;
  color: #B1B1B1;
  font-family: NeoDunggeunmo Pro;
  font-size: 1.5625rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
}
.sortContent{
  color: #4C4DF5;
  text-align: center;
  font-family: NeoDunggeunmo Pro;
  font-size: 1.7rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 0 2rem 0 2rem;
  cursor: pointer;
  &:hover{
    border-bottom: 1.5px solid #0757F1;
    border-color: #0757F1;
  }
}
`