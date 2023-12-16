import { useState } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks";


export const LoginPage = () => {

  const navigate = useNavigate();

  const { email, password, onInputChange } = useForm({
    email: 'wesley@meente.ec',
    password: '123456'
  });

  /*const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }*/

  const onSubmit = ( event ) => {
    event.preventDefault();

    console.log({ email, password });
  }

  return (
    <div className="container w-25 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h1 className="text-center">Inicio de Sesión</h1>
        <hr className="w-100 text-primary"/>

        <form onSubmit={ onSubmit }>
          <div>
            <label className="col-4">Usuario:</label>
            <input 
              className="col-8 border-primary" 
              type="text"
              name="email"
              value={ email }
              onChange={ onInputChange }
            />
          </div>

          <div className="mt-3 mb-3">
            <label className="col-4">Contraseña:</label>
            <input 
              className="col-8 border-primary" 
              type="text"
              autoComplete="off"
              name="password"
              value={ password }
              onChange={ onInputChange }
            />
          </div>

          <button 
            className="btn btn-primary w-100"
            type="submit"
          >
            Ingresar
          </button>
        </form>
    </div>
  )
}
