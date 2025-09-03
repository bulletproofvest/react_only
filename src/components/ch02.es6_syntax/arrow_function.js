function App(){
    const function01 = function(){
        return 'hello~~world' ;
    }
    const function02 = () => {
        return '여러분~~안녕'
    }
    const function03 = () => '어서오세요~~방가' ;

    console.log('\n매개 변수가 없는 함수 표현식');
    console.log(function01());

    console.log('\n매개 변수가 없는 화살표 함수');
    console.log(function02());

    console.log('\n중괄호와 return 문이 없는 화살표 함수');
    console.log(function03());

    const function04 = (name) =>{
        if(name == undefined){
            return console.log('너 누군데 ');
        }else{
            return `hello~~${name}님`;
        }
    }

    const name = '김철수';
    console.log('\n매개 변수 1개 짜리');
    console.log(function04(name));


    console.log(function04());

    const function05 = (first, second) => {
        return `${first} 더하기 ${second}는 ${first + second}입니다.`;
    }
    console.log('\n매개 변수 2개 짜리 화살표 함수');
    console.log(function05(10, 20));
    
    const function06 = (first, second) => `${first} 더하기 ${second}는 ${first + second}입니다.`;
    console.log('\n중괄호와 return문이 없는 매개 변수 2개 짜리 화살표 함수');
    console.log(function06(10, 20));

    // 사람 이름과 나이 입력 / 성인인지 아닌지 판단

    const adultCheck = (name, age) => {
        let adult = `${age >= 19 ? '성인' : '미성년자'}`;
        const result = `${name}(${age})님은 '${adult}'입니다`;
        return result;
    }

    console.log(adultCheck('김영식', 40));
    console.log(adultCheck('윤영주', 10));

    console.log('\n반환 타입이 객체인 경우');
    const function07 = (first, second) => {
        const result = {add:first + second, mul:first * second};
        return result;
    }
    console.log(function07(14, 5));


    console.log('대괄호 기호와 key 이름을 이용하여 접근이 가능합니다.');
    console.log('덧셈 결과 : ' + function07(14, 5)['add']);
    console.log('곱셈 결과 : ' + function07(14, 5)['mul']);
    console.log('곱셈 결과 : ' + function07(14, 5).mul);

    let answer = function07(10,20);
    console.log(answer['add']);
    console.log(answer['mul']);


    return(
        <div className="App">
            화살표 함수
        </div>
    );
}

export default App;