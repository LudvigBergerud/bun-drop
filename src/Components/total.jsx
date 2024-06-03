import React, { useState, useEffect } from 'react';
import { useUserCart } from '../Context/UserCartContext';
import '../Styles/total.css';
import '../Styles/Common.css';

const Total = ({ openPayment }) => {
  const { currentUser, guestCart } = useUserCart();
  const [deliveryDetails, setDeliveryDetails] = useState({
    city: '',
    postNumber: '',
    streetName: ''
  });
  const [isFormValid, setIsFormValid] = useState(false);

  const DELIVERY_COST = 170;
  const cartItems = currentUser ? currentUser.cart : guestCart;

  const totalItemsCost = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalCost = totalItemsCost + DELIVERY_COST;

  useEffect(() => {
    const { city, postNumber, streetName } = deliveryDetails;
    setIsFormValid(city && postNumber && streetName && /^\d+$/.test(postNumber)); 
  }, [deliveryDetails]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'postNumber') {
      if (/^\d*$/.test(value)) { 
        setDeliveryDetails({ ...deliveryDetails, [name]: value });
      }
    } else {
      setDeliveryDetails({ ...deliveryDetails, [name]: value });
    }
  };

  return (
    <div className="total-container">
      <h2>TOTAL</h2>
      <p>Ordered Items: {totalItemsCost}KR</p>
      <p>Delivery: {DELIVERY_COST}KR</p>
      <p>Total Sum: {totalCost}KR</p>
      <button onClick={openPayment} disabled={!isFormValid} className="pay-now-button">PAY NOW</button>
      <div className="delivery-container">
        <h3>DELIVERY</h3>
        <input
          type="text"
          name="city"
          placeholder="City"
          value={deliveryDetails.city}
          onChange={handleInputChange}
          required
          pattern="[A-Za-z\s]+"
        />
        <input
          type="text"
          name="postNumber"
          placeholder="Post Number"
          value={deliveryDetails.postNumber}
          onChange={handleInputChange}
          required
          pattern="\d+"
        />
        <input
          type="text"
          name="streetName"
          placeholder="Street Name"
          value={deliveryDetails.streetName}
          onChange={handleInputChange}
          required
          pattern="[A-Za-z\s]+"
        />
      </div>
    </div>
  );
};

export default Total;