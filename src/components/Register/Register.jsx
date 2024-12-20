import {  useState, useContext } from "react";
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
      const {createUser} = useContext(UserContext)
    
     const handleOnChange = (e) => {
       setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        
        createUser(data)
        setData(initialValue);
      };

      return (
        <div>
          Register
          <form>
            <input
              type="text"
              name="firtName"
              value={data.firtName}
              placeholder="Introduce tu nombre"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="lastName"
              value={data.lastName}
              placeholder="Introduce tu apellido"
              onChange={handleOnChange}
            />
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Introduce tu correo electronico"
              onChange={handleOnChange}
            />
            <input
              type="password"
              name="password"
              value={data.password}
              placeholder="Introduce una contraseña"
              onChange={handleOnChange}
            />
              <input
              type="date"
              name="birth"
              value={data.birth}
              placeholder="Introduce tu fecha cumpleaños"
              onChange={handleOnChange}
            />
            <button onClick={handleSubmit}>
              Enviar
            </button>
            <br />
           </form>
        </div>
      );
    };
  
 

export default Register