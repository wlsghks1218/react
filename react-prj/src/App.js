import './App.css';
import { createContext, useContext } from 'react';
import Product from './Components/Product';

     
export const MyContext = createContext();
function App() {
  return (
    <MyContext.Provider value='Hello'>
      <Product/>
    </MyContext.Provider>
  );
}

export default App;
