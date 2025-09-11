import { useState } from 'react';

// 부트 스트랩 관련 임포트
import { Card } from 'react-bootstrap';

// 하위 컴포넌트 추가하기
import Top from './ui/Top';
import Content from './ui/Content';
import Bottom from './ui/Bottom';
import Switcher from './ui/Switcher';

function App() {
    const title = 'React 맛집';
    const comment = '어서 오세요~~맛있는 빵과 음료수가 많이 있습니다.';
    const message = '카운터에서 주문해 주시고, 즐거운 시간 되시길 바랍니다.';

    // 신규 상품을 추가해야 함으로 setProducts가 이제 필요합니다.
    const [products, setProducts] = useState([
        { id: 1, name: "프렌치 바게트", price: 1000, category: 'bread', stock: 111, image: 'french_baguette_01.png', description: "프랑스의 대표적인 빵 중 하나로, 길쭉하고 얇은 형태의 식빵입니다. 바삭하면서도 촉촉한 식감과 진한 맛이 특징입니다." },
        { id: 2, name: "크로와상", price: 2000, category: 'bread', stock: 222, image: 'croissant_02.png', description: "프랑스의 대표적인 베이커리 중 하나로, 층층이 쌓인 반죽에 버터를 추가하여 구워낸 과자입니다." },
        { id: 3, name: "아메리카노", price: 3000, category: 'beverage', stock: 12345, image: 'americano01.png', description: "에스프레소의 쓴 맛과 향을 좋아하는 사람들이 물을 추가해서 즐기는 음료로, 물과 에스프레소의 비율에 따라서 쓴 맛과 진하게 즐길 수 있습니다." },
        { id: 4, name: "카푸치노", price: 4000, category: 'beverage', stock: 444, image: 'cappuccino01.png', description: "스팀밀크와 거품을 올린 것을 섞어 만든 이탈리아의 전통적인 커피 음료입니다." }
    ]);

    /* mode : 현재 상태의 모드 지정  */
    /* insert, update, delete, read, detail 등등 */
    const [mode, setMode] = useState('');

    /* 프로그램 최초 시작시 1번이 선택되었다고 가정합니다. */
    const [selectedId, setSelectedId] = useState(1);

    /* 상품 목록에서 특정 상품 1개를 클릭하였습니다. */
    const ClickArrived = (id) => {
        console.log(`상품 아이디 : ${id}`);
        setSelectedId(Number(id)); // 선택한 상품의 id가 변경이 되었습니다.
        setMode('detail'); /* 상세 보기 모드로 변환 */
    }

    const getProductById = () => {
        // selectedId : 개발자가 클릭한 상품의 id 
        // 상품 목록(products)에서 filter 함수를 이용하여 추출합니다.
        // bean은 방금 추출된 상품 1개를 의미합니다.
        const selectedProduct = products.filter((bean) => bean.id === selectedId);

        // selectedProduct는 객체 1개를 저장하고 있는 배열로 반환됩니다.
        // 따라서, 1번째 항목은 [0]으로 가져 와야 합니다.
        return selectedProduct[0];
    }

    /* 버튼을 클릭하여 mode를 변경하였습니다. */
    const ModeChanged = (mode) => {
        console.log(`변경된 모드 : ${mode}`);
        setMode(mode); /* 변경된 모드로 mode 스테이트에 할당합니다. */
    }

    // /* 등록 양식에서 넘어온 신규 상품을 관리할 state를 정의합니다. */
    // const [newItem, setNewItem] = useState(null);

    /* 사용자가 상품 등록 화면에서 내용을 기입하고, [등록] 버튼을 눌렀습니다. */
    const InsertData = (formData) => {
        // formData는 사용자가 입력한 폼 양식의 정보를 담고 있는 객체입니다.
        console.log(`등록 버튼 누름(main)`);
        //console.log(`입력 값 : ${formData.xxx.value}`);

        // 생성될 상품에 적용시킬 신규 아이디
        const newId = Math.max(...products.map((bean) => bean.id)) + 1;

        // newData는 사용자가 입력한 데이터를 저장하는 있는 배열입니다.
        const newData = [{
            id: newId,
            name: formData.name.value,
            price: Number(formData.price.value),
            category: formData.category.value,
            stock: Number(formData.stock.value),
            image: formData.image.value,
            description: formData.description.value,
        }];

        // concat() 함수를 사용하여 이전 상품 목록과 신규 품목을 합쳐 줍니다.
        const newProducts = products.concat(newData);
        setProducts(newProducts);

        setMode('read'); // 읽기 모드로 변경
    }

    return (
        <Card>
            <Card.Header>
                <Top title={title} comment={comment} />
            </Card.Header>
            <Card.Body>
                {/* onClickToContent 프롭스가 리턴되고 난 후 ClickArrived 함수가 동작되도록 하겠습니다. */}
                <Content contents={products} onClickToContent={ClickArrived} />
            </Card.Body>
            <Card.Body>
                <Switcher
                    mode={mode}
                    product={getProductById()}
                    onSubmitInsert={InsertData}
                />
            </Card.Body>
            <Card.Footer>
                <Bottom message={message} onClickToBottom={ModeChanged} />
            </Card.Footer>
        </Card>
    );
}

export default App;