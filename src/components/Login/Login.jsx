/*import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Login.scss"

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <div className="card shadow-sm p-4" style={{ width: "400px" }}>
        <h3 className="text-center mb-4">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              id="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;*/

import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext/UserState";
import { useNavigate } from "react-router-dom";
import "./Login.scss";

const Login = () => {
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(data);
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <h3 className="login-title">Iniciar Sesión</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email" className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className="form-input"
              id="email"
              name="email"
              value={data.email}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="form-label">Contraseña</label>
            <input
              type="password"
              className="form-input"
              id="password"
              name="password"
              value={data.password}
              onChange={handleOnChange}
              required
            />
          </div>
          <div className="form-button">
            <button type="submit" className="btn-submit">
              Enviar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;


