// import { ChangeEvent, FC, useState } from 'react';
// import { styled } from 'styled-components';

// const data: string[] = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry']; // 검색할 데이터

// const SearchBox: FC = () => {
// 	const [searchTerm, setSearchTerm] = useState<string>('');
// 	const [results, setResults] = useState<string[]>([]);

// 	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
// 		setSearchTerm(event.target.value);
// 		if (event.target.value.length > 0) {
// 			const results = data.filter((item) => item.toLowerCase().includes(event.target.value.toLowerCase()));
// 			setResults(results);
// 		} else {
// 			setResults([]);
// 		}
// 	};

// 	return (
// 		<div>
// 			<SearchInput type="text" placeholder="검색..." value={searchTerm} onChange={handleChange} />
// 			{results.length > 0 && (
// 				<ul>
// 					{results.map((result, index) => (
// 						<li key={index}>{result}</li>
// 					))}
// 				</ul>
// 			)}
// 		</div>
// 	);
// };

// export default SearchBox;

// const SearchInput = styled.input`
// 	width: 100%;
// 	height: 100%;
// 	margin-left: 12%;
// 	font-size: 22px;
// 	border: none;
// 	outline: none;
// `;
