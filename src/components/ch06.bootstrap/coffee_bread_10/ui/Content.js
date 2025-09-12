import { Table } from "react-bootstrap";


function App({ contents, onClickToContent }) {

    const ClickItem = (event) => {
        const itemId = event.target.parentNode.id;
        onClickToContent(itemId);
    }

    const ProductList = () => {
        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr id={item.id} key={index}>
                        <td onClick={ClickItem}>{item.name}</td>
                        <td onClick={ClickItem}>{Number(item.price).toLocaleString()}</td>
                        <td onClick={ClickItem}>{item.category === 'bread' ? '빵' : '음료수'}</td>
                    </tr>
                ))}
            </tbody>
        );
    }

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>가격</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            {ProductList()}
        </Table>
    );
}

export default App;