import { useState } from "react";
import { SearchFilter } from "../components"
import { useNavigate } from "react-router-dom";

export const ClientPage = () => {

  const navigate  = useNavigate();

  const clientes = [''];
  const [searchText, setSearchText] = useState('');

  const onSearchSubmit = () => {

  }

  const addCLient = () => {
    navigate('/add-client');
  }
  
  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <SearchFilter onSearchSubmit={ onSearchSubmit }/>
          <button 
            className="col-2 btn btn-outline-primary mt-2"
            onClick={ addCLient }
          >
              Agregar
          </button>
        </div>
        {
            ( clientes.length === 0 )
            ? 
                <div className="alert alert-danger mt-4">No se encontraron resultados del cliente</div>
            : 
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">#</th>
                    <th scope="col">Nombre</th>
                    <th scope="col">Dirección</th>
                    <th scope="col">Teléfono</th>
                    <th scope="col">Correo</th>
                    <th scope="col">Acción</th>
                  </tr>
                </thead>
                <tbody className="table-group-divider">
                  <tr>
                    <th scope="row">1</th>
                    <td>{ clientes[0] + ' ' + clientes[1]}</td>
                    <td>Socio Vivienda 1</td>
                    <td>+593 950178673</td>
                    <td>wesley@meente.ec</td>
                  </tr>
                </tbody>
              </table>
          }
      </div>
    </>
  )
}
