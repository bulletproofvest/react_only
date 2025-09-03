function App(){
    console.log('자바 스크립트 배열 관련 map 함수');
    const numbers = [4, 9, 16, 25];

    function multiply(num){
        return 10 * num.toFixed(3);
    }

    const result01 = numbers.map(multiply);
    console.log(result01);

    console.log('비어있는 배열은 어떻게 되나요?');
    const result02 = [].map(multiply);
    console.log(result02);

    console.log('\nmap 함수와 화살표 함수를 조합');
    const twotimes = (n) => 2 * n;
    const result03 = numbers.map(twotimes);
    console.log(result03);

    console.log('\n자바 스크립스 Math 객체를 같이 사용');
    const result04 = numbers.map(Math.sqrt);
    console.log(result04);

    const foods = ['라면', '우동', '짜장면', '짬뽕', '칼국수', '마라탕'];
    console.log(foods);

    const result05 = foods.map((item, index) => (
        <li key={index}>맛있는 {item} 좋아요</li>
    ));
    console.log(result05);

    const result06= foods.map((item, index) => {
        if(index % 2 === 0){
            return <li key={index}>맛있는 {item} 좋아요.</li>;
        }else{
            return <li key={index}>오늘은 {item}을 먹습니다.</li>;
        }
    });
    
    const words = ['love', 'peace', 'hello', 'sea', 'identificatiom', 'create', 'table'];
    console.log('화살표 함수와 String 객체의 length() 함수를 같이 사용');

    const mylength = 4;
    let min_length = []; // 비어있는 배열


    // 고객 목록(객체 여로 개로 구성된 배열)
    const customers = [
        {firstname: '민정', lastname:'김', age:10}, 
        {firstname: '효리', lastname:'최', age:20}, 
        {firstname: '지영', lastname:'강', age:30}, 
    ];

    // 고객 1명 정보를 <li> 태그로 변환해주는 함수
    function getCustomerOne(person, index){
        const isAdult = person.age >= 19 ? '성인' : '미성년자';
        return(
            <li key={index}>
                {person.lastname} {person.firstname}님, 나이: {person.age}살({isAdult})
            </li>
        );
    };

    // 고객들을 모록 형식으로 만든 컴포넌트
    const CustomerList = () =>{
        const mylist = customers.map(getCustomerOne);
        return <ol>{mylist}</ol>;
    };

    // <strong> 태그 : 글자 진하게 
    const WinterItems = () => {
        const items = [
            {name:'눈사람', description:'겨울천에 만드는 재미있는 친구'}, 
            {name:'얼음', description:'차갑고 단단단 겨울의 상징'}, 
            {name:'눈', description:'하얗게 내리는 겨울 풍경'}, 
            {name:'바람', description:'차가운 겨울 바람'}, 
        ];

        const itemList = items.map((item, index)=>(
            <li key={index}>
                <strong>{item.name}</strong>
                <p>{item.description}</p>
            </li>
        ));

        return(
            <ul>{itemList}</ul>
        );
    };

    words.map((sentence) => {
        if(sentence.length <= mylength){
            min_length.push(sentence);
        }
        return 0;
    });

    console.log(min_length);


    return(
        <div className="App">
            <h3>단순 출력</h3>
            <ul>{result05}</ul>
            <h3>양자 택일</h3>
            <ul>{result06}</ul>
            <h3>고객리스트</h3>
            <CustomerList />
            <h3>겨울 품목 리스트</h3>
            <WinterItems />
        </div>
    );
}

export default App;