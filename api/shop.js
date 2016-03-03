/**
 * Mocking client-server processing
 */
import _cart from './cart.json';

const TIMEOUT = 100;

export default {
  getProducts(cb, timeout) {
    setTimeout(() => cb(_cart), timeout || TIMEOUT)
  }
}
