import { ADD_ITEM, DECREASE_ITEM_COUNT, DELETE_ITEM, INCREASE_ITEM_COUNT } from "../action/type";


/*
  id : 
  productName :
  price :
  count :
*/
const initialState = [];

const cart = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case DELETE_ITEM:
      return state.filter(product => product.id !== action.payload);
    case INCREASE_ITEM_COUNT:
      return state.map(product => 
        product.id === action.payload 
        ? {...product, count : product.count + 1}
        : product
      );
    case DECREASE_ITEM_COUNT:
      return state.map(product => 
        product.id === action.payload 
        ? {...product, count : product.count - 1}
        : product
      );
    default:
      return state;
  }
}

export default cart;