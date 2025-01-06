import React, { useContext, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../../context/UserContext/UserState';
import { ProductContext } from '../../context/ProductContext/ProductState';

const Header = () => {
  const { user, logout } = useContext(UserContext);
  const { cart } = useContext(ProductContext);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const navigate = useNavigate();

  const logoutUser = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          Airsoft Elite
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav"> 
          <ul className="navbar-nav me-auto">
           <li className="nav-item">
              <Link className="nav-link" to="/products">Productos</Link>
            </li>
          </ul>

          <ul className="navbar-nav">
            {user ? (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/cart">
                    <i className="bi bi-cart"></i>
                    <span className="badge bg-light text-dark ms-1">
                      {cart.length}
                    </span>
                  </Link>
                </li>
                <li className="nav-item">
                <span className="nav-link text-white fw-bold"> 
                    {user.firtName}
                  </span>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/profile">Perfil</Link>
                </li>
                <li className="nav-item">
                  <button className="nav-link btn btn-link" onClick={logoutUser}>
                    Desconectar
                  </button>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to="/register">Registro</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/login">Conectar</Link>
                </li>
              </>
            )}
          </ul>
        </div>
       </div> 
    </nav>
  );
};

export default Header;


