import { Table } from "react-bootstrap";

import './../css/Display.css';

function App({ product }) {
    // product는 개발자 선택한 상품에 대한 정보
    return (
        <div className="mytable">
            <Table striped bordered hover>
                <tbody>
                    <tr>
                        <td align="center" width="40%">
                            <Table striped bordered hover>
                                <tbody>
                                    <tr>
                                        <td className="myleft">아이디</td>
                                        <td className="mymiddle">{product.id}</td>
                                    </tr>
                                    <tr>
                                        <td>이름</td>
                                        <td>{product.name}</td>
                                    </tr>
                                    <tr>
                                        <td>단가</td>
                                        <td>{Number(product.price).toLocaleString()} 원</td>
                                    </tr>
                                    <tr>
                                        <td>카테고리</td>
                                        <td>{product.category === 'bread' ? '빵' : '음료수'}</td>
                                    </tr>
                                    <tr>
                                        <td>재고</td>
                                        <td>{Number(product.stock).toLocaleString()} 개</td>
                                    </tr>
                                </tbody>
                            </Table>
                        </td>
                        <td>
                            <img className="myimage" src={`/images/${product.image}`} alt={product.name} />
                        </td>
                        <td>
                            <p className="mydescription">
                                {product.description}
                            </p>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
    );
}

export default App;