// react 라이브러리에서 component 항목 사용함 
import { Component } from "react";

// <div> 태그는 요소들을 담기 위한 컨테이너 박스 역할
// <img> 태그는 그림을 담기 위한 태그
// tag안에 xxx="ttt" 적은 걸 속성이라 함
// public 경로가 웹 페이지의 최상위 경로가 됨
class App extends Component{
    // render : 클라이언트가 데이터를 입력 받아서 그려주는 동작
    render(){
        console.log('클래스형 컴포넌트');
        return(
            <div className="App">
                <div>클래스 방식(초간단 JSX 실습)</div>
                <img src="http://localhost:3000/americano01_bigsize.png"
                    width="300" height="300" />
                <div>반갑</div>
            </div>
        );
    }
}
// App을 외부에서 참조 가능하도록 해줌
export default App;