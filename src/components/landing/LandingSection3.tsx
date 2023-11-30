'use client';

import React from 'react';
import Image from 'next/image';
import styled from 'styled-components';

const LandingSection3 = () => {
	return (
		<ImageWrapper>
			<StyledImage src="/img/landing3.png" alt={'랜딩'} fill priority></StyledImage>
		</ImageWrapper>
	);
};

export default LandingSection3;

const ImageWrapper = styled.div`
	width: 100%;
	position: relative;
`;

const StyledImage = styled(Image)`
	position: relative !important;
	height: fit-content;
`;
