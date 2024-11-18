import React from 'react';
import styled from 'styled-components';

const Item = styled.div`
    color: black;
    text-align: center;
    margin: 30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px #e8e4e4;
`;

const Product = ({data}) => {
    console.log(data);
    return (
        <Item>
            <img src={"/images/product/" + data.main} alt="메인이미지" width='100%'/>
            <h4>{data.title}</h4>
            {/* <p>{id}</p> */}
            <p>{data.content}</p>
            <span>{data.price}</span>
            {/* {main} */}
            {/* <img src={"/images/product/" + detail} alt="디테일이미지" /> */}
        </Item>
    );
};

export default Product;