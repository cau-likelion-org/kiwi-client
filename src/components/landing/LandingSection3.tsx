'use client';

import React from 'react';
import * as S from './landing.styled/LandingSection3.styled';

const LandingSection3 = () => {
	return (
		<>
			<S.ImageWrapper>
				<S.Wrapper>
					<S.Title>
						<div className="overlay">{'> WIKI GUIDE <'}</div>
						<S.StyledImage src="/img/wikiGuide.png" alt={'랜딩'} fill priority></S.StyledImage>
					</S.Title>
					<S.Box>
						<S.Content>
							<S.TextWrapper>
								<div>멋사 중대의 이야기를 저장하고 공유하는 공간으로,</div>
								<div>운영진/아기사자 외에는 문서 작성 및 편집이 불가합니다. </div>
							</S.TextWrapper>
							<S.TextWrapper>
								<div>욕설 및 음란성 내용을 포함하거나, </div>
								<div>타인을 비난하는 내용 작성 시 제재당할 수 있습니다.🚨</div>
								<br />
								<a href=" https://wiki.cau-likelion.org/viewer?title=%EC%9C%84%ED%82%A4%20%EC%82%AC%EC%9A%A9%20%EC%84%A4%EB%AA%85%EC%84%9C">
									멋사 위키가 처음이라면?
								</a>
							</S.TextWrapper>
						</S.Content>
						<S.StyledImage src="/img/guideSection.png" alt={'랜딩'} fill priority></S.StyledImage>
					</S.Box>
				</S.Wrapper>
				<S.Lion1>
					<S.StyledImage2 src="/img/heartlion.png" alt={'랜딩'} fill priority></S.StyledImage2>
				</S.Lion1>
				<S.Lion2>
					<S.StyledImage2 src="/img/glasslion.png" alt={'랜딩'} fill priority></S.StyledImage2>
				</S.Lion2>
			</S.ImageWrapper>
		</>
	);
};

export default LandingSection3;
