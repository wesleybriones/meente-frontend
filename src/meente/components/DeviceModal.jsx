import { useEffect, useMemo, useState } from 'react';
import Modal from 'react-modal'

import Swal from "sweetalert2";
import 'sweetalert2/dist/sweetalert2.min.css';
import { useUiStore } from "../../hooks";
import { useDeviceStore } from '../hooks';

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

export const DeviceModal = () => {

    const { isModalOpen, closeModal } = useUiStore();
    const { activeDevice, startSavingDevice } = useDeviceStore();

    const [formValue, setFormValue] = useState({
        serie: '',
        description: '',
        id_client: '', 
        image: ''
    })

    useEffect(() => {
        if ( activeDevice !== null ){
          setFormValue({ ...activeDevice });
        }
    }, [activeDevice])
    
    const onInputChanged = ({ target }) => {
        setFormValue({
          ...formValue,
          [target.name]: target.value
        })
    }
      
    const onCloseModal = () => {
        closeModal();
    }

    const onSubmit = async ( event ) => {
        event.preventDefault();

        if ( formValue.serie.length < 5 ){
            Swal.fire('Serie incorrecta', 'Ingresar una serie válida', 'error')
            return ;
        }
        console.log(formValue);
        // TODO:
        await startSavingDevice( formValue );
        closeModal();
    }

    return (
        <Modal
            isOpen={ isModalOpen }
            onRequestClose={ onCloseModal }
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <div className="container mt-4">
            <h3 className='text-center'>Nuevo Equipo</h3>
            <hr />
    
            <form onSubmit={ onSubmit } >
                <div className="pt-3 pb-3">
                    <label className="col-auto text-center ">Serie:</label>
                    <input 
                    type="text"
                    className="w-100 form-control"
                    name="serie"
                    autoComplete="off"
                    value={ formValue.serie }
                    onChange={ onInputChanged }
                    />
                </div>

                <div className="pt-3 pb-3">
                    <label className="col-auto text-center">Descripción:</label>
                    <textarea 
                    type="text" 
                    className="form-control"
                    name="description"
                    rows="4"
                    value={ formValue.description }
                    onChange={ onInputChanged }
                    />
                </div>

                <div className="pt-3 pb-3">
                    <label className="col-auto text-center">Cliente:</label>
                    <input 
                        type="text" 
                        className="w-100 form-control"
                        name="id_client"
                        autoComplete="off"
                        value={ formValue.id_client }
                        onChange={ onInputChanged }
                        required
                    />
                </div>
    
                <div className="pt-3 pb-3 d-flex align-items-center">
                    <input 
                        className="w-100 form-control"
                        type="file"
                        name="image"
                        accept="image/*"
                        title="Selecciona imagen"
                        value={ formValue.image }
                        onChange={ onInputChanged }
                    />
                </div>
                
                <div className="d-flex justify-content-center mt-3">
                    <button 
                        className="btn btn-primary w-50"
                    >
                        Guardar
                    </button>
                </div>
    
            </form>
    
              
          </div>
        </Modal>
      )
}