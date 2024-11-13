import { DECREASE, INCREASE } from "./type";

function increase(num){
    return{
        type : INCREASE,
        payload : num
    }
}
function decrease(){
    return{
        type : DECREASE
    }
}

export {increase, decrease};
// 한개 export할 때는 default 넣어주고
// 두개 이상 export할때는 위처럼 하면됨