import { Table } from "react-bootstrap";


function App({ products }) {

    return (
        <div>
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td>
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td>아이디</td>
                                        <td>{products.id}</td>
                                    </tr>
                                    <tr>
                                        <td>이름</td>
                                        <td>{products.name}</td>
                                    </tr>
                                    <tr>
                                        <td>단가</td>
                                        <td>{Number(products.price).toLocaleString()} 원</td>
                                    </tr>
                                    <tr>
                                        <td>카테고리</td>
                                        <td>{products.category === 'bread' ? '빵' : '음료'}</td>
                                    </tr>
                                    <tr>
                                        <td>재고</td>
                                        <td>{Number(products.stock).toLocaleString()}</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                        <td><img src={`/images/${products.image}`} alt="" /></td>
                        <td>
                            <p>{products.description}</p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default App;