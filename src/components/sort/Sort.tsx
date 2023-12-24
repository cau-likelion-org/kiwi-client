'use client';

interface LinkProps{
  link?: string;
}

import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';

const Sort = () => {
  const [sortContent, setSortContent] = useState('11기');

  const isClickedLink = ({link}: LinkProps) => {
    console.log(link);
    //여기에 링크로 이동하는 코드 작성
  };

  const whatSort = () => {

  }

  const [reverseLinks, setreverseLinks] = useState([
    {
      id: 1,
      title: '‘11기’ 분류에',
      link:'',
    },
    {
      id: 2,
      title: '문서 제목',
      link:'asdf',
    },
    {
      id: 1,
      title: '문서 제목2',
      link:'',
    },
    {
      id: 1,
      title: '문서 제목3',
      link:'',
    },
    {
      id: 1,
      title: '문서 제목',
      link:'',
    }
  ])

  return (
    <Main>
				<div className="heart">
				<StyledImage src="/img/heart4group.png" alt="문서역사" fill priority />
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
              <Title>분류: {sortContent}</Title>
            </ContentsHeader>
            <ContentsBody>
               <Content>
                 {reverseLinks.map((reverseLink, index)=>(
                   <List key={index}>
                     <Text onClick={()=>isClickedLink({link: reverseLink.link})}>&bull; {reverseLink.title}</Text> </List>
                 ))}
               </Content>
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

export default Sort;

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
margin-bottom: 3.75rem;
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
  const Text = styled.span`
  width: auto;
  &:hover{
    border-bottom: 1.5px solid #0757F1;
    border-color: #0757F1;
  }
  cursor: pointer;

color: #0757F1;
font-family: NeoDunggeunmo Pro;
font-size: 20px;
font-style: normal;
font-weight: 400;
line-height: normal;
`