import React from 'react';
import '../Styles/OrderConfirmation.css'; 
import '../Styles/Common.css';

const OrderConfirmation = ({ orderDetails, totalAmount, closeConfirmation }) => {
  const estimatedDeliveryTime = new Date(Date.now() + 40 * 60000).toLocaleTimeString();
  const estimatedDeliveryDate = new Date(Date.now() + 40 * 60000).toLocaleDateString();

  return (
    <div className="overlay">
      <div className="modal-content">
        <button className="close-button" onClick={closeConfirmation}>X</button>
        <h2>ORDER CONFIRMATION</h2>
        <p>Thank you for ordering with Bun Drop!</p>
        <div className='order-list'>
        <ul>
          {orderDetails.map((item) => (
            <li key={item.productId}>
                <span>Qty: {item.quantity}</span>
              <img src={item.image} alt={item.productName} />
              <p>{item.productName}</p>

            </li>
          ))}
        </ul>
        </div>
        <p>Estimated Delivery: {estimatedDeliveryTime}, {estimatedDeliveryDate}</p>
        <p>Total Amount Paid: {totalAmount}KR</p>
      </div>
    </div>
  );
};

export default OrderConfirmation;

