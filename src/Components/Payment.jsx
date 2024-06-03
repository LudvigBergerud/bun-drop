import React, { useState } from 'react';
import '../Styles/Payment.css';
import '../Styles/Common.css';

const Payment = ({ totalAmount, handlePayment, closePayment }) => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [cardDetails, setCardDetails] = useState({
    name: '',
    cardNumber: '',
    expiryDate: '',
    securityCode: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phoneNumber') {
      if (/^\d*$/.test(value)) { 
        setPhoneNumber(value);
      }
    } else if (name === 'cardNumber' || name === 'expiryDate' || name === 'securityCode') {
      if (/^\d*$/.test(value)) {  
        setCardDetails({ ...cardDetails, [name]: value });
      }
    } else {
      setCardDetails({ ...cardDetails, [name]: value });
    }
  };

  const isSwish = paymentMethod === 'swish';
  const isCard = paymentMethod === 'card';

  const isFormValid = () => {
    if (isSwish) {
      return phoneNumber.length === 10;
    }
    if (isCard) {
      const { name, cardNumber, expiryDate, securityCode } = cardDetails;
      return (
        name.length > 0 &&
        cardNumber.length === 16 &&
        expiryDate.length === 4 && 
        securityCode.length === 3 
      );
    }
    return false;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isFormValid()) {
      handlePayment({ paymentMethod, phoneNumber, cardDetails });
    } else {
      alert('Please fill in all required fields correctly.');
    }
  };

  return (
    <div className="payment-modal">
      <div className="payment-content">
        <button className="close-button" onClick={closePayment}>×</button>
        <h2>Payment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>
              <input
                type="radio"
                value="swish"
                checked={isSwish}
                onChange={() => setPaymentMethod('swish')}
              />
              Swish
            </label>
            <label>
              <input
                type="radio"
                value="card"
                checked={isCard}
                onChange={() => setPaymentMethod('card')}
              />
              Card
            </label>
          </div>
          {isSwish && (
            <div className="form-group">
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={phoneNumber}
                onChange={handleInputChange}
                required
                pattern="\d{10}"
                maxLength={10}
              />
            </div>
          )}
          {isCard && (
            <>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name on Card"
                  value={cardDetails.name}
                  onChange={handleInputChange}
                  required
                  pattern="[A-Za-z\s]+"
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="cardNumber"
                  placeholder="Card Number"
                  value={cardDetails.cardNumber}
                  onChange={handleInputChange}
                  required
                  pattern="\d{16}"
                  maxLength={16}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="expiryDate"
                  placeholder="Expiry Date (MMYY)"
                  value={cardDetails.expiryDate}
                  onChange={handleInputChange}
                  required
                  pattern="\d{4}"
                  maxLength={4}
                />
              </div>
              <div className="form-group">
                <input
                  type="text"
                  name="securityCode"
                  placeholder="Security Code"
                  value={cardDetails.securityCode}
                  onChange={handleInputChange}
                  required
                  pattern="\d{3}"
                  maxLength={3}
                />
              </div>
            </>
          )}

          <div className="form-actions">
            <button type="submit" className="submit-button">Submit Payment</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Payment;
