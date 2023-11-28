'use client';

import LinkBox from '@/components/common/viewer/LinkBox';
import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';

const ViewerPage = () => {
  const [openList, setOpenList] = useState(true);

  const isClickedArrow = () => {
    if(openList)setOpenList(false);
    else setOpenList(true);
    console.log(1);
  }

  const [viewerContentsLists, setViewerContentsLists] = useState([
    {
      id: 1,
      contents: '소개'
    },
    {
      id: 2,
      contents: '11기 인물'
    },
    {
      id: 3,
      contents: '11기 사건'
    },
    {
      id: 4,
      contents: '11기 프로젝트',
    },
  ]);

  const [contents, setContents] = useState([
    {
      id: 1,
      title: '소개',
      content:
      `
      나뚜루 말차 아이스크림을 조아한다..
      일주일에 3번씩 나뚜루를 턴다는 소문이 있을 정도 사실이다.

      부산 엠버서더다.
      부산을 너무 사랑해서 가끔 아련한 눈빛으로 ‘바다 보고 싶다..’라고 속삭이곤 한다
      부산 놀러오면 횟집 투어 시켜준다고 함(풀코스로 쏜답니다)
      `
    }
  ])
  return (
    <ViewerSection>
				<HeartImageWrapper>
					<Image src="/heart.png" alt="" width={50} height={50} />
					<Image src="/heart.png" alt="" width={50} height={50} />
					<Image src="/heart.png" alt="" width={50} height={50} />
					<Image src="/heart.png" alt="" width={50} height={50} />
				</HeartImageWrapper>
        <Viewer>
          <ViewerHeaderSection src="/sketchBookHeader.png" alt="sketchbook"/> 
          <ViewerBody>
            <ContentsHeader>
              <Title>권수연</Title>
              <Links>
                <LinkBox text="편집"/>
                <LinkBox text="역사"/>
                <LinkBox text="역링크"/>
              </Links>
            </ContentsHeader>
            <ContentsBody>
              <ContentsLists>
                <ListTitle>
                  <>목차</>
                  <Image src="/Polygon.png" alt="arrow" width={27} height={27} onClick={isClickedArrow}></Image>
                </ListTitle>
                {openList &&
                <ListBox>
                  {viewerContentsLists.map((list)=>(
                    <List>{list.id}. {list.contents}</List>
                  ))}
                </ListBox>
                }
              </ContentsLists>
              {contents.map((list)=>{
                return(
                  <>
                    <ContentTitle>{list.id}. {list.title}</ContentTitle>
                    <Content>{list.content}</Content>
                  </>
                )
              })}
            </ContentsBody>            
          </ViewerBody>
        </Viewer>
        <img src='/ground.png' alt="ground" style={{marginTop:"100px",width:"100px"}}/>
    </ViewerSection>
    
  )
}

export default ViewerPage;

const ViewerSection = styled.div`
background: rgba(7, 8, 241, 0.72);
`;
const HeartImageWrapper = styled.div`
  padding: 100px 10px 30px 0;
  margin-left: 2%;
	display: flex;
	gap: 10px;
`;
const Viewer = styled.div`
display: flex;
// justify-content: center;
align-items: center;
flex-direction: column;
`
const ViewerHeaderSection = styled.img`
width: 90%;
height: 100px;
margin: 0;
`
const ViewerBody = styled.div`
background: white;
width: 90%;
margin: 0;
display: flex;
// align-items: flex-start;
align-items: center;
justify-content: center;
flex-direction: column;
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
width: 75%;
margin-top: 40px;
// background-color: yellow;
`