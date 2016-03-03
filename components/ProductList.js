import React, { Component } from 'react';
import Product from './Product';
import _ from 'lodash';

export default class ProductList extends Component {
  getTotalItemsInCart(products) {
    return products.reduce((previous, current) =>previous + _.parseInt(current.p_quantity), 0);
  }

  render() {
    const {products, removeProduct, updateQuantity} = this.props;

    if (_.isNil(products) || products.length === 0) {
      return (<h2>No product in cart. Please refresh your page.</h2>)
    }

    return (
      <div className="productContainer">
        <div className="row lead">
          <div className="medium-6 columns">{this.getTotalItemsInCart(products)} ITEMS</div>
          <div className="medium-2 columns text-center">SIZE</div>
          <div className="medium-2 columns text-center">QTY</div>
          <div className="medium-2 columns text-center">PRICE</div>
        </div>
        {products.map((productDetails, idx) => {
          return (
            <Product key={idx}
                     product={productDetails}
                     removeProduct={removeProduct}
                     updateQuantity={updateQuantity}/>)
        })}
      </div>
    )
  }
}

