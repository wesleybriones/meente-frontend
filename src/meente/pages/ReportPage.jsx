import { useState } from "react"
import { ReportModal, SearchFilter } from "../components";
import { useUiStore } from "../../hooks";


export const ReportPage = () => {

  const { openModal } = useUiStore();
  const [busqueda, setBusqueda] = useState();

  const addReport = () => {
    openModal();
  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <SearchFilter busqueda={ busqueda } setBusqueda={ setBusqueda } />
        <button 
          className="col-2 btn btn-outline-primary mt-2"
          onClick={ addReport }
        >
            Nuevo
        </button>
      </div>

      <table className="table">
        <thead>
          <tr>
            <th scope="col">#Reporte</th>
            <th scope="col">Cliente</th>
            <th scope="col">Atendido por</th>
            <th scope="col">Emision</th>
            <th scope="col">Expira</th>
            <th scope="col">Observaciones</th>
          </tr>
        </thead>
        <tbody className="table-group-divider">
          <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          
        </tbody>
      </table>

      <ReportModal />
    </>
  )
}
