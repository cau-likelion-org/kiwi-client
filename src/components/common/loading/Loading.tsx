'use client';
import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import Image from 'next/image';
import * as S from './Loading.styled';

const Loading = () => {
	return (
		<S.Container>
			<S.ImagesWrapper>
				<S.ImageWrapper animate={{ rotate: 360, transition: { duration: 1, repeat: Infinity, repeatDelay: 3 } }}>
					<Image src="/img/modallion.png" layout="fill" objectFit="contain" objectPosition="center" alt="이미지" />
				</S.ImageWrapper>
				<S.ImageWrapper
					animate={{ rotate: 360, transition: { duration: 1, delay: 1, repeat: Infinity, repeatDelay: 3 } }}
				>
					<Image src="/img/modallion.png" layout="fill" objectFit="contain" objectPosition="center" alt="이미지" />
				</S.ImageWrapper>
				<S.ImageWrapper
					animate={{ rotate: 360, transition: { duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 } }}
				>
					<Image src="/img/modallion.png" layout="fill" objectFit="contain" objectPosition="center" alt="이미지" />
				</S.ImageWrapper>
			</S.ImagesWrapper>
		</S.Container>
	);
};

export default Loading;
