import { useEffect, useState } from "react";

function App() {
    // 해당 사이트에서 다운 받은 정보를 저장할 비어있는 배열
    const [receivedData, setReceivedData] = useState([]);

    const GetUrlData = () => {
        const url = 'https://jsonplaceholder.typicode.com/photos';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                // console.log(data);
                setReceivedData(data);
            });
    }

    // 2번째 매개 변수가 []이므로, GetUrlData 함수는 1번만 호출
    useEffect(GetUrlData, []);

    const DataList = () => {
        const sliceArray = receivedData.slice(0, 10);

        const showData = sliceArray.map((item) =>
            <li key={item.id}>
                {item.title}(<a href={item.url}>{item.url}</a>)
            </li>
        );

        return <ol>{showData}</ol>;
    }

    return (
        <div className="App">
            <DataList />
        </div>
    );
}

export default App;