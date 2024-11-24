import React, { useState } from 'react';
import Header from '../Layout/Header';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Main from '../Layout/Main';
import data from '../../util/mock/data'
import Detail from '../Detail/Detail'

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
    background-color : white;
    position: sticky;
    top: 0;
    z-index: 9999;
`;
const Body = styled.div`
    width: 100%;
    min-height: 50vh;
`;


const Display = () => {
    const [products, setProducts] = useState(data);
    return (
        <Container>
            <HeaderArea>
                <Header/>
            </HeaderArea>
            <Body>
                <Routes>
                    <Route path='/' element={<Main data={products}/>}/>
                    <Route path='/detail/:pId' element={<Detail data={products}/>}/>
                </Routes>
            </Body>
        </Container>
    );
};

export default Display;