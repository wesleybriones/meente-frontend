import { useState } from "react"
import { SearchFilter } from "../components/SearchFilter";


export const ReportPage = () => {

  const [busqueda, setBusqueda] = useState();


  return (
    <>
      <SearchFilter busqueda={ busqueda } setBusqueda={ setBusqueda } />
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
    </>
  )
}
