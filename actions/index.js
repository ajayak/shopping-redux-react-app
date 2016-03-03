import shop from '../api/shop';
import * as types from '../constants/ActionTypes';

function receiveProducts(products) {
  return {
    type: types.GET_ALL_CART_ITEMS,
    products: products.productsInCart
  }
}

export function getCartItems() {
  return dispatch => {
    shop.getProducts(products => {
      dispatch(receiveProducts(products))
    })
  }
}

export function updateProductQuantity(product, quantity) {
  return {
    type: types.UPDATE_QUANTITY,
    product,
    quantity
  }
}

export function removeProduct(productId) {
  return {
    type: types.REMOVE_PRODUCT,
    productId
  }
}
