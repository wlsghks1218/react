import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useMemo } from 'react';

function Multiply({ num1, num2 }) {
  const multiplyResult = useMemo(() => {
    console.log('Calculating multiplyResult...');
    return num1 * num2;
  }, [num1, num2]);
  return (
    <div>
      <p>첫 번째 숫자: {num1}</p>
      <p>두 번째 숫자: {num2}</p>
      <p>두 숫자의 곱: {multiplyResult}</p>
    </div>
  );
 }
 
function App() {
	const [number1, setNumber1] = useState(5);
	const [number2, setNumber2] = useState(3);
	const [count, setCount] = useState(0);
  const handleInputChange = e =>{
     switch(e.target.name){
       case 'number1':setNumber1(parseInt(e.target.value));
       break;
       case 'number2':setNumber2(parseInt(e.target.value));
       break;
       default: throw new Error('e.target.name에 그런건 없어요' + e.target.name);
     }
   }
const handleIncrease = () => {
setCount(prev=>prev+1);
}
return (
  <div>
    <input type="number" name="number1" value={number1} onChange={handleInputChange}/><br/>
    <input type="number" name="number2" value={number2} onChange={handleInputChange}/><br/>
    <Multiply num1={number1} num2={number2} />
    <span>{count}</span><button onClick={handleIncrease}>증가</button>
  </div>
);
}
export default App;
