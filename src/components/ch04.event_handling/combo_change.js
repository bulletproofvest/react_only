import React, { useState } from "react";

function App() {
    const [selectMenu, setSelectedMenu] = useState('-');
    const [selectedImage, setSelectedImage] = useState(null);
    const image_path = '/images';

    const MouseClickEvent = (list) => {
        setSelectedImage(list.image);
    }

    const eventChange = (event) => {
        const target_value = event.target.value;

        if (target_value === "-") {
            alert('항목을 선택하셔야 대요~');
            setSelectedMenu('-');
        } else {
            setSelectedMenu(target_value);
        }

    }

    const userList = (value) => {
        let list = [];

        if (value === "drink") {
            list = drinkList;
            return (
                <ol>
                    {list.map((list, index) => (
                        <li key={index} onClick={() => MouseClickEvent(list)}>{list.name}</li>
                    ))}
                </ol>
            );
        } else if (value === "bread") {
            list = breadList;
            return (
                <ul>
                    {list.map((list, index) => (
                        <li key={index} onClick={() => MouseClickEvent(list)}>{list.name}</li>
                    ))}
                </ul>
            );
        }
    }

    const drinkList = [
        { name: "아메리카노", image: "/americano01.png" },
        { name: "바닐라라떼", image: "/vanilla_latte_01.png" },
        { name: "카푸치노", image: "/cappuccino01.png" },
        { name: "주스", image: "/juice01.png" },
    ]

    const breadList = [
        { name: "프렌치 바게트", image: "/french_baguette_03.png" },
        { name: "크루아상", image: "/french_baguette_03.png" },
        { name: "치아바타", image: "/french_baguette_03.png" },
        { name: "브리오슈", image: "/french_baguette_03.png" }
    ]



    return (
        <div className="App">
            <h2>Combo 이벤트</h2>
            <select id="menu" onChange={eventChange}>
                <option value="-">항목을 선택해주세요</option>
                <option value="drink">음료</option>
                <option value="bread">빵</option>
            </select>
            <br />
            <div>
                <table>
                    <tbody>
                        <tr>
                            <td className="my-table">
                                {userList(selectMenu)}
                            </td>
                            <td>
                                {selectedImage && <img src={image_path + selectedImage} alt="" className="my-image" />}
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div >
    );
}

export default App;