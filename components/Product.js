import React, { Component } from 'react';
import ProductControls from './ProductControls';

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {'quantity': props.product.p_quantity};
    this.setProductQuantity = this.setProductQuantity.bind(this);
  }

  setProductQuantity(evt) {
    /*Numerical character, Max - 9*/
    const numberRegex = /^[0-9\b]$/,
      quantity = evt.target.value;
    if (!numberRegex.test(quantity)) return;

    if (quantity === "0") {
      this.props.removeProduct(this.props.product.p_id);
    } else {
      this.setState({'quantity': quantity});
      this.props.updateQuantity(this.props.product, quantity);
    }
  }

  render() {
    const {product, removeProduct} = this.props;
    return (
      <div className="product">
        <div className="row">
          <div className="medium-2 columns">
            <img src={product.p_image}
                 alt={product.p_name}/>
          </div>

          <div className="medium-4 columns emphasize text-small">
            <h6>{product.p_variation} {product.p_name}</h6>
            <span>Style #: {product.p_style}</span> <br/>
            <span>Color: {product.p_selected_color.name} </span>
          </div>

          <div className="medium-2 columns text-center lead">
            {product.p_selected_size.code}
          </div>

          <div className="medium-2 columns text-center">
            <input type="number"
                   name="quantity"
                   value={this.state.quantity}
                   onChange={this.setProductQuantity}/>
          </div>

          <div className="medium-2 columns text-center">
            {product.p_originalprice !== product.p_price ? <strike> {product.p_originalprice}</strike> : ""}
            <h5>{product.c_currency}{product.p_price}</h5>
          </div>
        </div>
        <div className="row">
          <div className="medium-6 medium-offset-2 columns">
            <ProductControls removeProduct={removeProduct}
                             productId={product.p_id}/>
          </div>
        </div>
      </div>
    )
  }
}

