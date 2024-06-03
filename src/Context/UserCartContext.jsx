import React, { createContext, useContext, useState } from 'react';

const UserCartContext = createContext();

export const useUserCart = () => {
  return useContext(UserCartContext);
};

export const UserCartProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [guestCart, setGuestCart] = useState([]);

  const updateUserCartOnServer = async (user) => {
    try {
      const response = await fetch(`http://localhost:3000/Users/${user.id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error updating cart on server', error);
    }
  };

  const addToCart = (item) => {
    if (currentUser) {
      const existingItem = currentUser.cart.find(cartItem => cartItem.productId === item.productId);

      let updatedCart;
      if (existingItem) {
        updatedCart = currentUser.cart.map(cartItem =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        updatedCart = [...currentUser.cart, item];
      }

      const updatedUser = { ...currentUser, cart: updatedCart };
      setCurrentUser(updatedUser);
      updateUserCartOnServer(updatedUser);
    } else {
      const existingItem = guestCart.find(cartItem => cartItem.productId === item.productId);

      let updatedCart;
      if (existingItem) {
        updatedCart = guestCart.map(cartItem =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        updatedCart = [...guestCart, item];
      }

      setGuestCart(updatedCart);
    }
  };

  const removeFromFavorites = (productId) => {
    if (currentUser) {
      const updatedFavorites = currentUser.favorites.filter((item) => item.id !== productId);
      const updatedUser = { ...currentUser, favorites: updatedFavorites };
      setCurrentUser(updatedUser);
      updateUserCartOnServer(updatedUser);
    }
  };

  const signOut = () => {
    setCurrentUser(null);
  };

  const addToFavorites = (item) => {
    if (currentUser) {
      const updatedUser = { ...currentUser, favorites: [...(currentUser.favorites || []), item] };
      setCurrentUser(updatedUser);
      updateUserCartOnServer(updatedUser);
    }
  };

  const removeFromCart = (productId) => {
    if (currentUser) {
      const updatedUser = {
        ...currentUser,
        cart: currentUser.cart.filter((item) => item.productId !== productId),
      };
      setCurrentUser(updatedUser);
      updateUserCartOnServer(updatedUser);
    } else {
      setGuestCart((prevCart) => prevCart.filter((item) => item.productId !== productId));
    }
  };

  const updateQuantityInCart = (productId, newQuantity) => {
    if (currentUser) {
      const updatedCart = currentUser.cart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      );
      const updatedUser = { ...currentUser, cart: updatedCart };
      setCurrentUser(updatedUser);
      updateUserCartOnServer(updatedUser);
    } else {
      const updatedCart = guestCart.map((item) =>
        item.productId === productId ? { ...item, quantity: newQuantity } : item
      );
      setGuestCart(updatedCart);
    }
  };

  const clearCartAndSaveOrder = async (orderDetails, totalAmount) => {
    if (currentUser) {
      const currentDate = new Date();
      const formattedDate = currentDate.toISOString().split('.')[0];

      const newOrder = {
        orderId: Date.now().toString(),
        date: formattedDate,
        totalAmount,
        items: currentUser.cart,
      };

      const updatedUser = {
        ...currentUser,
        cart: [],
        previousPurchases: [...(currentUser.previousPurchases || []), newOrder],
      };

      setCurrentUser(updatedUser);
      await updateUserCartOnServer(updatedUser);
    } else {
      setGuestCart([]);
    }
  };

  return (
    <UserCartContext.Provider value={{
      currentUser, setCurrentUser, guestCart, addToCart, addToFavorites,
      removeFromCart, updateQuantityInCart, updateUserCartOnServer, clearCartAndSaveOrder,
      removeFromFavorites, signOut
    }}>
      {children}
    </UserCartContext.Provider>
  );
};


