import { useState, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";

const Register = () => {
  const initialValue = {
    firtName: "",
    lastName: "",
    email: "",
    password: "",
    birth: ""
  };

  const [data, setData] = useState(initialValue);
  const { createUser } = useContext(UserContext);

  const handleOnChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(data);
    setData(initialValue);
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Registro</h3>
              <form>
                <div className="mb-3">
                  <input
                    type="text"
                    name="firtName"
                    value={data.firtName}
                    className="form-control"
                    placeholder="Introduce tu nombre"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    name="lastName"
                    value={data.lastName}
                    className="form-control"
                    placeholder="Introduce tu apellido"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    className="form-control"
                    placeholder="Introduce tu correo electrónico"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    name="password"
                    value={data.password}
                    className="form-control"
                    placeholder="Introduce una contraseña"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="mb-3">
                  <input
                    type="date"
                    name="birth"
                    value={data.birth}
                    className="form-control"
                    onChange={handleOnChange}
                  />
                </div>
                <div className="d-grid">
                  <button onClick={handleSubmit} className="btn btn-primary">
                    Enviar
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
