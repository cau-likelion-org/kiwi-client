'use client';

import React from 'react';
import Upload from './MD';
import * as S from './Post.styled';

const Post = () => {
	return (
		<>
			<S.Main>
				<div className="heart">
					<S.StyledImage src="/img/heart3Group.png" alt="문서역사" fill priority />
				</div>
				<S.Docs>
					<S.TopWrapper>
						<S.StyledImage src="/img/sketchbooktop.png" alt="문서역사" fill priority />
						<S.TopShadow>
							<div style={{ height: '60%', width: '100%' }}></div>
							<div style={{ height: '60%', width: '100%', backgroundColor: 'black' }}></div>
						</S.TopShadow>
					</S.TopWrapper>
					<S.ContentSection>
						<Upload />
					</S.ContentSection>
					<div style={{ backgroundColor: 'black', width: '100%', height: '15px', marginLeft: '15px' }} />
				</S.Docs>
				<div className="lionwrap">
					<S.StyledImage src="/img/one-right-lionground.png" alt="문서작성 하단" fill priority />
				</div>
			</S.Main>
		</>
	);
};

export default Post;
