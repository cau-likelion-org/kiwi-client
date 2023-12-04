import React from 'react'

interface LinkBoxProps {
  width?: string;
  height?: string;
  text: string;
}

const LinkBox: React.FC<LinkBoxProps> = ({ width = "51", height = "34", text }) => (
  text=="역링크"?
  <svg xmlns="http://www.w3.org/2000/svg" width="61" height="34" viewBox="0 0 61 34" fill="none">
    <rect x="0.5" y="0.5" width="60" height="33" rx="9.5" fill="white" stroke="black"/>
    <text x="50%" y="50%" textAnchor="middle" fill="black" fontSize="1rem" dy=".3em">{text}</text>
  </svg>
  :
  <svg xmlns="http://www.w3.org/2000/svg" width={width} height={height} viewBox="0 0 51 34" fill="none">
    <rect x="0.5" y="0.5" width="50" height="33" rx="9.5" fill="white" stroke="black"/>
    <text x="50%" y="50%" textAnchor="middle" fill="black" fontSize="1rem" dy=".3em">{text}</text>
  </svg>

);

export default LinkBox;
