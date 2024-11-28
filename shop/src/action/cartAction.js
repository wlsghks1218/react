import { ADD_ITEM, DECREASE_ITEM_COUNT, DELETE_ITEM, INCREASE_ITEM_COUNT } from "./type";

function addItem(item){
  return {
    type : ADD_ITEM,
    payload : item
  }
}
function deleteItem(id){
  return {
    type : DELETE_ITEM,
    payload : id
  }
}
function increateItemCount(id){
  return {
    type : INCREASE_ITEM_COUNT,
    payload : id
  }
}
function decreateItemCount(id){
  return {
    type : DECREASE_ITEM_COUNT,
    payload : id
  }
}

export {addItem, deleteItem, increateItemCount, decreateItemCount}