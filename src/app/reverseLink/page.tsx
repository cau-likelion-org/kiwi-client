'use client';

interface LinkProps{
  link?: string;
}

import Image from 'next/image';
import React, { useState } from 'react'
import styled from 'styled-components';

const ViewerPage = () => {

  const isClickedLink = ({link}: LinkProps) => {
    console.log(link);
  };

  const [reverseLinks, setreverseLinks] = useState([
    {
      id: 1,
      title: '11기',
      link:'',
    },
    {
      id: 2,
      title: '냠념',
      link:'asdf',
    },
    {
      id: 1,
      title: '12기',
      link:'',
    },
    {
      id: 1,
      title: '멋사진심녀',
      link:'',
    },
    {
      id: 1,
      title: '기획파트',
      link:'',
    }
  ])
  return (
    <ViewerSection>
				<HeartImageWrapper>
					<Image src="/heart.png" alt="" width={50} height={50} />
					<Image src="/heart.png" alt="" width={50} height={50} />
					<Image src="/heart.png" alt="" width={50} height={50} />
				</HeartImageWrapper>
        <Viewer>
          <ViewerHeaderSection> 
          <img src="/sketchBookHeader.png" alt="sketchbook" style={{width: "calc(100% - 15px)", height: "100px"}}/>
          <HeaderShadow>
          <div style={{height: '50%', width: '100%'}}></div>
          <div style={{height: '50%', width: '100%',backgroundColor:"black"}}></div>
          </HeaderShadow>
          </ViewerHeaderSection> 
          <ViewerBody>
            <ContentsHeader>
              <Title>{"{제목}"}  문서를 가리키는 문서</Title>
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
          <div style={{backgroundColor:"black", width: "90%", height:"15px",marginLeft:"15px"}}/>
        </Viewer>
        <img src='/ground.png' alt="ground" style={{marginTop:"100px",width:"100%"}}/>
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
align-items: center;
flex-direction: column;
`
const ViewerHeaderSection = styled.div`
width: calc(90% + 15px);
height: 100px;
display: flex;
`
const ViewerBody = styled.div`
background: white;
width: 90%;
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
  color: #0757F1;
  font-family: NeoDunggeunmo Pro;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-bottom: 50px;
  `
  const Text = styled.span`
  width: auto;
  &:hover{
    border-bottom: 1.5px solid #0757F1;
  }
  cursor: pointer;
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
`
const HeaderShadow = styled.div`
width: 15px;
height: 100%;
display: flex;
flex-direction: column;
`