function App() {
    // 사용자에게 요일 입력 받기
    const day = prompt("요일을 입력하세요 (mon, tue, wed, thu, fri, sat, sun):", "mon");

    let message;
    switch (day) {
        case "mon":
            message = "월요일: 새로운 한 주의 시작! 💪";
            break;
        case "tue":
            message = "화요일: 아직 갈 길이 멀어요 😅";
            break;
        case "wed":
            message = "수요일: 벌써 수요일! 주중의 중심입니다 🔥";
            break;
        case "thu":
            message = "목요일: 주말이 가까워지고 있어요 🙌";
            break;
        case "fri":
            message = "금요일: 불금! 즐길 준비하세요 🎉";
            break;
        case "sat":
            message = "토요일: 쉬는 날! 푹 쉬세요 🛌";
            break;
        case "sun":
            message = "일요일: 내일은 월요일... 준비하세요 😭";
            break;
        default:
            message = "잘못 입력했습니다. (mon, tue, wed, thu, fri, sat, sun 중 하나)";
    }

    return (
        <div>
            <h2>switch 문 예시</h2>
            <h3>입력한 요일</h3>
            <p>{day}</p>

            <h3>오늘의 메시지</h3>
            <p>{message}</p>
        </div>
    );
}

export default App;
