import { useState } from "react";

function App() {
    const imageSize = 120; // 이미지 사이즈

    /* 관리해야 할 상태(state) 개수가 많으면 객체 형식으로 정의하는 것이 유리합니다. */
    const [car, setCar] = useState({
        color: 'blue',
        year: 2024,
        model: 'avante',
        image: 'avante',
        comment: '나름 좋아요.',
        modelName: '아반떼(avante)'
    });


    // 중첩 배열을 사용한 Map 객체 정의
    const carMap = new Map([
        ['avante', '아반떼'],
        ['sonata', '소나타'],
        ['grandeur', '그랜져'],
    ]);

    const ChangeTest = (event) => {
        const targetId = event.target.id;
        console.log('이벤트 발생 객체 id : ' + targetId);

        const targetValue = event.target.value;
        console.log('이벤트 타겟 값 : ' + targetValue);

        if (targetId === 'model') {
            // get(key) : key를 사용하여 해당 요소의 value를 반환 받습니다.
            const message = `${carMap.get(targetValue)}(${targetValue})`;
            setCar({ ...car, image: targetValue, model: targetValue, modelName: message });

        } else if (targetId === 'color') {
            /* 전개 연산자 ...car를 사용하여 color 이외의 모든 데이터를 보존합니다. */
            setCar({ ...car, color: targetValue });

        } else if (targetId === 'year') {
            let mycomment = '';
            if (targetValue === '2025') {
                mycomment = '신차입니다.';
            } else if (targetValue === '2024') {
                mycomment = '나름 좋아요.';
            } else if (targetValue === '2023') {
                mycomment = '구형차입니다.';
            } else {
            }
            setCar({ ...car, year: targetValue, comment: mycomment });
        } else {

        }
    }

    return (
        <div className="App">
            <h1>내 차 정보</h1>
            <p>
                자동차의 종류에 따라서, 이미지 변경이 되고 색상은 설명 문구의 색상으로 변경이 됩니다.
            </p>

            {/* entity는 html에서 특수 문자를 표현하는 기법으로, 규칙을 정해 놓은 문자열이 있습니다. */}
            차종 변경 : &nbsp;
            <select id="model" value={car.model} onChange={ChangeTest} >
                <option value="avante">아반떼</option>
                <option value="sonata">소나타</option>
                <option value="grandeur">그랜져</option>
            </select>
            <br /><br />

            색상 변경 : &nbsp;
            <select id="color" value={car.color} onChange={ChangeTest} >
                <option value="yellow">노랑</option>
                <option value="blue">파랑</option>
                <option value="red">빨강</option>
                <option value="green">녹색</option>
            </select>
            <br /><br />

            생산 년도 : &nbsp;
            <select id="year" value={car.year} onChange={ChangeTest} >
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
            </select>
            <br /><br />

            <p>
                <span style={{ color: car.color, fontWeight: 'bolder' }}>{car.color}</span>
                색상의 {car.year} 년산 {car.modelName} 모델<br />
                <br />
                {car.comment}
            </p>
            <br /><br />

            <img src={`/images/${car.image}.png`} alt="" width={imageSize} height={imageSize} />
        </div>
    );
}

export default App;