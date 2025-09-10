import { Table } from "react-bootstrap";

function App({ contents, onClickToContent }) {

    // 테이블 특정 행의 셀 1개 클릭
    const ClickItem = (event) => {
        /* 선택한 항목의 부모 요소의 id를 읽어서 할당 */
        const itemId = event.target.parentNode.id;
        console.log(`선택됨 상품 id : ${itemId}`);

        onClickToContent(itemId); // id 넘기기
    }

    const productList = () => {
        return (
            <tbody>
                {contents.map((item, index) => (
                    <tr id={item.id} key={index}>
                        <td align="center" onClick={ClickItem}>{item.name}</td>
                        <td align="right" onClick={ClickItem}>{Number(item.price).toLocaleString()} 원</td>
                        <td align="center" onClick={ClickItem}>{item.category === 'bread' ? '빵' : '음료수'}</td>
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