'use client';

import { useEffect, useState } from 'react';
import LandingSection1 from './LandingSection1';
import LandingSection2 from './LandingSection2';
import LandingSection3 from './LandingSection3';
import { styled } from 'styled-components';
import { getRecentDocs } from '@/apis/docs';

const Landing = () => {
	const [docs, setDocs] = useState([]);
	useEffect(() => {
		const getDocs = async () => {
			const result = await getRecentDocs();
			setDocs(result);
		};
		getDocs();
	}, []);

	return (
		<ScrollContainer>
			<Section1>
				<LandingSection1 />
			</Section1>
			<Section2>
				<LandingSection2 data={docs} />
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
