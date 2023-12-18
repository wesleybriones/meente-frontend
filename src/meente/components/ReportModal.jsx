import { useState } from 'react';
import Modal from 'react-modal'
import { useClientStore } from '../hooks';

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

export const ReportModal = () => {

    const [formSubmitted, setFormSubmitted] = useState(false);
    const { clients, setActiveClient } = useClientStore()

    const expirationDate = new Date();
    expirationDate.setMonth(expirationDate.getMonth() + 2);
    const [ formValues, setFormValues ] = useState({
        create_date: new Date(),
        expirate_date: expirationDate,
        observations: '',
        t_price: 0,
        id_employee: 0,
        id_client: 0
    });

    const onInputChanged = ({ target }) => {
        setFormValues({
          ...formValues,
          [target.name]: target.value
        })
    }

    const onSelectClient = ( client ) => {
        setActiveClient( client );
    }
    const onSelectDevice = ( device ) => {
        'seleccionaste un equipo del cliente'
    }

    const onCloseModal = () => {
        console.log('cerrando modal');
    }

    const onSubmit = async ( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

        // TODO:
      }

    return (
        <Modal
            isOpen={ true }
            onRequestClose={ onCloseModal }
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <h1 className='text-center'> Nuevo Reporte </h1>
            <hr />
            <form className="container" onSubmit={ onSubmit }>
            
                {/* //TODO: CLIENTS & DEVICES */}
                <div className="input-group mb-3">
                    <select
                        className="form-select"
                        name="client"
                    >
                        <option value="">Selecciona un cliente</option>
                        {
                            clients.map(( client, index ) => (
                                <option key={ index } value={ client }>{ client.names + ' ' + client.surnames }</option>
                            ))
                        }
                    </select>
                </div>

                <div className="input-group mb-3">
                    <select
                        className="form-select"
                        name="device"
                    >
                        <option value="">Selecciona un equipo</option>
                        {
                            clients.map(( client, index ) => (
                                <option key={ index } value={ client }>{ client.names + ' ' + client.surnames }</option>
                            ))
                        }
                    </select>
                </div>
                    
                {/* //TODO: REPORTS */}
                <hr />
                <small id="emailHelp" className="form-text text-muted">Una descripción corta</small>
                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Observaciones"
                        rows="3"
                        name="notes"
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Información adicional</small>
                    <div className="form-check d-flex justify-content-between">
                        <div className=''>
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label align-middle ms-2">
                                Ins. Elect. Ok
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label align-middle ms-2">
                                Reg. Voltaje
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label align-middle ms-2">
                                U.P.S.
                            </label>
                        </div>
                        <div>
                            <input className="form-check-input" type="checkbox" value="" />
                            <label className="form-check-label align-middle ms-2">
                                Contrato
                            </label>
                        </div>
                    </div>
                </div>

                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                    />
                    
                </div>

                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span> Guardar</span>
                </button>

            </form> 
        </Modal>
    )
}
