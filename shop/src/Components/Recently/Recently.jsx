import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  width: 200px;
  top: 150px;
  right: 50px;
`;

const Item = styled.h1`
  background: black;
  color: white;
  text-align: center;
`;

const Recently = () => {
  const recentlyData = JSON.parse(localStorage.getItem('recently')) || [];

  if (!recentlyData.length) {
    return null;
  }

  return (
    <Wrapper>
      {recentlyData.map((item) => (
        <Item key={item.id}>{item.title}</Item>
      ))}
    </Wrapper>
  );
};

export default Recently;
