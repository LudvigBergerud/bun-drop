import React, { useState, useEffect } from 'react';
import { useUserCart } from '../Context/UserCartContext';
import '../Styles/TopNavbar.css';
import '../Styles/Common.css';

function TopNavbar({ setShowSignIn, onHomeButtonClick, onCartButtonClick, onMenuButtonClick, onUserButtonClick }) {
  const { currentUser } = useUserCart();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleLinkClick = (callback) => {
    setNavbarOpen(false);
    if (callback) callback();
  };

  const closeNavbar = (e) => {
    if (!e.target.closest('.navbar') && navbarOpen) {
      setNavbarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeNavbar);
    return () => {
      document.removeEventListener('click', closeNavbar);
    };
  }, [navbarOpen]);

  return (
    <div className="navbar">
      <div className="navbar-brand" onClick={() => handleLinkClick(onHomeButtonClick)}>
        <div className="navbar-brand-img">
          <img src="https://github.com/LudvigBergerud/bun-drop/blob/main/public/Images/BundropLogo.png?raw=true" alt="Bundrop Logo" />
        </div>
        <div className="navbar-brand-text">
          <h1>BUN</h1>
          <h2>DROP</h2>
        </div>
      </div>
      <div className="nav-symbol" onClick={handleNavbarToggle}>☰</div>
      <div className={`navbar-links ${navbarOpen ? 'active' : ''}`}>
        <a href="#" onClick={() => handleLinkClick(onHomeButtonClick)}>HOME</a>
        <a href="#" onClick={() => handleLinkClick(onMenuButtonClick)}>MENU</a>
        <a href="#" onClick={() => handleLinkClick(onCartButtonClick)}>CART</a>
        <div className="user-container">
          <img src="https://github.com/LudvigBergerud/bun-drop/blob/main/public/Images/Userlogo.png?raw=true" alt="User Logo" className="user-logo" onClick={() => handleLinkClick(onUserButtonClick)} />
          {currentUser ? (
            <a href="#" onClick={() => handleLinkClick(onUserButtonClick)}>{currentUser.username}</a>
          ) : (
            <a href="#" onClick={() => {
              handleLinkClick();
              setShowSignIn(true);
            }}>SIGN UP</a>
          )}
        </div>
      </div>
    </div>
  );
}

export default TopNavbar;