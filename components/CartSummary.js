import React, { Component } from 'react';
import PromoCode from './PromoCode';
import _ from 'lodash';

export default class CartSummary extends Component {
  calculateSubTotal(products) {
    return products.reduce((previous, current) =>previous + _.parseInt(current.p_price), 0);
  }

  render() {
    const {products, shipCharges, minShipLimit} = this.props;
    const subTotal = this.calculateSubTotal(products);
    if (_.isNil(products) || products.length === 0) return (<span></span>);

    return (
      <section className="medium-9 medium-push-1 columns">
        <PromoCode/>

        <div className="emphasize divider">
          <div className="row">
            <div className="medium-4 columns">Subtotal</div>
            <div className="medium-4 medium-offset-4 columns">
              {products[0].c_currency}{subTotal}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="medium-4 columns">Estimated Shipping</div>
            <div className="medium-4 medium-offset-4 columns">
              -{subTotal > minShipLimit ? 'Free' : products[0].c_currency+7}
            </div>
          </div>
          <hr/>
          <div className="row">
            <div className="medium-4 columns lead">
              Estimated Total
              <p className="subheader text-small">Tax will be applied during checkout</p>
            </div>
            <div className="medium-4 medium-offset-4 columns lead">
              {products[0].c_currency}{subTotal > minShipLimit ? subTotal : subTotal - shipCharges}
            </div>
          </div>
          <div className="divider"></div>
        </div>

        <button className="emphasize link float-left" type="link">Continue Shopping</button>
        <button className="button float-right primary">Checkout</button>
        <p className="clearfix" />

        <footer className="text-center">
          <img src='lock.jpg' alt='lock'/>Secure Checkout. Shopping is always safe & secure
        </footer>
      </section>
    )
  }
}
