function App(){
    console.log('함수 만들기 예시');


    console.log('함수 선언문');
    function jegob01(a, b){
        if(b == undefined){
            console.log('매개 변수에 값 할당이 안되면 undefined임');
            console.log('b : ' + b);
        }
        return (a*a) + (b*b) ;
    }

    let su01 = 2 ;
    let su02 = 3 ;
    let message = `jegob01(${su01}, ${su02}) 실행 결과 : `;
    console.log(message + jegob01(su01, su02));

    console.log(jegob01(5));
    console.log('NaN은 Not A Number의 줄인 말임');

    console.log('\n함수 표현식');
    const jegob02 = function(a,b){return (a*a) + (b*b)};

    let su03 = 4 ;
    let su04 = 5 ;
    message = `jegob02(${su03}, ${su04}) 실행 결과 : `;
    console.log(message + jegob02(su03, su04));

    return(
        <div className="App">
            샘플
        </div>
    );
}

export default App;