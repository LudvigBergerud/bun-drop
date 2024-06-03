import React from 'react';
import { useUserCart } from '../Context/UserCartContext';
import '../Styles/MenuItem.css';
import '../Styles/Common.css';

const MenuItem = ({ item, onBack, showBackButton = true, inSlideshow = false }) => {
  const { addToCart, currentUser, addToFavorites } = useUserCart();

  const handleAddToCart = () => {
    addToCart({
      productId: item.id,
      productName: item.title,
      quantity: 1,
      price: item.price,
      image: item.image
    });
  };

  const handleAddToFavorites = () => {
    addToFavorites(item);
  };

  return (
    <div className="menu-item">
      {showBackButton && !inSlideshow && <button onClick={onBack}>✖</button>}
      <img src={item.image} alt={item.title} className="menu-item-image" />
      <h2>{item.title}</h2>
      <p><strong>Price:</strong> {item.price}kr</p>
      <p>{item.description}</p>
      <div className="menu-item-buttons">
        <button onClick={handleAddToCart}>ADD TO CART</button>
        {currentUser && <button onClick={handleAddToFavorites}>FAVORITE</button>}
      </div>
    </div>
  );
};

export default MenuItem;



