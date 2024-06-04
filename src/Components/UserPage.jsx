import React from 'react';
import { useUserCart } from '../Context/UserCartContext';
import '../Styles/UserPage.css';
import '../Styles/Common.css';

const UserPage = ({ onClose }) => {
  const { currentUser, signOut, setCurrentUser } = useUserCart();

  if (!currentUser) return null;

  const handleSignOut = () => {
    signOut();
    onClose();
  };

  const handleRemoveFavorite = (productId) => {
    const updatedFavorites = currentUser.favorites.filter(item => item.id !== productId );
    const updatedUser = { ...currentUser, favorites: updatedFavorites };
    setCurrentUser(updatedUser);
  };

  return (
    <div className="user-page-container">
      <div className="user-page-content">
        <button onClick={onClose} className="close-button">X</button>
        <h2>{currentUser.username}'s Page</h2>
        <button onClick={handleSignOut} className="sign-out-button">Sign Out</button>

    <div>
        <h3>Previous Orders</h3>
        <div className="previous-orders">
          {currentUser.previousPurchases && currentUser.previousPurchases.length > 0 ? (
            <ul>
              {currentUser.previousPurchases.map((order) => (
                <li key={order.orderId}>
                  <div>
                    <span><strong>Order ID:</strong> {order.orderId}, </span>
                    <span><strong>Date:</strong> {order.date}, </span>
                    <span><strong>Total:</strong> {order.totalAmount}KR </span>
                  </div>
                  <ul>
                    {order.items.map((item) => (
                      <li key={item.productId}>
                        <span>{item.productName}</span>
                        <span> {item.quantity} x {item.price}KR</span>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          ) : (
            <p>No previous orders</p>
          )}
    </div>
        
        </div>
          <div>
              <h3>Favorites</h3>
              <div className="favorites">
                {currentUser.favorites && currentUser.favorites.length > 0 ? (
                  <ul>
                    {currentUser.favorites.map((item) => (
                      <li key={item.Id}>
                        <div className="item-details">
                          <img src={item.image} alt={item.productName} />
                          <span>{item.title}</span>
                          <span>{item.price}KR</span>
                        </div>
                        <button onClick={() => handleRemoveFavorite(item.id)}>
                          <img src="https://github.com/LudvigBergerud/bun-drop/blob/main/public/Images/Trashcan2.png?raw=true" alt="Delete" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p>No favorite items</p>
                )}
              </div>
            </div>   
      </div>
    </div>
  );
};

export default UserPage;