'use client';

import LandingSection1 from './LandingSection1';
import LandingSection2 from './LandingSection2';
import LandingSection3 from './LandingSection3';
import { styled } from 'styled-components';

const Landing = () => {
	return (
		<LandingSection>
			<LandingSection1 />
			<LandingSection2 />
			<LandingSection3 />
		</LandingSection>
	);
};

export default Landing;

const LandingSection = styled.div`
background: #4c4df5;
height: fit-content;
width: 100%;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
font-family: NeoDunggeunmo Pro;`;
