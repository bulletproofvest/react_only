import { Button, Form, InputGroup } from "react-bootstrap";

import './../css/FormStyle.css';

function App({ onSubmitCategoryAdd }) {
    const comment = '추가';

    const SumittedData = (event) => {
        event.preventDefault(); // 이벤트 전파 방지
        const formData = event.target; // 전송된 폼 양식 객체 정보
        onSubmitCategoryAdd(formData);
    }

    return (
        <div>
            <h2>카테고리 {comment}</h2>
            <form action="#" onSubmit={SumittedData} >
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">영문 이름</InputGroup.Text>
                    <Form.Control type="text" name="english"></Form.Control>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">한글 이름</InputGroup.Text>
                    <Form.Control type="text" name="korean"></Form.Control>
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">{comment}</Button>
                </div>
            </form>
        </div>
    );
}

export default App;