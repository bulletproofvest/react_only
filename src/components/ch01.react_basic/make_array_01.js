function App() {
  // 원본 배열
  const fruits = ["사과", "바나나", "체리", "포도", "키위"];
  const moreFruits = ["수박", "딸기"];

  // slice: 인덱스 1부터 3 전까지 추출 (바나나, 체리)
  const sliced = fruits.slice(1, 3);

  // concat: 두 배열 합치기
  const combined = fruits.concat(moreFruits);

  // filter: 이름 길이가 2글자인 것만 추출
  const filtered = combined.filter((item) => item.length === 2);

  return (
    <div>
      <h2>배열 메서드 예시</h2>

      <h3>원본 과일 배열</h3>
      <p>{fruits.join(", ")}</p>

      <h3>slice 예시 (인덱스 1~3 전까지)</h3>
      <p>{sliced.join(", ")}</p>

      <h3>concat 예시 (추가 과일과 합침)</h3>
      <p>{combined.join(", ")}</p>

      <h3>filter 예시 (2글자 과일만 필터링)</h3>
      <p>{filtered.join(", ")}</p>
    </div>
  );
}

export default App;
