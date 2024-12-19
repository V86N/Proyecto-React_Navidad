import {  useState, useContext } from "react";
import { UserContext } from "../../context/UserContext/UserState";
//importaciones

const Register = () => {
      const initialValue = {
        firtName: "",
        lastName: "",
        email: "",
        password: "",
        birth: ""
      };
      
      const [data, setData] = useState(initialValue);
      const {createUser} = useContext(UserContext)//traerme la función del contexto
    
     const handleOnChange = (e) => {
       setData({
          ...data,
          [e.target.name]: e.target.value,
        });
      };
      const handleSubmit = (e) => {
        e.preventDefault();
        
        createUser(data)//llamar a la función createUser y pasarle como argumento data(info del formulario)
        setData(initialValue);
      };

      return (
        <div>
          Register
          <form>
            <input
              type="text"
              name="firtName"
              value={data.firtname}
              placeholder="Introduce tu nombre"
              onChange={handleOnChange}
            />
            <input
              type="text"
              name="lastName"
              value={data.lastname}
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