import { Button, Form, InputGroup } from "react-bootstrap";

import './../css/FormStyle.css';
import { useState } from "react";

/*
등록 화면과의 차이점
1. 코멘트 : 등록 → 수정
2. 수정할 상품 정보가 props로 넘어 와야 합니다.
3. 각 입력 양식에 이전에 기입했던 정보를 미리 넣어 주어야 합니다.
    일반 양식은 value 속성에 명시하면 됩니다.
    콤보 박스는 selected 속성에 명시하면 됩니다.
    라디오 버튼이나 체크 박스는 checked 속성에 명시하면 됩니다.
4. id 항목은 사용자에게 보여 주되, 읽기 전용으로 처리하면 됩니다.  
    가짜는 읽기 전용, 진짜 정보는 type="hidden"으로 처리합니다.
*/
function App({ product, onSubmitUpdate, categories }) {
    // 코드에서 반복적인 단어는 변수로 만들어 JSX 문법으로 처리하세요.
    const comment = '수정';

    // 넘겨진 이전 상품 정보를 관리해야 하므로, state로 값을 할당합니다. 
    const [formData, setFormData] = useState(product);

    /* 개발자가 전송 버튼을 눌러서, 전송 이벤트에 의하여 이 함수가 동작합니다. */
    const SumittedData = (event) => {
        event.preventDefault(); // 이벤트 전파 방지
        onSubmitUpdate(formData);
    }

    /* 이 함수(event handler)는 입력 양식의 값이 변경될 때 마다 호출이 됩니다. */
    const InputChange = (event) => {
        const { name, value } = event.target;
        console.log(`파라미터 이름 : ${name}, 새로운 값 : ${value}`);

        /* 전개 연산자를 사용하여 과거 데이터를 보존하되, 신규 바뀐 정보만 다시 갱신하기 */
        /* previous 변수는 리액트가 자동으로 넣어 주는 값으로, 이름은 개발자 마음대로 지정하면 됩니다. */
        //setFormData((previous) => ({ ...previous, [name]: value }));
        setFormData((previous) => {
            const updated = { ...previous, [name]: value };
            console.log("갱신된 값:", updated);
            return updated;
        });
    }

    // 이전에 선택한 카테고리 정보와 해당 카테고리의 영문 이름(item.english)과 일치하면 선택이 되도록 해줘야 합니다.
    const categoryOptions = categories.map((cate, index) =>
        <option key={index} value={cate.english} selected={formData.category === cate.english}>
            {cate.korean}
        </option>
    );

    return (
        <div>
            <h2>상품 {comment}</h2>
            <form action="#" onSubmit={SumittedData} >
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">아이디</InputGroup.Text>

                    <input name="id" type="hidden" onChange={InputChange} value={formData.id} />

                    <Form.Control type="text" name="fakeid" onChange={InputChange} value={formData.id} disabled />
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이름</InputGroup.Text>
                    <Form.Control type="text" name="name" onChange={InputChange} value={formData.name} />
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">가격</InputGroup.Text>
                    <Form.Control type="text" name="price" onChange={InputChange} value={formData.price} />
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">카테고리</InputGroup.Text>
                    <Form.Select name="category" onChange={InputChange}>
                        <option value="-">-- 카테고리를 선택해 주세요.</option>
                        {categoryOptions}
                    </Form.Select>
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">재고</InputGroup.Text>
                    <Form.Control type="text" name="stock" onChange={InputChange} value={formData.stock} />
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">이미지</InputGroup.Text>
                    <Form.Control type="text" name="image" onChange={InputChange} value={formData.image} />
                </InputGroup>
                <InputGroup className="custom-input-group">
                    <InputGroup.Text className="input-group-text">세부 설명</InputGroup.Text>
                    <Form.Control as="textarea" name="description" onChange={InputChange} value={formData.description} />
                </InputGroup>
                <div className="d-grid gap-2">
                    <Button variant="primary" type="submit">{comment}</Button>
                </div>
            </form>
        </div>
    );
}

export default App;