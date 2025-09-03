import logo from '../../logo.svg';
import '../../App.css';

// var(요즘 잘 안 씀), let 

function App() {
  let su = 10;
  su += 3;
  console.log('su : ' + su );

  let str = 'hohoho';
  str = 'hahaha';
  console.log('str : ' + str);

  let arr = [] ; // empty array
  arr = [10, 20, 30]; // 배열은 대괄호를 사용 
  console.log('arr : ' + arr);

  let obj = {} ; // 객체는 중괄호를 사용
  // 속성의 이름과 값은 콜론으로 구분 
  obj = {name: 'hong', password:'abc123', age: 30};
  console.log('obj : ');
  console.log(obj);

  // 중괄호를 block라고 부름
  // Scope : 접근할 수 있는 어떠한 영역을 의미
  if(true){
    let x1 = 10;  // let : block scope내에서만 유효
    var x2 = 20;
  }
  // console.log('x1 ' + x1);
  console.log('x2 ' + x2);

  // const를 사용한 상수 (Constant)
  const su2 = 10; // const : 값을 바꿀 수 없는 거 
  // su2 += 3; << 이거 오류남 ㅇㅇ 왜냐? const 값을 바꿀 수 없기 때문에
  console.log('su2 : ' + su2);

  const str2 = 'hohoho';
  // str2 += 'hahaha';
  console.log('str2 : ' + str2);

  const arr2 = [40, 50, 60];
  // arr2 = [40, 50, 60];
  console.log('arr2 : ' + arr2);

  const obj2 = {name: 'park', password: 'hello5678', gender:'남자'};
  // obj = {name: 'park', password: 'hello5678', gender:'남자'};
  console.log('obj2 : ' + obj2);

  return (
    <div className="App">
      ECMAScript
    </div>
  );
}

export default App;
