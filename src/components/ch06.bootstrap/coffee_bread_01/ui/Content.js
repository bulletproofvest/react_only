import { Table } from "react-bootstrap";

function App({ contents }) {
    const productList = () => {
        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr key={index}>
                        <td align="center">{item.name}</td>
                        <td align="right">{Number(item.price).toLocaleString()} 원</td>
                        <td align="center">{item.category === 'bread' ? '빵' : '음료수'}</td>
                    </tr>
                ))}
            </tbody>
        );
    }
    return (
        <>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                {productList()}
            </Table>
        </>
    );
}

export default App;