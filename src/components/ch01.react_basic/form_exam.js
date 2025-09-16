function App() {
  console.log('샘플');

  return (
    <div className="App">
      <h2>회원 가입 양식</h2>

      <form action="/submit" method="post">
        {/* 이름 입력 */}
        <label htmlFor="username">이름: </label>
        <input type="text" id="username" name="username" />
        <br /><br />

        {/* 이메일 입력 */}
        <label htmlFor="email">이메일: </label>
        <input type="email" id="email" name="email" />
        <br /><br />

        {/* 비밀번호 입력 */}
        <label htmlFor="password">비밀번호: </label>
        <input type="password" id="password" name="password" />
        <br /><br />

        {/* 성별 선택 */}
        <label>성별: </label>
        <input type="radio" id="male" name="gender" value="male" />
        <label htmlFor="male">남성</label>
        <input type="radio" id="female" name="gender" value="female" />
        <label htmlFor="female">여성</label>
        <br /><br />

        {/* 취미 체크박스 */}
        <label>취미: </label>
        <input type="checkbox" id="hobby1" name="hobby" value="reading" />
        <label htmlFor="hobby1">독서</label>
        <input type="checkbox" id="hobby2" name="hobby" value="travel" />
        <label htmlFor="hobby2">여행</label>
        <br /><br />

        {/* 콤보 박스 추가 */}
        <label htmlFor="country">국가 선택: </label>
        <select id="country" name="country">
          <option value="">선택하세요</option>
          <option value="korea">대한민국</option>
          <option value="usa">미국</option>
          <option value="japan">일본</option>
          <option value="china">중국</option>
        </select>
        <br /><br />

        {/* 제출 버튼 */}
        <button type="submit">제출</button>
      </form>
    </div>
  );
}

export default App;
