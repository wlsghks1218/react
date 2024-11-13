import { decrease, increase } from '../action/counterAction';
import {INCREASE, DECREASE} from '../action/type';

const initialState = {count : 0};

// state에 값이 없을 경우 기본값을 설정
const counter = (state = initialState, action) =>{
    switch(action.type){
        case INCREASE:
            return {count : state.count + action.payload};
        case DECREASE:
            return {count : state.count - 1};
        default : return state;
    }
}
export default counter;