import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actionCreators from '../actions';
import {bindActionCreators} from 'redux';
import ProductList from '../components/ProductList';
import HelpArea from '../components/HelpArea';
import CartSummary from '../components/CartSummary'
import normalize from 'normalize.css';
import styles from '../styles/app.css';

class App extends Component {
  render() {
    const {products, actions} = this.props;

    return (
      <main className="row">
        <h1>Your Shopping Bag</h1>

        <section>
          <ProductList products={products}
                       total={0}
                       updateQuantity={actions.updateProductQuantity}
                       removeProduct={actions.removeProduct}/>
        </section>

        <footer>
          <HelpArea/>

          <CartSummary products={products}
                       minShipLimit={50}
                       shipCharges={7}
            /*Shipping charges assumed for simplicity*/
          />
        </footer>
      </main>
    )
  }
}

function mapStateToProps(state) {
  return {
    products: state.cart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actionCreators, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
