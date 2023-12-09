'use client';

import LandingSection1 from './LandingSection1';
import LandingSection2 from './LandingSection2';
import LandingSection3 from './LandingSection3';
import { styled } from 'styled-components';

const Landing = () => {
	return (
		<ScrollContainer>
			<Section1>
				<LandingSection1 />
			</Section1>
			<Section2>
				<LandingSection2 />
			</Section2>
			<Section3>
				<LandingSection3 />
			</Section3>
		</ScrollContainer>
	);
};

export default Landing;

const ScrollContainer = styled.div`
	width: 100%;
	height: 100vh;
	overflow-y: scroll;
	scroll-snap-type: y mandatory;
`;

const Section1 = styled.section`
	height: 100vh;
	scroll-snap-align: center;
`;

const Section2 = styled.section`
	height: 100vh;
	scroll-snap-align: start;
`;

const Section3 = styled.section`
	height: 95vh;
	scroll-snap-align: start;
`;
