import Display from './Components/Display/Display';
import axios from 'axios';
import './App.css';

function App() {
  // fetch('/getText')
  // .then(response => response.text())
  // .then(result => console.log(result));

  // axios.get('/getText')
  // .then(response => console.log(response.data));

  // axios.get('/getList')
  // .then(response => console.log(response.data));

  // fetch('/getList')
  // .then(response => response.json())
  // .then(result => console.log(result));
  return (
    <div className="App">
      <Display/>
    </div>
  );
}

export default App;
