import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <h1 className="logo">Streaming App</h1>
        <nav className="nav">
          <ul>
            <li><a href="#">Inicio</a></li>
            <li><a href="#">Películas</a></li>
            <li><a href="#">Series</a></li>
            <li><a href="#">Mi Lista</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
