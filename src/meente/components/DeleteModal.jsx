import { useUiStore } from "../../hooks";

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

export const DeleteModal = () => {
    
    const { isModalOpen, closeModal } = useUiStore();

    const onCloseModal = () => {
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
                <h3 className='text-center'>Desea eliminar cliente?</h3>
                <hr />
                <div className="d-flex justify-content-center mt-3">
                    <button 
                        className="btn btn-primary w-50"
                    >
                        Eliminar
                    </button>
                    <button 
                        className="btn btn-primary w-50"
                    >
                        Cancelar
                    </button>
                </div>

            </div>
        </Modal>
    )
}
