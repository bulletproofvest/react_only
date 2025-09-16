function App(){
    console.log('샘플');
    
    return(
		<body>
			<h2>표 만들기</h2>
			<table border="1" cellpadding="6" cellspacing="0">
				<thead>
					<tr>
						<th>아이디</th>
						<th>이름</th>
						<th>단가</th>
						<th>코멘트</th>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>1</td>
						<td>아메리카노</td>
						<td>5,000원</td>
						<td>기본</td>
					</tr>
					<tr>
						<td>2</td>
						<td>카푸치노</td>
						<td>6,000원</td>
						<td>우유 거품</td>
					</tr>
					<tr>
						<td>3</td>
						<td>카페 모카</td>
						<td>7,000원</td>
						<td>초콜릿</td>
					</tr>
				</tbody>
			</table>
		</body>
    );     
}

export default App ;