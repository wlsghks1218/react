import './App.css';
import { createContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Product from './Components/Product';
import Header from './Components/layout/Header';
import Main from './Components/page/Main';
import View from './Components/page/View';
import Write from './Components/page/Write';
import Content from './Components/page/Content';
import About from './Components/page/About';

export const MyContext = createContext();

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/view/:postId" element={<View />} >
          {/* pathVariable 처럼 전달할 파라미터 담는 것 */}
            <Route path="content" element={<Content />} />
            <Route path="about" element={<About />} />
          </Route>
          <Route path="/write" element={<Write />} />
          <Route path="*" element={<div>404페이지</div>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
