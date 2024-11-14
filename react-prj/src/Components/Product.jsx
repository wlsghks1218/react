import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { decrease, increase } from '../action/counterAction';
import { addItem, deleteItem } from '../action/cartAction';

const Product = (props) => {
    // store에 접근해서 state 가져오기
    const counter = useSelector(state => state.counter.count);
    
    // dispatch 준비
    const dispatch = useDispatch();

    const handleIncrease = () => {
        dispatch(increase(1));
    }
    const handleDecrease = () => {
        dispatch(decrease(1));
    }

    const cart = useSelector(state => state.cart)
    const cartAddItem = () => {
        dispatch(addItem(Number(document.getElementById("pid").value), document.getElementById("pname").value, document.getElementById("pprice").value));
    }
    const cartDeleteItem = () => {
        dispatch(deleteItem(Number(document.getElementById("pid").value)));
    }
    return (
        <div>
            <h1>Hello Redux</h1>
            <p>{counter}</p>
            <button onClick={handleIncrease}>+</button>
            <button onClick={handleDecrease}>-</button>
            <br/>
            <hr/>
            <input type="number" id="pid" />
            <input type="text" id="pname" />
            <input type="text" id="pprice" />
        {
            cart.map(item => {
                return <p key={item.id}>{item.id} | {item.productName} | {item.price}</p>
            })
        }
        <button onClick={cartAddItem}>아이템 추가</button>
        <button onClick={cartDeleteItem}>아이템 삭제</button>

        </div>
    );
};

export default Product;