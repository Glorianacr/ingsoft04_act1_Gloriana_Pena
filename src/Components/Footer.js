import React from 'react';


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <nav className="footer-nav">
        <p className='footer-nav-year'>&copy; {new Date().getFullYear()} Streaming App. Todos los derechos reservados.</p>
          <ul>
            <li><a href="#">Términos de servicio</a></li>
            <li><a href="#">Política de privacidad</a></li>
            <li><a href="#">Contáctanos</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
