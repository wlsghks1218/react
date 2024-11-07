import React, { useReducer } from 'react';

function reducer(state, action){
    console.log('reducer 함수 실행');
    console.log(state);
    console.log(action);

    switch(action.type){
        case 'INCREASE':
            return{count : state.count + action.payload};
        case 'DECREASE':
            return{count : state.count - action.payload};
        case 'RESET' :
            return{count : action.payload};
        
        default :
             throw new Error('unsupported action type : ', action.type);
    }
}

const ReducerTest = () => {
    const initialState = {count : 0};
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <p>count : {state.count}</p>
            <button onClick={() => dispatch({type : 'INCREASE', payload : 10000})}>증가</button>
            <button onClick={() => dispatch({type : 'DECREASE', payload : 10000})}>감소</button>
            <button onClick={() => dispatch({type : 'RESET', payload : 0})}>리셋</button>
        </div>
    );
};

export default ReducerTest;