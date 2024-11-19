import React from 'react';
import styled from 'styled-components';
import formatKoreanCurrency from '../../util/display/display';

const Item = styled.div`
    color: black;
    margin: 30px;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 5px 5px 5px 5px #e8e4e4;
    text-align: right;

    h4{
        margin-top:10px;
        font-size:1.3em;
        font-weight:bold;
    }
    p{
        font-size:1em;
        padding: 0;
        margin: 0;
    }
    span{
        font-size:1.2em;
        font-weight: 500;
    }
`;

const Product = ({data}) => {
    console.log(data);
    return (
        <Item>
            {/* <img src={"/images/product/" + data.main} alt="메인이미지" width='100%'/> */}
            <img src={process.env.PUBLIC_URL + `/images/product/${data.main}`} alt="메인이미지" width='100%'/>
            <h4>{data.title}</h4>
            <p>{data.content}</p>
            <span>{formatKoreanCurrency(data.price)}</span>
        </Item>
    );
};

export default Product;