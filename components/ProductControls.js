import React, { Component } from 'react';

export default class ProductControls extends Component {
  render() {
    const {removeProduct, productId} = this.props;
    return (
      <div>
        <button type="link" className="link">Edit</button>
        <button type="link" className="link" onClick={() => removeProduct(productId)}>Remove</button>
        <button type="link" className="link">Save for Later</button>
      </div>
    )
  }
}
