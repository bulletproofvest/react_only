function App(){
    // ES5 버전
    let string1 = 'hello';
    let string2 = 'world';
    let greeting = string1 + ' ' + string2;
    console.log('greeting : ' + greeting);

    let product = {name: 'apple', price:2000}; // 상품객체
    let message = '제품: ' + product.name + ', 단가 : ' + product.price;
    console.log(message);

    let multiLine = 'hello\neveryone';
    console.log(multiLine);

    let value1 = 14;
    let value2 = 5;
    let boolValue = false;
    let operator1 = '연산 결과 : ' + (value1 * value2);
    console.log(operator1);

    let operator2 = '삼항 연산자 : ' + (boolValue ? '참' : '거짓');
    console.log(operator2);

    // ES6 버전 이후
    let string3 = '여러분';
    let string4 = '반갑습니다';
    // template literal :  백틱(`) 문자를 사용하여 데이터를 표현하는 방식
    // 백팅을 사용하고, 수식의 표편은 ${}기호를 사용
    greeting = `${string3}~~${string4}`;
    console.log('greeting : ' + greeting);

    product = {name: 'react', price: 30000};
    // toLocaleString()메소드는 숫자를 3자리마다 콤마 유형으로 변경해주는 자바 스크립트 메소드
    message = `제품 ${product.name}의 단가는 ${product.price.toLocaleString()}원 입니다`;
    console.log(message);

    let discount = 0.3;
    message = `할인가 : ${((1-discount) * product.price).toLocaleString()}원`;

    console.log(message);

    multiLine = `여러분
안녕하세요`;
    console.log(multiLine);

    boolValue = 14>5;
    operator1 = `덧셈 결과 : ${value1 + value2}`;
    console.log(operator1);

    let operator3 = `삼항 연산자 : ${boolValue ? '참' : '거짓'}`;
    console.log(operator3);
    
    return(
        <div className = "App">
            탬플릿 문자열
        </div>
    )

}
    export default App;