import React, { Component } from "react";

class Cart extends Component {
  state = {
    cartItems: [],
  };

  addItemToCart = (item) => {
    this.setState(prevState => ({
      cartItems: [...prevState.cartItems, item],
    }));
  };

  removeItemFromCart = (itemId) => {
    const { cartItems } = this.state;
    const newCartItems = cartItems.filter(item => item.id !== itemId);
    this.setState({ cartItems: newCartItems });
  };

  calculateTotalPrice = () => {
    const { cartItems } = this.state;
    const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);
    return totalPrice;
  };

  render() {
    const { cartItems, totalPrice } = this.state;
    return (
      <div>
        <h1>Cart</h1>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index}>
              {item.name} ({item.price})
              <button onClick={() => this.removeItemFromCart(item.id)}>Remove</button>
            </li>
          ))}
        </ul>
        <h2>Total Price: {totalPrice}</h2>
      </div>
    );
  }
}

export default Cart;
