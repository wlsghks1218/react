import './App.css';
import Container from './Components/Container';
import Counter from './Components/Counter';
import InputTest from './Components/InputTest';
import User from './Components/User';
import UserList from './Components/UserList';

// 문자열은 그냥 ""로 감싸면되지만, 문자열 외에는 {}로 감싸야한다.
function App() {
  const name = "kim";
  const age = 20;

  const myStyle = {
    color: "red",
    backgroundColor: "yellow"
  };

  const numbers = [1, 3, 5];
  // 1. 일반 for 문
  for (let i = 0; i < numbers.length; i++) {
    console.log(i);
  }

  // 2. map()
  numbers.map(i => {
    console.log(i);
  });

  const numberList = numbers.map(i => {
    return i;
  })
  console.log(numberList);

  return (
    <div>
      <InputTest/>
    </div>
  );
}

export default App;
