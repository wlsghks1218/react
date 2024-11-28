import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Main from '../Layout/Main';
import Detail from '../Detail/Detail';
import data from '../../util/mock/data';
import axios from 'axios';
import Cart from '../Cart/Cart';
import Recently from '../Recently/Recently';
import Login from '../Login/Login';
import { useDispatch, useSelector } from 'react-redux';
import BoardList from '../Board/BoardList';
import BoardDetail from '../Board/BoardDetail';
import BoardWrite from '../Board/BoardWrite';
import Join from '../Login/Join';

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`;
const HeaderArea = styled.div`
  width: 100%;
  background-color: white;
  position: sticky;
  top: 0;
  z-index: 9999;
`;
const Body = styled.div`
  width:100%;
  min-height : 50vh;
`;

function Display(props) {

  

  const [products, setProducts] = useState([]);

  const getProductList = async () => {
    const response  = await axios.get('/api/products');
    console.log(response);
    const json = response.data;
    setProducts(json);
  }

  useEffect(()=>{
    getProductList();
  }, []);
    


  return (
    <Container>
      <HeaderArea>
        <Header/>
      </HeaderArea>
      <Body>
        <Routes>
          <Route path='/' element={<Main data={products}/>}/>
          <Route path='/detail/:pId' element={<Detail data={products}/>}/>
          <Route path='/cart' element={<Cart/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/board' element={<BoardList/>}/>
          <Route path='/board/:idx' element={<BoardDetail/>}/>
          <Route path='/write' element={<BoardWrite/>}/>
          <Route path='/join' element={<Join/>}/>
        </Routes>
      </Body>
    </Container>
  );
}

export default Display;