'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LandingSection1 = () => {
	return (
		<ImageWrapper>
			<StyledImage src="/img/landing1.png" alt={'랜딩'} fill priority></StyledImage>
		</ImageWrapper>
	);
};

export default LandingSection1;

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;
