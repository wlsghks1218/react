import React, { useEffect, useState } from 'react';
import Header from '../Layout/Header';
import styled from 'styled-components';
import { Routes, Route } from 'react-router-dom';
import Main from '../Layout/Main';
import data from '../../util/mock/data'
import Detail from '../Detail/Detail'
import axios from 'axios';
import Cart from '../Cart/Cart';

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
    // const [products, setProducts] = useState(data);
    // return (
    //     <Container>
    //         <HeaderArea>
    //             <Header/>
    //         </HeaderArea>
    //         <Body>
    //             <Routes>
    //                 <Route path='/' element={<Main data={products}/>}/>
    //                 <Route path='/detail/:pId' element={<Detail data={products}/>}/>
    //             </Routes>
    //         </Body>
    //     </Container>
    // );
    const [products, setProducts] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        axios.get('/api/products')
        .then(products => setProducts(products.data))
        .then(setIsLoaded(true))
        .catch(err => console.log(err));
    }, []);

    useEffect(()=>{
        if(isLoaded){
            // console.log(isLoaded);
            // console.log(products);
        }
    }, [products]);

    // const getProductList = async () => {
    //     const response = await axios.get('/api/products');
    //     const json = response.data;
    //     setProducts(json);
    // }
    return (
        <Container>
            <HeaderArea>
                <Header/>
            </HeaderArea>
            <Body>
                <Routes>
                    <Route path='/' element={<Main data={products}/>}/>
                    <Route path='/detail/:pId' element={<Detail data={products}/>}/>
                    <Route path='/cart' element={<Cart/>}/>;
                </Routes>
            </Body>
        </Container>
    );
};

export default Display;