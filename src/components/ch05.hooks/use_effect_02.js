import { useEffect, useState } from "react";

function App() {

    const imageSize = 300;
    const imagePath = '/images';

    const [count, setCount] = useState(0);
    const [twoTimes, setTwoTimes] = useState(0);
    const [another, setAnother] = useState(0);


    const TodoSomething = () => {
        console.log('카운트 변수 값 : ' + count);
        setTwoTimes(() => 2 * count);
        setAnother(() => 3 * count + 1);

        console.log('현재 이미지의 색인 번호 : ' + imageIdx);
        const currentImage = `${imagePath}/${imageArray[imageIdx]}`;
        setImage(currentImage);
        setImageIdx(imageIdx + 1);

        if (imageIdx === (imageArray.length - 1)) {
            setImageIdx(0);
        }
    }

    useEffect(TodoSomething, [count]);

    const [image, setImage] = useState(`${imagePath}/americano01.png`);
    const [imageIdx, setImageIdx] = useState(0);

    const imageArray = [
        'americano01.png',
        'juice01.png',
        'french_baguette_03.png',
        'croissant_03.png',
    ];


    return (
        <div className="App">
            <table style={{ border: '1px solid black' }}>
                <tbody>
                    <tr>
                        <td style={{ border: '1px solid black' }}>카운터</td>
                        <td style={{ border: '1px solid black' }}>{count}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>2 곱하기</td>
                        <td style={{ border: '1px solid black' }}>{twoTimes}</td>
                    </tr>
                    <tr>
                        <td style={{ border: '1px solid black' }}>3곱하기 더하기 1</td>
                        <td style={{ border: '1px solid black' }}>{another}</td>
                    </tr>
                </tbody>
            </table>
            <hr />
            <button onClick={() => { setCount((count) => count + 1) }}>
                &nbsp;카운트 값1 더하기&nbsp;
            </button>
            <div>
                <img src={image} alt="대안 이미지" width={imageSize} height={imageSize} />
            </div>
        </div>
    );
}

export default App;