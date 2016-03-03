import * as types from '../constants/ActionTypes';
import _ from 'lodash';

export default function cart(state = [], action) {
  switch (action.type) {
    case types.GET_ALL_CART_ITEMS:
      return action.products;

    case types.REMOVE_PRODUCT:
      return state.filter(product =>
        product.p_id !== action.productId
      );

    case types.UPDATE_QUANTITY:
      let quantity = _.parseInt(action.quantity);
      let indexOfCartItem = state.indexOf(action.product);
      let updatedProduct = Object.assign({}, action.product, {
        'p_quantity': action.quantity,
        'p_originalprice': _.parseInt(action.product.p_originalprice) / _.parseInt(action.product.p_quantity) * quantity,
        'p_price': _.parseInt(action.product.p_price) / _.parseInt(action.product.p_quantity) * quantity
      });
      return [
        ...state.slice(0, indexOfCartItem),
        updatedProduct,
        ...state.slice(indexOfCartItem + 1, state.length)
      ];

    default:
      return state;
  }
}
