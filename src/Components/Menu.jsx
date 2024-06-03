import React, { useState, useEffect } from 'react';
import '../Styles/Menu.css';
import '../Styles/Common.css';
import MenuItem from './MenuItem';
import useFetch from '../Hooks/useFetch';

const Menu = () => {
  const {data: menuItems, loading, error} = useFetch("http://localhost:3000/menu")
  const [selectedCategory, setSelectedCategory] = useState('ALL');
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ['ALL', 'Burgers', 'Sides', 'Dips', 'Desserts', 'Drinks'];

  const filteredItems =
    selectedCategory === 'ALL'
      ? menuItems
      : menuItems.filter((item) => item.category.toLowerCase() === selectedCategory.toLowerCase());

  const handleItemClick = (item) => {
    setSelectedItem(item);
    document.body.style.overflow = 'hidden';
  };

  const handleBackClick = () => {
    setSelectedItem(null);
    document.body.style.overflow = ''; 
  };

  return (
    <div className="menu-container">
      <div className="menu-sidebar">
        <h3>MENU</h3>
        {categories.map((category) => (
          <div key={category} onClick={() => setSelectedCategory(category)}>
            {category.toUpperCase()}
          </div>
        ))}
      </div>
      <div className="menu-items">
        {filteredItems.map((item) => (
          <div key={item.id} className="menu-item-preview" onClick={() => handleItemClick(item)}>
            <img src={item.image} alt={item.title} className="menu-item-preview-image" />
            <p>{item.title}</p>
          </div>
        ))}
        {selectedItem && (
          <div className="selected-item-overlay" onClick={handleBackClick}>
            <div className="popup">
              <button className="close-button" onClick={handleBackClick}>✖</button>
              <MenuItem item={selectedItem} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Menu;

