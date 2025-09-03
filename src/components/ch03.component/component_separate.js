function Top(){
    return(
        <div>
            <header>
                <h1>인사말</h1>
                하이룽
            </header>
        </div>
    );
}

function Content(){
    return(
        <nav>
            <ul>
                <li><a href="http://www.naver.com">네이버</a></li>
                <li><a href="http://www.daum.net">다음</a></li>
                <li><a href="http://www.google.com">구글</a></li>
            </ul>
        </nav>
    );
}

function Bottom(){
    return(
        <article>
            <h2>맺음말</h2>
            바이룽
        </article>
    );
}

/* 
JSX 문법 규칙
- 최상위 요소(태그)는 반드시 1개여야 함
- 태그들은 대소문자 구분을 함
- 태그는 열기/닫기로 구성됨
- 열기 닫기 사이에 내용물이 없으면, <태그 /> 형식으로 작성 가능
- 기존 html에서 사용하던 태그들 모두 사용가능함
- 개발자가 직접 만든 앱도 사용가능함
- 속성 작성은 숫자 형식이라고 하더라도 반드시 이름="값" 형식으로 작성
*/

function App(){
    console.log('컴포넌트별 분리하기');
    return(
        <div name="김철수">
            <Top />
            <Content />
            <Bottom />
        </div>
    );
}

export default App;