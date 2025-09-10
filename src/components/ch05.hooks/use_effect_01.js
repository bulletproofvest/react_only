import { useEffect, useState } from "react";

function App() {

    const imageSize = 100;
    const imagePath = '/images';
    const interval = 1000;

    const [count, setCount] = useState(0);
    const [image, setImage] = useState(`${imagePath}/americano01.png`);

    const imageArray = [
        'americano01.png',
        'juice01.png',
        'french_baguette_03.png',
        'croissant_03.png',
    ];

    const SomeAction = () => {
        setCount((count) => count + 1)
        const randomIdx = Math.floor(imageArray.length * Math.random());
        const randomImage = imageArray[randomIdx];
        setImage(`${imagePath}/${randomImage}`);
    }

    const MyTimer = () => {
        // setTimeout(SomeAction, interval);
        const timerId = setTimeout(SomeAction, interval);

        setTimeout(() => {
            clearTimeout(timerId);
            console.log(`타이머 종료(5초 경과)`)
        }, 5000);
    }

    useEffect(MyTimer);

    return (
        <>
            <h1>카운터 : {count}</h1>
            <div>
                <img src={image} alt="이미지 대안" width={imageSize} height={imageSize} />
            </div>
        </>
    );
}

export default App;