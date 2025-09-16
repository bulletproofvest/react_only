import { Dropdown, ListGroup, Table } from "react-bootstrap";

function App({ contents, onClickToContent, categories, onOrderByClick, orderInfo }) {

    /* 테이블 특정 행(row)의 셀(cell) 1개를 클릭했습니다. */
    const ClickItem = (event) => {
        /* 선택한 항목의 부모 요소의 id를 읽어서 할당합니다. */
        const itemId = event.target.parentNode.id; // 상품 아이디
        console.log(`선택된 상품 id : ${itemId}`);

        onClickToContent(itemId); /* 상위 컴포넌트에 해당 id를 넘겨 줍니다. */
    }

    const ProductList = () => {
        return (
            <tbody>
                {contents.map((item, index) => {
                    /* find 함수를 사용하여 매칭 되는 카테고리를 찾습니다. */
                    const match = categories.find((cate) => {
                        //console.log(`cate.english : ${cate.english}, item.category : ${item.category}`);
                        return cate.english === item.category;
                    });

                    return (
                        <tr id={item.id} key={index}>
                            <td align="center" onClick={ClickItem}>{item.name}</td>

                            {/* 숫자 형식으로 바꾼 다음, 3자리 마다 콤마 유형을 추가합니다. */}
                            <td align="right" onClick={ClickItem}>{Number(item.price).toLocaleString()} 원</td>

                            {/* match가 의미 있는 데이터이면 "한글"을, 아니면 "원래 값"을 표시함 */}
                            <td align="center" onClick={ClickItem}>
                                {match ? match.korean : item.category}
                            </td>
                        </tr>
                    );
                })}
            </tbody>
        );
    };

    /* 사용자가 드롭 다운 버튼을 클릭했습니다. 상위 컴포넌트에게 정렬 방식을 알려 주는 함수입니다. */
    const ClickButtonGroup = (event) => {
        event.preventDefault(); // 이벤트 전파 동작 방지
        const target_id = event.target.id; // 이벤트 동작을 일으킨 요소의 unique한 id 정보

        // orderColumnList : 정렬할 컬럼 정보와 관련 있는 배열
        const orderColumnList = ['name', 'price', 'category'];

        // 클릭한 항목의 id가 orderColumnList 배열에 포함이 되어 있으면 true를 반환해 줍니다.
        const isColumn = orderColumnList.includes(target_id);

        // 넘어온 onOrderByClick 프롭스에 '정렬할 컬럼', '정렬 방식'을 각각 전송해 줍니다.        
        if (isColumn) { // '정렬할 컬럼' 선택
            onOrderByClick(target_id, orderInfo.ordering);

        } else { // '정렬 방식' 선택
            onOrderByClick(orderInfo.column, target_id);
        }
    }

    // 여러 곳에서 사용되는 문구는 상수(constant) 형태로 작성하여 재활용하면 편리합니다.
    const OrderColum = '정렬할 컬럼';
    const OrderType = '정렬 방식';

    return (
        <>
            <Table>
                <tbody>
                    <tr>
                        {/* width를 10% 설정한 이유는 Dropdown 항목들이 붙어 있는 것처럼 설정하기 위하여 코딩함  */}
                        <td width="10%" valign="middle">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderColum}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성으로 어떠한 항목이 클릭되었는 지를 파악합니다. */}
                                    {/* 일반적으로 id 속성의 값은 영문 컬럼으로 명명하는 것이 코딩하기에 편리합니다. */}
                                    <Dropdown.Item id="name" onClick={ClickButtonGroup}>이름</Dropdown.Item>
                                    <Dropdown.Item id="price" onClick={ClickButtonGroup}>가격</Dropdown.Item>
                                    <Dropdown.Item id="category" onClick={ClickButtonGroup}>카테고리</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign="middle">
                            <Dropdown>
                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                    {OrderType}
                                </Dropdown.Toggle>

                                <Dropdown.Menu>
                                    {/* id 속성의 이름은 데이터 베이스 정렬과 관련된 용어를 사용했습니다.  */}
                                    <Dropdown.Item id="asc" onClick={ClickButtonGroup}>오름차순</Dropdown.Item>
                                    <Dropdown.Item id="desc" onClick={ClickButtonGroup}>내림차순</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </td>
                        <td valign="middle">
                            <ListGroup horizontal>
                                <ListGroup.Item>{OrderColum} : {orderInfo.column}</ListGroup.Item>
                                <ListGroup.Item>{OrderType} : {orderInfo.ordering}</ListGroup.Item>
                            </ListGroup>
                        </td>
                    </tr>
                </tbody>
            </Table>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>가격</th>
                        <th>카테고리</th>
                    </tr>
                </thead>
                {/* 화살표 함수를 사용하여 상품 목록을 만들어 줍니다. */}
                {ProductList()}
            </Table>
        </>
    );
}

export default App;