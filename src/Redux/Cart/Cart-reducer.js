import React from 'react';
import {SHIPPING_COST} from '../../Utils/Constants' 
import { ADD_TO_CART, TOGGLE_HIDDEN_CART } from "./Cart-actions";
import { addItemToCart } from './Cart-utils';

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
  shippingCost: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload),
        shippingCost: SHIPPING_COST,
      };
    case TOGGLE_HIDDEN_CART:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default cartReducer;
