import { DeviceModal, SearchFilter } from "../components";
import { useUiStore } from "../../hooks";
import { useDeviceStore } from "../hooks";


export const DevicePage = () => {

  const { openModal } = useUiStore();
  const { devices, setActiveDevice, startDeleteDevice } = useDeviceStore();
  
  const onSearchSubmit = () => {
    console.log('buscar');
  }

  const onSelect = ( device ) => {
    setActiveDevice( device );
    openModal();
  }

  const addDevice = () => {
    setActiveDevice({
      serie: '',
      description: '',
      id_client: '', 
      image: ''
    });
    openModal();
  }

  const handleDeleteDevice = ( device ) => {
    setActiveDevice( device );
    startDeleteDevice();
  }

  const showReportByDevice = ( device ) => {
    setActiveDevice( device );
    //TODO: filtrar reports by device
  }


  return (
    <>
      <div>
        <div className="d-flex justify-content-between">
          <SearchFilter onSearchSubmit={ onSearchSubmit }/>
          <button 
            className="col-2 btn btn-outline-primary mt-2"
            onClick={ addDevice }
          >
              Agregar
          </button>
        </div>
        {
          ( devices.length === 0 )
          ? 
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col">Descripción</th>
                  <th scope="col">Serie</th>
                  <th scope="col">Cliente</th>
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
                  <th scope="col">Descripción</th>
                  <th scope="col">Cliente</th>
                  <th scope="col">Serie</th>
                  <th scope="col">Acción</th>
                </tr>
              </thead>
              <tbody className="table-group-divider text-center">
                {
                  devices.map( ( device, index ) => (
                    <tr key={index} >
                      <th scope="col">{ index + 1 }</th>
                      <td>{ device.description }</td>
                      <td>{ device.id_client }</td>
                      <td>{ device.serie }</td>
                      <td className="d-flex justify-content-between pb-3">
                        <i className="fa-solid fa-file-invoice" onClick={ () => showReportByDevice( device ) }></i>
                        <i className="fa-solid fa-pen-to-square" onClick={ () => onSelect( device ) }></i>
                        <i className="fa-solid fa-trash" onClick={ () => handleDeleteDevice( device ) }></i>
                      </td>
                    </tr>
                    ))
                } 
              </tbody>
            </table>
        }
        <DeviceModal />
      </div>
    </>
  )
}
