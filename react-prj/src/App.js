import './App.css';
import React, { useMemo, useState } from 'react';
// import Container from './Components/Container';
// import CountTest from './Components/CountTest';
// import Counter from './Components/Counter';
// import FormTest from './Components/FormTest';
// import InputTest from './Components/InputTest';
// import ReducerTest from './Components/ReducerTest';
// import RefTest from './Components/RefTest';
// import User from './Components/User';
// import UserList from './Components/UserList';
// import HookTest from './Components/HookTest';
// import Calculator from './Components/test/Calculator';
// import Gallery from './Components/test/Gallery';
// import Timer from './Components/test/Timer';
import InputCount from './Components/test/InputCount';
import Display from './Components/test/Display';

// function Multiply({num1, num2}){
//   // useMemo
//   // 형식
//   // 1. const obj = useMemo(callback, [dependencies]);
//   // 2. userMemo(()=>fimc, [dependencies]);
  
//   const multiplyResult = useMemo(() =>{
//     console.log('Calculating...');
//     return num1 * num2;
//   }, [num1, num2]);

//   return (
//     <div>
//       <p>첫 번째 숫자 : {num1}</p>
//       <p>두 번째 숫자 : {num2}</p>
//       <p>두 숫자의 곱 : {multiplyResult}</p>
//     </div>
//   )
// }


// 문자열은 그냥 ""로 감싸면되지만, 문자열 외에는 {}로 감싸야한다.
function App() {
  // const name = "kim";
  // const age = 20;

  // const myStyle = {
  //   color: "red",
  //   backgroundColor: "yellow"
  // };

  // const numbers = [1, 3, 5];
  // // 1. 일반 for 문
  // for (let i = 0; i < numbers.length; i++) {
  //   console.log(i);
  // }

  // // 2. map()
  // numbers.map(i => {
  //   console.log(i);
  // });

  // const numberList = numbers.map(i => {
  //   return i;
  // })
  // console.log(numberList);

  // const [number1, setNumber1] = useState(5);
  // const [number2, setNumber2] = useState(3);
  // const [count, setCount] = useState(0);

  // const handleInputChange = e =>{
  //   switch(e.target.name){
  //     case 'number1':setNumber1(parseInt(e.target.value));
  //     break;
  //     case 'number2':setNumber2(parseInt(e.target.value));
  //     break;
  //     default: throw new Error('e.target.name에 그런건 없어요' + e.target.name);
  //   }
  // }
  // const handleIncrease = () => {
  //   setCount(count => count + 1);
  // }
  const [maxCount, setMaxCount] = useState(0);
  const [count, setCount] = useState(0);
  // const displayDiv = document.getElementById("displayDiv")
  // if(maxCount == 0){
  //   displayDiv.style.display = 'block';
  // }else {
  //   displayDiv.style.display = 'inline';
  // }
  return (
    <div>
      {/* <input type="number" name="number1" value={number1} onChange={handleInputChange}/><br/>
      <input type="number" name="number2" value={number2} onChange={handleInputChange}/><br/>
      <span>{count}</span>
      <button onClick={handleIncrease}>증가</button>
      <Multiply num1={number1} num2={number2}/> */}
      <InputCount setMaxCount={setMaxCount} setCount={setCount}/>
      <Display count={count} setCount = {setCount} maxCount={maxCount} />
    </div>
  );
}

export default App;
