function App() {
    // 직접 실행해서 문자열 반환
    let resultMessage = "(이 영역은 JS에서 내용이 변경됩니다.)";
    const resultDiv = document.getElementById("result");
    if (resultDiv) {
        resultDiv.innerHTML = "<strong>이 영역은 getElementById()로 접근했습니다.</strong>";
    }

    // typeof 예시
    console.log("typeof 123 →", typeof 123); // number
    console.log("typeof 'hello' →", typeof "hello"); // string

    // Number 예시
    const strNumber = "123.45";
    console.log("Number(strNumber) →", Number(strNumber));
    console.log("parseInt(strNumber) →", parseInt(strNumber));
    console.log("parseFloat(strNumber) →", parseFloat(strNumber));

    return (
        <div>
            <h2>document 객체 & typeof & Number 예시</h2>

            <h3>document.getElementById()로 접근한 결과</h3>
            <div id="result" style={{ color: "blue", fontWeight: "bold" }}>
                {resultMessage}
            </div>

            <h3>typeof 연산자</h3>
            <p>console.log에서 자료형 확인 가능</p>

            <h3>Number 객체</h3>
            <p>문자열 "123.45" → Number(), parseInt(), parseFloat() 결과를 console에서 확인</p>
        </div>
    );
}

export default App;
