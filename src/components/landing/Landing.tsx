'use client';

import { useEffect, useState } from 'react';
import LandingSection1 from './LandingSection1';
import LandingSection2 from './LandingSection2';
import LandingSection3 from './LandingSection3';
import { styled } from 'styled-components';
import Image from 'next/image';
import { RecentDocs } from '@/types/request';
import { useGetRecent } from '@/hooks/useGetRecent';
import * as S from './landing.styled/Landing.styled';

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
		<S.ScrollContainer>
			<S.Section1>
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
			</S.Section1>
			<S.Section2>
				<LandingSection2 data={docs} />
			</S.Section2>
			<S.Section3>
				<LandingSection3 />
			</S.Section3>
		</S.ScrollContainer>
	);
};

export default Landing;
