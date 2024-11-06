import React, { useReducer } from 'react';

function reducer(state, action){
    console.log('reducer 함수 실행');
    console.log(state);
    console.log(action);
}

const ReducerTest = () => {
    const initialState = {count : 0};
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>count : </p>
            <button onClick={() => dispatch({type : 'INCREASE', payload : 1})}>증가</button>
        </div>
    );
};

export default ReducerTest;