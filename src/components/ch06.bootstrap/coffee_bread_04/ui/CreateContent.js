import { Button, Form, InputGroup } from "react-bootstrap";

import './../css/FormStyle.css';

function App({ onSubmitInsert }) {
    // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법으로 처리하세요.
    const comment = '등록';

    /* 개발자가 전송 버튼을 눌러서, 전송 이벤트에 의하여 이 함수가 동작합니다. */
    const SumittedData = (event) => {
        event.preventDefault(); // 이벤트 전파 방지
        const formData = event.target; // 전송된 폼 양식 객체 정보
        onSubmitInsert(formData);
    }

    return (
        <div>
            <h2>상품 {comment}</h2>
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
                        <option value="-">-- 카테고리를 선택해 주세요.</option>
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
                    <InputGroup.Text className="input-group-text">세부 설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">{comment}</Button>
                </div>
            </form>
        </div>
    );
}

export default App;