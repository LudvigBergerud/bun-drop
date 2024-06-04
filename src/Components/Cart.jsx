import React, { useState } from 'react';
import { useUserCart } from '../Context/UserCartContext';
import Total from './total';
import Payment from './Payment';
import OrderConfirmation from './OrderConfirmation';
import '../Styles/Cart.css';
import '../Styles/Common.css';

const Cart = () => {
  const { currentUser, guestCart, updateQuantityInCart, removeFromCart, clearCartAndSaveOrder } = useUserCart();
  const [isPaymentVisible, setIsPaymentVisible] = useState(false);
  const [isOrderConfirmationVisible, setIsOrderConfirmationVisible] = useState(false);
  const [orderDetails, setOrderDetails] = useState([]);
  const [totalAmount, setTotalAmount] = useState(0);

  const handleQuantityChange = (productId, quantity) => {
    if (quantity < 1) return;
    updateQuantityInCart(productId, quantity);
  };

  const cartItems = currentUser ? currentUser.cart : guestCart;

  const handlePayment = async (paymentInfo) => {
    if (cartItems.length === 0) {
      alert("Your cart is empty. Add items to the cart before proceeding to payment.");
      return;
    }

    const calculatedTotalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0) + 170;
    setOrderDetails(cartItems);
    setTotalAmount(calculatedTotalAmount);
    setIsPaymentVisible(false);
    setIsOrderConfirmationVisible(true);
    await clearCartAndSaveOrder(cartItems, calculatedTotalAmount);
  };

  const closePayment = () => {
    setIsPaymentVisible(false);
  };

  const closeConfirmation = () => {
    setIsOrderConfirmationVisible(false);
  };

  return (
    <div className="cart-page-container">
      <div className="cart-container">
        <h2>CART</h2>
          <div className="cart-item-container">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              <ul>
                {cartItems.map((item) => (
                  <li key={item.productId}>
                    <div className="cart-item-info">
                      <div className="cart-item-quantity">
                        <button onClick={() => handleQuantityChange(item.productId, item.quantity - 1)}>-</button>
                        <input type="number" value={item.quantity} readOnly />
                        <button onClick={() => handleQuantityChange(item.productId, item.quantity + 1)}>+</button>
                      </div>
                      <img src={item.image} alt={item.productName} />
                      <div className='item-text'>
                      <span>{item.productName}</span>
                      <span>{item.price}KR/Item</span>
                      </div>
                    </div>
                    <button className="cart-item-delete" onClick={() => removeFromCart(item.productId)}>
                      <div className="delete-icon-background">
                        <img src="https://github.com/LudvigBergerud/bun-drop/blob/main/public/Images/Trashcan2.png?raw=true" alt="Delete" />
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
      </div>
      <Total openPayment={() => setIsPaymentVisible(true)} />
      {isPaymentVisible && (
        <div className="overlay">
          <div className="payment-container">
            <Payment
              totalAmount={totalAmount}
              handlePayment={handlePayment}
              closePayment={closePayment}
            />
          </div>
        </div>
      )}
      {isOrderConfirmationVisible && (
        <div className="overlay">
          <div className="payment-container">
            <OrderConfirmation
              orderDetails={orderDetails}
              totalAmount={totalAmount}
              closeConfirmation={closeConfirmation}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;

