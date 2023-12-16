import { useMemo, useState } from 'react';
import Modal from 'react-modal'

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore } from '../../hooks';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
};

Modal.setAppElement('#root');

export const ClientModal = () => {

    const { isClientModalOpen, closeClientModal } = useUiStore();
    const [formSubmitted, setFormSubmitted] = useState(false);

    const [formValue, setFormValue] = useState({
        identification_ruc: '0950178673',
        names: 'Wesley',
        surnames: 'Briones',
        city: 'Guayaquil',
        direction: 'Av Socio Vivienda 1 Mz 4D Solar 5',
        genre: 'Masculino',
        phone: '0990508849',
        mail: 'wesley@meente.ec',
        state: 'Activo',
        create_date: new Date(),
        update_date: new Date()
    })

    const submittedForm = useMemo(() => {
        if ( !formSubmitted ) return '';

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(formValue.mail);
        return ( isValidEmail ) 
        ? 'is-valid' 
        : 'is-invalid'
    }, [ formValue.mail, formSubmitted ])
    
    const onInputChanged = ({ target }) => {
        setFormValue({
          ...formValue,
          [target.name]: target.value
        })
    }

    const onCloseModal = () => {
        closeClientModal();
    }
      
    const onSubmit = ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        if ( formValue.identification_ruc.length < 10 || formValue.identification_ruc.length > 13 ){
          Swal.fire('Cédula o RUC incorrecto', 'Ingresar un número de cédula válido', 'error')
          return ;
        }
        console.log(formValue);
      }
    

  return (
    <Modal
        isOpen={ isClientModalOpen }
        onRequestClose={ onCloseModal }
        style={customStyles}
        className="modal"
        overlayClassName="modal-fondo"
        closeTimeoutMS={ 200 }
    >
        <div className="container mt-4">
        <h3 className='text-center'>Registro del Cliente</h3>
        <hr />

        <form onSubmit={ onSubmit } >
            <div className="pt-3 pb-3 d-flex align-items-center">
                <label className="col-auto text-center ">Cédula:</label>
                <input 
                type="text"
                className="w-100 ms-4 form-control"
                name="identification_ruc"
                autoComplete="off"
                value={ formValue.identification_ruc }
                onChange={ onInputChanged }
                />
            </div>

            <div className="pt-3 pb-3 d-flex align-items-center">
                <label className="col-auto text-center">Nombres:</label>
                <input 
                type="text" 
                className="w-100 ms-2 form-control"
                name="names"
                autoComplete="off"
                value={ formValue.names }
                onChange={ onInputChanged }
                />

                <label className="col-auto text-center ms-2">Apellidos:</label>
                <input 
                type="text" 
                className="`w-75 form-control"
                name="surnames"
                autoComplete="off"
                value={ formValue.surnames }
                onChange={ onInputChanged }
                />
            </div>

            <div className="pt-3 pb-3 d-flex align-items-center">
                <label className="col-auto text-center ">Ciudad:</label>
                <input 
                type="text" 
                className="w-75 ms-4 form-control"
                name="city"
                autoComplete="off"
                value={ formValue.city }
                onChange={ onInputChanged }
                />
                <label className="col-auto text-center ms-2">Teléfono:</label>
                <input 
                type="text" 
                className="w-75 ms-2 form-control"
                name="phone"
                autoComplete="off"
                value={ formValue.phone }
                onChange={ onInputChanged }
                />
            </div>

            <div className="d-flex col-6 pt-3 pb-3">
                <div className="form-check d-flex col-8">
                    <input 
                        className="col-3"
                        type="radio"
                        name="genre"
                        value='Masculino'
                        checked={ formValue.genre === "Masculino" }
                        onChange={ onInputChanged }
                    />
                    <label className="m-auto col-4" >
                        Masculino
                    </label>
                </div>
                <div className="form-check d-flex">
                    <input 
                        className="col-3"
                        type="radio" 
                        name="genre"
                        value='Femenino'
                        checked={ formValue.genre === "Femenino" }
                        onChange={ onInputChanged }
                    />
                    <label className="m-auto col-4">
                        Femenino
                    </label>
                </div>
            </div>

            <div className="pt-3 pb-3 d-flex align-items-center">
                <label className="col-auto text-center">Dirección:</label>
                    <input 
                    type="text" 
                    className="w-100 ms-2 form-control"
                    name="direction"
                    autoComplete="off"
                    value={ formValue.direction }
                    onChange={ onInputChanged }
                    />
            </div>
            <div className="pb-3 d-flex align-items-center">
                <label className="col-auto text-center">Correo:</label>
                <input 
                type="mail" 
                className={`w-100 ms-4 form-control ${ submittedForm }`}
                name="mail"
                autoComplete="off"
                value={ formValue.mail }
                onChange={ onInputChanged }
                />
            </div>
            <div className="d-flex justify-content-center mt-3">
                <button 
                    className="btn btn-primary w-50"
                >
                    Registrar
                </button>
            </div>

        </form>

          
      </div>
    </Modal>
  )
}
