import { ButtonGroup, Button } from "react-bootstrap";

function App({ message, onClickToBottom }) {
    const ClickMenu = (event) => {
        const targetId = event.target.id;
        onClickToBottom(targetId);
    }

    return (
        <>
            <ButtonGroup aria-label="Basic example">
                <Button id="get_insert" variant="secondary" onClick={ClickMenu}>생성</Button>
                <Button id="get_update" variant="secondary" onClick={ClickMenu}>수정</Button>
                <Button id="get_delete" variant="secondary" onClick={ClickMenu}>삭제</Button>
                <Button id="get_catefory_add" variant="secondary" onClick={ClickMenu}>카테고리 추가</Button>
            </ButtonGroup>
            <br />
            {message}
        </>
    );
}

export default App;