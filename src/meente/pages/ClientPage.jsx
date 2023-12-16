import { useState } from "react";

import { ClientModal, SearchFilter } from "../components"
import { useUiStore, useClientStore } from "../../hooks";

export const ClientPage = () => {

  const { openClientModal } = useUiStore();
  const { clients, setActiveClient } = useClientStore();

  const [searchText, setSearchText] = useState('');

  const onSearchSubmit = () => {
  }

  const onSelect = ( client ) => {
    setActiveClient( client );
    openClientModal();
  }

  const addCLient = () => {
    openClientModal();
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
            ( clients.length === 0 )
            ? 
            <>
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
              </table>
              <div className="alert alert-danger mt-4">No se encontraron resultados del cliente</div>
            </>
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
                  {
                    clients.map( ( client, index ) => (
                    <tr key={index} >
                      <th scope="col">{ index + 1 }</th>
                      <td>{ client.names + ' ' + client.surnames }</td>
                      <td>{ client.direction }</td>
                      <td>{ client.phone }</td>
                      <td>{ client.mail }</td>
                      <td>
                        <i className="fa-solid fa-pen-to-square" onClick={ () => onSelect( client ) }></i>
                      </td>
                    </tr>
                    ))
                  }
                </tbody>
              </table>
          }
          <ClientModal />
      </div>
    </>
  )
}
