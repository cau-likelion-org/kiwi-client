'use client'
import React from 'react'
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Loading = () => {
  return (
    <Container>
    <ImagesWrapper>
        <ImageWrapper animate={{ rotate: 360, transition: { duration: 1, repeat: Infinity, repeatDelay: 3 } }}>
            <Image src="/img/modallion.png" layout="fill" objectFit="contain" objectPosition="center" alt="이미지" />
        </ImageWrapper>
        <ImageWrapper
            animate={{ rotate: 360, transition: { duration: 1, delay: 1, repeat: Infinity, repeatDelay: 3 } }}
        >
            <Image src="/img/modallion.png" layout="fill" objectFit="contain" objectPosition="center" alt="이미지" />
        </ImageWrapper>
        <ImageWrapper
            animate={{ rotate: 360, transition: { duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 } }}
        >
            <Image src="/img/modallion.png" layout="fill" objectFit="contain" objectPosition="center" alt="이미지" />
        </ImageWrapper>
    </ImagesWrapper>
</Container>
  )
}

export default Loading

const Container = styled.div`
	height: 98vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

const ImageWrapper = styled(motion.div)`
	position: relative;
	width: 4vw;
	margin-left: 4.5px;
	margin-right: 4.5px;
`;
const ImagesWrapper = styled.div`
	position: absolute;
	display: flex;
	height: 100%;
	margin-top: 64px;
`;
