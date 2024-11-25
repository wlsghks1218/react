import { ADD_ITEM, DELETE_ITEM, INCREASE_ITEM, DECREASE_ITEM } from "./type";

function addItem(item){
    return{
        type : ADD_ITEM,
        payload : item
    }
}
function deleteItem(id){
    return{
        type : DELETE_ITEM,
        payload : id
    }
}
function increaseItem(id){
    return{
        type : INCREASE_ITEM,
        payload : id
    }
}

function decreaseItem(id){
    return{
        type : DECREASE_ITEM,
        payload : id
    }
}

export {addItem, deleteItem, increaseItem, decreaseItem};