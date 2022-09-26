// eslint-disable-next-line
import React from 'react';
import { TOGGLE_HIDDEN_CART } from "./Cart-actions";

const INITIAL_STATE = {
  cartItems: [],
  hidden: true,
  shippingCost: 0,
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
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
