'use client';

import React from 'react';
import { RecentDocs } from '@/types/request';
import { useRouter } from 'next/navigation';
import { useMediaQuery } from 'react-responsive';
import * as S from './landing.styled/LandingSection2.styled';

const LandingSection2 = ({ data }: { data: RecentDocs[] | undefined }) => {
	const isMobile = useMediaQuery({ query: '(max-width: 540px)' });
	const router = useRouter();
	function formatDate(update: string) {
		const date = update.split('T')[0];
		const formattedDate = date.split('-').join('.');
		return formattedDate;
	}
	const handleClick = (title: string) => {
		let encodedTitle = encodeURIComponent(title);
		router.push(`/viewer?title=${encodedTitle}`);
	}; // 현재는 하드코딩으로 기수 넣어놨는데, 나중에는 말풍선에 있는 텍스트를 잘라서 자동으로 이동하도록 변경해보기!

	return (
		<S.ImageWrapper>
			<S.Title>
				<div className="overlay">{'> 최근 편집 목록 <'}</div>
				<S.StyledImage3 src="/img/list.png" alt="닉네임 박스 이미지" fill priority />
			</S.Title>
			<S.Box>
				<S.Content>
					{data &&
						data.map((result, idx) => (
							<>
								<div className="list" key={idx} onClick={() => handleClick(result.title)}>
									<div>{result.title}</div>
									<div>{formatDate(result.updated_at)}</div>
								</div>
							</>
						))}
				</S.Content>
				<S.StyledImage2 src="/img/recent.png" alt="닉네임 박스 이미지" fill priority />
			</S.Box>
			<S.ShortCutWrapper>
				<S.ShortCuts1 onClick={() => handleClick('11기')}>
					<div className="overlay">{'11기 문서 바로가기'}</div>
					<S.StyledImage src="/img/shortCut1.png" alt="말풍선" fill priority />
				</S.ShortCuts1>
				<S.ShortCuts2 onClick={() => handleClick('12기')}>
					<div className="overlay">{'12기 문서 바로가기'}</div>
					<S.StyledImage src="/img/shortCut2.png" alt="말풍선" fill priority />
				</S.ShortCuts2>
			</S.ShortCutWrapper>
			{isMobile ? (
				<S.LionWrapper>
					<S.StyledImage src="/img/lionking.png" alt="사자들" fill priority />
				</S.LionWrapper>
			) : (
				<S.LionWrapper>
					<S.Lions>
						<S.StyledImage src="/img/landingblue.png" alt="파랑 사자" fill priority />
						<S.StyledImage src="/img/landinggreen.png" alt="초록 사자" fill priority />
					</S.Lions>
					<S.Lions>
						<S.StyledImage src="/img/landingorange.png" alt="주황 사자" fill priority />
						<S.StyledImage src="/img/landingred.png" alt="빨강 사자" fill priority />
					</S.Lions>
				</S.LionWrapper>
			)}
		</S.ImageWrapper>
	);
};

export default LandingSection2;
