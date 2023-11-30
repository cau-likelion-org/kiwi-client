'use client';

import Image from 'next/image';
import React from 'react';
import styled from 'styled-components';

const LandingSection2 = () => {
	return (
		<ImageWrapper>
			<StyledImage src="/img/landing2.png" alt={'랜딩'} fill priority></StyledImage>
		</ImageWrapper>
	);
};

export default LandingSection2;

const ImageWrapper = styled.div`
	width: 100%;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;
