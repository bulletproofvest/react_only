function App() {
    // 예시 숫자들
    const numbers = [3, 7, 1, 9, 4];

    const su = 7.8;

    // Math 메서드 활용
    const maxValue = Math.max(...numbers); // 배열에서 최댓값
    const sqrtValue = Math.sqrt(16); // 제곱근
    const randomValue = Math.random(); // 0 ~ 1 사이 난수
    const floorValue = Math.floor(su); // 내림

    return (
        <div>
            <h2>Math 객체 메서드 예시</h2>

            <h3>원본 숫자 배열</h3>
            <p>{numbers.join(", ")}</p>

            <h3>Math.max (최댓값)</h3>
            <p>최댓값: {maxValue}</p>

            <h3>Math.sqrt (제곱근)</h3>
            <p>16의 제곱근: {sqrtValue}</p>

            <h3>Math.random (난수)</h3>
            <p>0 ~ 1 사이의 랜덤 값: {randomValue}</p>

            <h3>Math.floor (내림)</h3>
            <p>{su} → {floorValue}</p>
        </div>
    );
}

export default App;
