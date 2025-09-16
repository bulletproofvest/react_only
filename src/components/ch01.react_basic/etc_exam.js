function App() {
  console.log('샘플');

  return (
    <div className="App">
      {/* 제목 */}
      <h1>제목 H1</h1>
      <h2>제목 H2</h2>
      <h3>제목 H3</h3>
      <hr />

      {/* 단락 */}
      <p>
        안녕하세요! <strong>강조 텍스트</strong>를 포함한 단락 예제입니다.
      </p>
      <p>
        두 번째 단락입니다. <br />
        줄바꿈을 포함했습니다.
      </p>

      {/* 구분선 */}
      <hr />

      {/* 블록과 인라인 요소 */}
      <div>
        <p>이것은 div 안에 있는 단락입니다.</p>
        <p>여러 단락을 묶어서 블록 구조를 만들 수 있습니다.</p>
      </div>

      {/* 추가 강조 */}
      <p>
        중요한 내용은 <strong>강조</strong>하세요.
      </p>
    </div>
  );
}

export default App;
