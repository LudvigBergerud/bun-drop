import React, { useState } from 'react';
import TopNavbar from './Components/TopNavbar';
import BottomNavbar from './Components/BottomNavbar';
import SignUpSignIn from './Components/SignUpSignIn';
import Slideshow from './Components/Slideshow';
import Cart from './Components/Cart';
import Menu from './Components/Menu';
import UserPage from './Components/UserPage';
import { UserCartProvider } from './Context/UserCartContext';

function App() {
  const [showSignIn, setShowSignIn] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showSlideshow, setShowSlideshow] = useState(true);
  const [showMenu, setShowMenu] = useState(false);
  const [showUserPage, setShowUserPage] = useState(false);
  const [navbarOpen, setNavbarOpen] = useState(false); 

  const handleNavbarToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleCartButtonClick = () => {
    setShowCart(true);
    setShowSlideshow(false);
    setShowMenu(false);
    setShowUserPage(false);
  };

  const handleHomeButtonClick = () => {
    setShowCart(false);
    setShowSlideshow(true);
    setShowMenu(false);
    setShowUserPage(false);
  };

  const handleMenuButtonClick = () => {
    setShowMenu(true);
    setShowSlideshow(false);
    setShowCart(false);
    setShowUserPage(false);
  };

  const handleUserButtonClick = () => {
    setShowUserPage(!showUserPage);
  };

  return (
    < UserCartProvider>
      <div className="App">
        <header className="App-header">
          <TopNavbar
            setShowSignIn={setShowSignIn}
            onHomeButtonClick={handleHomeButtonClick}
            onCartButtonClick={handleCartButtonClick}
            onMenuButtonClick={handleMenuButtonClick}
            onUserButtonClick={handleUserButtonClick}
            navbarOpen={navbarOpen}
            handleNavbarToggle={handleNavbarToggle}
          />
          {showSignIn && <SignUpSignIn onClose={() => setShowSignIn(false)} />}
          <div className="content-container">
            {showSlideshow && <Slideshow />}
            {showCart && <Cart />}
            {showMenu && <Menu />}
            {showUserPage && <UserPage onClose={() => setShowUserPage(false)} />}
          </div>
        </header>
        <BottomNavbar
          onCartButtonClick={handleCartButtonClick}
          onHomeButtonClick={handleHomeButtonClick}
        />
      </div>
    </ UserCartProvider>
  );
}

export default App;
