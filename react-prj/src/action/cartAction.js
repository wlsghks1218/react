import { ADD_ITEM,DELETE_ITEM } from "./type";

function addItem(id, productName, price){
    return{
        type : ADD_ITEM,
        payload : {id : id, productName : productName, price : price}
    }
}
function deleteItem(id){
    return{
        type : DELETE_ITEM,
        payload : id
    }
}

export {addItem, deleteItem};