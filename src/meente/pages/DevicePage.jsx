import { SearchFilter } from "../components";



export const DevicePage = () => {

  const onSearchSubmit = () => {
    console.log('buscar');
  }

  const addDevide = () => {

  }

  return (
    <>
      <div className="d-flex justify-content-between">
        <SearchFilter onSearchSubmit={ onSearchSubmit }/>
        <button 
          className="col-2 btn btn-outline-primary mt-2"
          onClick={ addDevide }
        >
            Agregar
        </button>
      </div>
      {
        
      }
    </>
  )
}
