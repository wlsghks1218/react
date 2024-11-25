import React from 'react';
import { ADD_ITEM, DELETE_ITEM, INCREASE_ITEM, DECREASE_ITEM } from '../action/type';

const initialState = [];

const cart = (state = initialState, action) => {
    switch(action.type){
        case ADD_ITEM :
        const existingItemIndex = state.findIndex(item => item.id === action.payload.id);
        if (existingItemIndex !== -1) {
            return state.map((item, index) =>
                index === existingItemIndex
                    ? { ...item, count: item.count + 1}
                    : item
            );
        }
        return [...state, { ...action.payload, count: 1 }];
        case DELETE_ITEM:
            return state.filter(product => product.id !== action.payload);
        case INCREASE_ITEM:
            return state.map(item => 
                item.id === action.payload 
                    ? { ...item, count: item.count + 1 }
                    : item
            );
        case DECREASE_ITEM:
            return state.map(item => item.id === action.payload ? { ...item, count: item.count - 1 }: item).filter(item => item.count > 0);
        default : return state;
    }
};

export default cart;
