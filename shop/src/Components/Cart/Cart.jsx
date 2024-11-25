import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { decreaseItem, increaseItem } from '../../action/cartAction';

const CartWrapper = styled.div`
    max-width : 80%;
    margin : auto;
    table{
        width:100%;
    }
    td{
        text-align: center;
    }
`;


const Cart = () => {
    const cart = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const handleDeleteCartItem = (id) => {
        dispatch({ type: 'DELETE_ITEM', payload: id });
    };

    const handleIncrease = (id) => {
        dispatch(increaseItem(id));
    };

    const handleDecrease = (id) => {
        dispatch(decreaseItem(id));
    };

    console.log(cart);
    return (
        <CartWrapper>
            <table>
                <thead>
                    <tr>
                        <td>번호</td>
                        <td>상품 이름</td>
                        <td>수량</td>
                        <td>가격</td>
                        <td>삭제</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        cart.map(item=> {
                            return(
                                <tr key={item.id}>
                                    <td>{item.id}</td>
                                    <td>{item.productName}</td>
                                    <td><button onClick={()=> handleDecrease(item.id)}>-</button>&nbsp;&nbsp;&nbsp;
                                        {item.count}&nbsp;&nbsp;&nbsp;
                                        <button onClick={() =>handleIncrease(item.id)}>+</button></td>
                                    <td>{item.price * item.count}</td>
                                    <td><button onClick={()=> handleDeleteCartItem(item.id)}>삭제</button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </CartWrapper>
    );
};

export default Cart;