import React from 'react';
import styled from 'styled-components';
import formatKoreanCurrency from '../../util/display/display';
import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../action/cartAction';
import { useNavigate } from 'react-router-dom';

const StyledDescriptonList = styled.div`
     flex: 1;
     height: 500px;
     padding: 50px;
`;

const Title = styled.span`
    font-size: 32px;
    font-weight : bold;
    display: block;
    margin: 20px 0;
`;
const PriceTitle = styled.span`
    font-size: 32px;
    font-weight : bold;
    display: block;
    margin: 20px 0;
`;

const InfoArea = styled.div`
    display; table;
    width: 100%;
    table-layout: fixed;
    margin-top: 10px;
    margin-bottom: 10px;
    padding-top: 8px;
`;
const BR = styled.div`
    width : 100%;
    height ; 13px;
    border-bottom : 1px solid #999;
`;
const ButtonArea = styled.div`
    width : 100%;
    display : fles;
    gap : 6px;
    
    button{
        vertical-align : top;
        width : 50%;
        margin: 0;
        min-width: auto;
        padding : 15px;
        border-radius : 5px;
        font-weight : 700;
    }
`;

// const CartAddButton = styled.button`
//     background-color : white;
//     color : #333;
//     border : 1px solid gray;
// `;
// const BuyButton = styled.button`
//     background-color : #bcd530;
//     color : #fff;
//     border : 1px solid #bcd530;
// `;
const MyButton = styled.button`
    background-color: ${props => props.$bg};
    color: ${props => props.$color || 'white'};
    border: 1px solid ${props => props.$border};
    cursor: pointer;
`;

const DL = styled.dl`
    display : table-row;
`;

const DT = styled.dt`
    display : table-cell;
    vertical-align : top;
    width : 100px;
    padding : 12px 0;
    color : #666;
`;

const DD = styled.dd`
    display : table-cell;
    position : relative;
    vertical-align : top;
    padding: 12px 0;
    color : #333;
`;


const DescriptionList = ({data}) => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const nav = useNavigate();

    const handleAddCartItem = () => {
        const item={
            id : data.id,
            productName : data.title,
            price : data.price,
            count : 1
        }

        const inCart = cart.find(product => product.id === item.id)
        console.log(inCart);


        if(inCart){
            // eslint-disable-next-line no-restricted-globals
            const confirmAdd = confirm("동일한 상품이 있습니다. 수량을 1 증가시키겠습니까?");
            if (confirmAdd) {
                dispatch(addItem(item));
            }
        }else {
            dispatch(addItem(item));
            // eslint-disable-next-line no-restricted-globals
            const confirmAdd = confirm('장바구니에 추가하였습니다. 장바구니로 이동하시겠습니까?');
            if(confirmAdd){
                nav('/cart');
            }
        }
    }

    return (
        <StyledDescriptonList>
            <Title>{data.title}</Title>
            <PriceTitle>{formatKoreanCurrency(data.price)}</PriceTitle>
            <BR></BR>
            <InfoArea>
                <DL>
                    <DT>원산지</DT>
                    <DD>상품 정보 참고</DD>
                </DL>
                <DL>
                    <DT>배송비</DT>
                    <DD>3000원</DD>
                </DL>
                <ButtonArea>
                    <MyButton $bg='#fff' $color='#333' $border='gray' onClick={handleAddCartItem}>장바구니</MyButton>
                    <MyButton $bg='#bcd530' $color='#fff' $border='#bcd530'>바로구매</MyButton>
                </ButtonArea>
            </InfoArea>
        </StyledDescriptonList>
    );
};

export default DescriptionList;