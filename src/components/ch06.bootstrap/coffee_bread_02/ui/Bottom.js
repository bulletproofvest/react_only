import { ButtonGroup, Button } from "react-bootstrap";

function App({ message }) {

    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button variant="secondary">생성</Button>
                <Button variant="secondary">수정</Button>
                <Button variant="secondary">삭제</Button>
                <Button variant="secondary">카테고리 추가</Button>
            </ButtonGroup>
            <br />
            {message}
        </>
    );
}

export default App;