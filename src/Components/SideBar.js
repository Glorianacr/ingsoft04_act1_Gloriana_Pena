import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/styles.css';

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={isOpen ? "sidebar open" : "sidebar"}>
      <div className="menu-toggle" onClick={toggleSidebar}>
        <div className={isOpen ? "hamburger open" : "hamburger"}></div>
      </div>
      <h2>Menú</h2>
      <ul>
        <li><Link to="/" onClick={toggleSidebar}>Inicio</Link></li>
        <li><Link to="/categorias" onClick={toggleSidebar}>Categorías</Link></li>
        <li><Link to="/favoritos" onClick={toggleSidebar}>Favoritos</Link></li>
        <li><Link to="/historial" onClick={toggleSidebar}>Historial</Link></li>
      </ul>
    </div>
  );
};

export default SideBar;