'use client';

import * as S from './SearchHeaderSection.styled';

const SearchHeaderSection = () => {
	return (
		<S.SearchHeaderWrapper>
			<S.HeartImageWrapper>
				<S.StyledImage src="/img/heart.svg" alt="heart_image" fill priority />
			</S.HeartImageWrapper>
		</S.SearchHeaderWrapper>
	);
};

export default SearchHeaderSection;
