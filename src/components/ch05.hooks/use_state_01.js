import { useState } from "react";

function App() {
    const [color, setColor] = useState('red');
    const [name, setName] = useState('카푸치노');
    const [image, setImage] = useState('cappuccino01.png');

    const ClickEvent = () => {
        console.log(`현재 색상 : ${color}`);

        if (color === 'red') {
            setColor('blue');
            setName('크루아상');
            setImage('croissant_03.png');
        } else {
            setColor('red');
            setName('카푸치노');
            setImage('cappuccino01.png');
        }
    }




    return (
        <div className="App">
            <h1>My favoriter color is {color}!</h1>

            <span style={{ color: color, fontWeight: 'bold' }}>글자 색상</span>
            <br /><br />
            <button type="button" onClick={ClickEvent}>
                클릭시 이미지 변경 및 {color} 색상으로 변경
            </button>
            <br /><br />
            <h4>{name}</h4>
            <img src={`/images/${image}`} alt={name} width="210" height="210" />
        </div>
    );
}

export default App;