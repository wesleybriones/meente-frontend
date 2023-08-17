import { useState } from "react";
import { useNavigate } from "react-router-dom"


export const LoginPage = () => {

  const navigate = useNavigate();

  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }

  return (
    <div className="container w-25 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h1 className="text-center">Inicio de Sesión</h1>
        <hr className="w-100 text-primary"/>

        <form>
          <div>
            <label className="col-4">Usuario:</label>
            <input 
              className="col-8 border-primary" 
              type="text"
            />
          </div>

          <div className="mt-3 mb-3">
            <label className="col-4">Contraseña:</label>
            <input 
              className="col-8 border-primary" 
              type="text"
              autoComplete="off"
            />
          </div>

        </form>
        <button 
          className="btn btn-primary w-100"
          onClick={ onLogin }
        >
          Ingresar
        </button>
    </div>
  )
}
