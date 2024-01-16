import { useEffect, useState } from "react";

import { ClientModal, SearchFilter } from "../components"
import { useUiStore } from "../../hooks";
import { useClientStore } from "../hooks";
//import { DeleteModal } from "../components/DeleteModal";

export const ClientPage = () => {

  const { openModal } = useUiStore();
  const { clients, setActiveClient, startDeleteClient, startLoadingClient } = useClientStore();

  const [searchText, setSearchText] = useState('');

  const onSearchSubmit = () => {
  }

  const onSelect = ( client ) => {
    setActiveClient( client );
    openModal();
  }

  const addCLient = () => {
    setActiveClient({
      identification_ruc: '',
      names: '',
      surnames: '',
      city: '',
      direction: '',
      genre: '',
      phone: '',
      mail: '',
      state: 'Activo',
      create_date: new Date(),
      update_date: new Date()
    })
    openModal();
  }
  
  const handleDeleteClient = ( client ) => {
    setActiveClient( client );
    startDeleteClient();
  }

  const showReportByClient = ( client ) => {
    setActiveClient( client );
    //TODO: filtrar reports by cliente
  }

  useEffect(() => {
    startLoadingClient();
  }, [])
  
  
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
              <table className="table text-center">
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
                <tbody className="table-group-divider text-center">
                  {
                    clients.map( ( client, index ) => (
                    <tr key={index} >
                      <th scope="col">{ index + 1 }</th>
                      <td>{ client.names + ' ' + client.surnames }</td>
                      <td>{ client.direction }</td>
                      <td>{ client.phone }</td>
                      <td>{ client.mail }</td>
                      <td className="d-flex justify-content-between pb-3">
                        <i className="fa-solid fa-file-invoice" onClick={ () => showReportByClient( client ) }></i>
                        <i className="fa-solid fa-pen-to-square" onClick={ () => onSelect( client ) }></i>
                        <i className="fa-solid fa-trash" onClick={ () => handleDeleteClient( client ) }></i>
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
