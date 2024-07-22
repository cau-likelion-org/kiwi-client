import { motion } from 'framer-motion';
import styled from 'styled-components';

export const Container = styled.div`
	height: 98vh;
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
`;

export const ImageWrapper = styled(motion.div)`
	position: relative;
	width: 4vw;
	margin-left: 4.5px;
	margin-right: 4.5px;
`;
export const ImagesWrapper = styled.div`
	position: absolute;
	display: flex;
	height: 100%;
`;
