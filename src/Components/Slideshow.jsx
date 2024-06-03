import React, { useState, useEffect } from 'react';
import '../Styles/Slideshow.css';
import '../Styles/Common.css';
import useFetch from '../Hooks/useFetch';
import MenuItem from './MenuItem';

const Slideshow = () => {
  const {data: menuItems, loading, error} = useFetch("http://localhost:3000/menu")
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prevuios) => (prevuios === menuItems.length - 1 ? 0 : prevuios + 1));
    }, 5000); 
    
    return () => clearInterval(timer);
  }, [menuItems.length]);

  if (!menuItems.length) {
    return <div>Loading...</div>;
  }

  return (
    <div className="slideshow-container">
      {menuItems.map((item, index) => (
        <div
          key={item.id}
          className={`slide ${index === current ? 'active' : ''}`}
        >
          {index === current && <MenuItem item={item} inSlideshow={true} />}
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
