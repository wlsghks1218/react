import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(Number(0));
  return (
    <div>
      <span>클릭 횟수 : {count}회</span><br/>
      <button onClick={() => setCount(prev => prev + 1)}>클릭</button>
    </div>
  );
}

export default App;
