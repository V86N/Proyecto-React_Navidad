import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-1">
      <div className="container">
        <p className="mb-0">&copy; {new Date().getFullYear()} Mi Website. Todos los derechos reservados.</p>
        <ul className="list-inline mt-2">
          <li className="list-inline-item mx-2">
            <a className="text-white text-decoration-none">Política de privacidad</a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="text-white text-decoration-none">Términos del servicio</a>
          </li>
          <li className="list-inline-item mx-2">
            <a className="text-white text-decoration-none">Contáctanos</a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
