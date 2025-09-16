function App() {
    // 사용자에게 점수 입력 받기 (문자열 → 숫자 변환)
    const score = Number(prompt("점수를 입력하세요 (0~100):", "82"));

    // 양자 택일: 합격 / 불합격
    const passOrFail = score >= 60 ? "합격 🎉" : "불합격 ❌";

    // 다중 택일: 점수에 따른 등급
    let grade;
    if (score >= 90) {
        grade = "A 등급 🏆";
    } else if (score >= 80) {
        grade = "B 등급 👍";
    } else if (score >= 70) {
        grade = "C 등급 🙂";
    } else if (score >= 60) {
        grade = "D 등급 😅";
    } else {
        grade = "F 등급 😭";
    }

    return (
        <div>
            <h2>양자 택일 & 다중 택일 예시</h2>

            <h3>현재 점수</h3>
            <p>{score} 점</p>

            <h3>양자 택일 (삼항 연산자)</h3>
            <p>{passOrFail}</p>

            <h3>다중 택일 (if / else if / else)</h3>
            <p>{grade}</p>
        </div>
    );
}

export default App;
