'use client';

import Image from 'next/image';
import React from 'react';
import * as S from './landing.styled/LandingSection1.styled';

const LandingSection1 = () => {
	const LogOut = () => {
		window.localStorage.removeItem('access');
		window.localStorage.removeItem('refresh');
	};
	return (
		<S.ImageWrapper>
			<S.Wrapper>
				<S.Title>
					<div className="motion animate1">
						<S.MotionWrapper animate={{ rotate: 360, transition: { duration: 1, repeat: Infinity, repeatDelay: 3 } }}>
							<Image src="/img/crylion.png" alt="" width={30} height={30} />
						</S.MotionWrapper>
						<S.MotionWrapper
							animate={{ rotate: 360, transition: { duration: 1, delay: 1, repeat: Infinity, repeatDelay: 3 } }}
						>
							<Image src="/img/heart.png" alt="" width={30} height={30} />
						</S.MotionWrapper>
						<S.MotionWrapper
							animate={{ rotate: 360, transition: { duration: 1, delay: 2, repeat: Infinity, repeatDelay: 3 } }}
						>
							<Image src="/img/minilion.png" alt="" width={30} height={30} />
						</S.MotionWrapper>
					</div>
					<S.StyledImage id="title" src="/img/landingTitle.png" alt={'제목'} fill priority></S.StyledImage>
				</S.Title>
				<S.Game>
					<S.StyledImage onClick={LogOut} src="/img/landingGame.png" alt={'화면'} fill priority></S.StyledImage>
				</S.Game>
			</S.Wrapper>
		</S.ImageWrapper>
	);
};

export default LandingSection1;
