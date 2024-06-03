import React, { useState } from 'react';
import PopupContent from './PopUpContent'; 
import '../Styles/BottomNavbar.css';
import '../Styles/Common.css';

function BottomNavbar() {
    const [popupContent, setPopupContent] = useState(null); 


    const handleNavbarLinkClick = (content) => {
        setPopupContent(content);
    };

    return ( 
        <div className="bottom-navbar">          
            <div className="navbar-links">            
                <a href="#" onClick={() => handleNavbarLinkClick("About Us")}>ABOUT US</a>
                <a href="#" onClick={() => handleNavbarLinkClick("Work")}>WORK</a>
                <a href="#" onClick={() => handleNavbarLinkClick("Sustainability")}>SUSTAINABILITY</a>
                </div>
            {popupContent && <PopupContent content={popupContent} onClose={() => setPopupContent(null)} />}
        </div> 
    );
}

export default BottomNavbar;
