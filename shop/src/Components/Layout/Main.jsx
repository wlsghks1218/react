import React from 'react';
import styled from 'styled-components';
import ProductList from '../Product/ProductList';
import Recently from '../Recently/Recently';

const MainBG = styled.div`
  min-height: 500px;
  background-image: url('/images/main/main1.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  margin-bottom: 50px;
`;

function Main({data}) {

  return (
    <>
      <MainBG/>
      <ProductList data={data}/>
    </>
  );
}

export default Main;