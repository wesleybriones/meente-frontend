import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import { useForm } from "../../hooks";
import { useAuthStore } from "../hooks";

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';

const loginFormFields = {
  user:     '',
  password: ''
}

export const LoginPage = () => {

  const navigate = useNavigate();
  const { startLogin, errorMessage } = useAuthStore();
  const { user, password, onInputChange } = useForm( loginFormFields );

  /*const onLogin = () => {
    navigate('/', {
      replace: true
    });
  }*/

  const onSubmit = ( event ) => {
    event.preventDefault();

    startLogin({ user: user, password: password })
  }

  useEffect(() => {
    if ( errorMessage !== undefined ){
      Swal.fire('Error en la autentificación', errorMessage, 'error')
    }
  }, [errorMessage])
  

  return (
    <div className="container w-50 d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
        <h1 className="text-center">Inicio de Sesión</h1>
        <hr className="w-100 text-primary"/>

        <form onSubmit={ onSubmit }>
          <div className="d-flex align-items-center">
            <label className="text-center me-4">Usuario:</label>
            <input 
              className="border-primary ms-2 form-control" 
              type="text"
              name="user"
              value={ user }
              onChange={ onInputChange }
            />
          </div>

          <div className="mt-3 mb-3 d-flex align-items-center">
            <label className="text-center">Contraseña:</label>
            <input 
              className="border-primary ms-2 form-control" 
              type="password"
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
