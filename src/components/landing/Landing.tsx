'use client';

import { useEffect, useState } from 'react';
import LandingSection1 from './LandingSection1';
import LandingSection2 from './LandingSection2';
import LandingSection3 from './LandingSection3';
import { styled } from 'styled-components';
import { getRecentDocs } from '@/apis/docs';
import Image from 'next/image';
import { RecentDocs } from '@/types/request';
import { QueryClient, useQuery } from 'react-query';
import { useGetRecent } from '@/hooks/useGetRecent';

const Landing = () => {
	const data = useGetRecent();
	const [docs, setDocs] = useState<RecentDocs[] | undefined>([]);
	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.scrollTo(0, 0);
		}
		setDocs(data);
	}, [data]);

	return (
		<ScrollContainer>
			<Section1>
				<LandingSection1 />
				<div className="mini animate1" id="mini1">
					<Image src="/img/crylion.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate3" id="mini2">
					<Image src="/img/heart.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate2" id="mini3">
					<Image src="/img/minilion.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate2" id="mini4">
					<Image src="/img/heart.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate1" id="mini5">
					<Image src="/img/minilion.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate3" id="mini6">
					<Image src="/img/heart.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate2" id="mini7">
					<Image src="/img/minilion.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate3" id="mini8">
					<Image src="/img/heart.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate1" id="mini9">
					<Image src="/img/crylion.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate1" id="mini10">
					<Image src="/img/crylion.png" alt="" width={30} height={30} />
				</div>
				<div className="mini animate3" id="mini11">
					<Image src="/img/heart.png" alt="" width={30} height={30} />
				</div>
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
	height: fit-content;
	scroll-snap-align: center;
	.mini {
		position: absolute;
		z-index: 1;
		@media (max-width: 1000px) {
			display: none;
		}
		&.animate1 {
			animation: moveUpDown 1s infinite alternate ease-in-out;
		}

		&.animate2 {
			animation: moveUpDown 1s 0.5s infinite alternate ease-in-out;
		}

		&.animate3 {
			animation: moveUpDown 1s 1s infinite alternate ease-in-out;
		}
		@keyframes moveUpDown {
			to {
				transform: translateY(10px);
			}
		}
	}
	#mini1 {
		top: 30%;
		left: 15%;
	}
	#mini2 {
		bottom: 40%;
		left: 7%;
	}
	#mini3 {
		bottom: 10%;
		left: 16%;
	}
	#mini4 {
		top: 30%;
		right: 14%;
	}
	#mini5 {
		top: 55%;
		right: 28%;
	}
	#mini6 {
		bottom: 35%;
		right: 5%;
	}
	#mini7 {
		top: 12%;
		left: 34%;
	}
	#mini8 {
		top: 17%;
		left: 12%;
	}
	#mini9 {
		top: 30%;
		right: 3%;
	}
	#mini10 {
		top: 48%;
		left: 30%;
	}
	#mini11 {
		bottom: 7%;
		right: 11%;
	}
`;

const Section2 = styled.section`
	height: fit-content;
	scroll-snap-align: center;
`;

const Section3 = styled.section`
	height: 98vh;
	scroll-snap-align: end;
`;
