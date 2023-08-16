
//import logo_right from '../../public/'
export const HomePage = () => {
  return (
    <div className="container">
      <div>
        <img src="../assets/logo_exel.jpg" class="rounded float-start img-home-logo" alt="..."/>
      </div>
      <div className="container-subtitle">

        <button className="options-menu">
          Home
        </button>
        
        <select class="form-select form-select-sm options-menu" aria-label=".form-select-sm example">
          <option selected>Meente</option>
          <option value="1">Empresa</option>
          <option value="2">Historia</option>
        </select>

        <select class="form-select form-select-sm options-menu" aria-label=".form-select-sm example">
          <option selected>Servicios</option>
          <option value="1">Macbook</option>
          <option value="2">Macbook Pro</option>
          <option value="3">iMac</option>
          <option value="4">Mac Pro</option>
        </select>

        <select class="form-select form-select-sm options-menu" aria-label=".form-select-sm example">
          <option selected>Store</option>
          <option value="1">Portatiles</option>
          <option value="2">Escritorio</option>
          <option value="3">Partes</option>
        </select>

        <button className="options-menu">
          Contactosam
        </button>
      </div>
    </div>
  )
}
