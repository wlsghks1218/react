import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { decreateItemCount, deleteItem, increateItemCount } from '../../action/cartAction';
import { Link } from 'react-router-dom';
import formatKoreanCurrency from '../../util/display/display.js';

const CartWrapper = styled.div`
  max-width : 80%;
  margin : auto;
  table {
    width : 100%;
  }
  td{
    text-align : center;
  }
`;
const Cart = () => {

  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleDeleteCartItem = (id) => {
    dispatch(deleteItem(id));
  }
  const handleIncreaseItemCount = id => {
    dispatch(increateItemCount(id));
  }
  const handleDecreaseItemCount = id => {
    dispatch(decreateItemCount(id));
  }
  return (
    <CartWrapper>
      <table>
        <thead>
          <tr>
            <th>번호</th>
            <th>상품 이름</th>
            <th>수량</th>
            <th>가격</th>
            <th>삭제</th>
          </tr>
        </thead>
        <tbody>
          {
            cart.map(item => {
              return (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>
                    <Link to={`/detail/${item.id}`}>
                      {item.productName}
                    </Link>
                  </td>
                  <td>
                    <button 
                      onClick={()=> handleDecreaseItemCount(item.id)}
                      disabled={item.count === 1}
                      >-</button>
                    {item.count}
                    <button onClick={()=> handleIncreaseItemCount(item.id)}>+</button>
                  </td>
                  <td>{formatKoreanCurrency(item.price * item.count)}</td>
                  <td>
                    <button onClick={()=> handleDeleteCartItem(item.id)}>삭제</button>
                  </td>
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