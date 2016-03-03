import React, { Component } from 'react';

export default class PromoCode extends Component {
  constructor(props) {
    super(props);
    this.state = {promoCode: ''};
    this.onPromoCodeInputChange = this.onPromoCodeInputChange.bind(this);
    this.verifyPromoCode = this.verifyPromoCode.bind(this);
  }

  onPromoCodeInputChange(evt) {
    this.setState({'promoCode': evt.target.value});
  }

  verifyPromoCode() {
    alert("Invalid code");
    this.setState({'promoCode': ''});
  }

  render() {
    return (
      <section className="row">
        <div className="medium-5 columns">
          <label htmlFor="promo" className="text-right middle emphasize">Enter promotion code of gift card</label>
        </div>
        <div className="medium-4 columns">
          <input type="text"
                 id="promo"
                 onChange={this.onPromoCodeInputChange}
                 value={this.state.promoCode}/>
        </div>
        <button onClick={this.verifyPromoCode} className="button hollow secondary">Apply</button>
      </section>
    )
  }
}
