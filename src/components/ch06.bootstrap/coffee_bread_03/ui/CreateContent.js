import { Button, Form, InputGroup } from "react-bootstrap";

import './../css/FormStyle.css';

function App({ onSubmitInsert }) {
    const SumittedData = (event) => {
        event.preventDefault();
        const formData = event.target;
        onSubmitInsert(formData);
    }

    console.log('샘플');

    return (
        <div>
            <h2>상품 등록</h2>
            <form action="#" onSubmit={SumittedData} >
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name="category">
                        <option value="-">-- 카테고리를 선택해주세요 --</option>
                        <option value="bread">빵</option>
                        <option value="beverage">음료수</option>
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">세부설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">등록</Button>
                </div>
            </form>
        </div>
    );
}

export default App;