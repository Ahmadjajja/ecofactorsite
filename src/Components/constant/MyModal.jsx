import Modal from 'react-modal';

const customStyles = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

};
const MyModal = ({ setmodal, modal }) => {

    function openModal() {
        setmodal(true);
    }



    function closeModal() {
        setmodal(false);
    }
    return <>
        <div>
            <Modal
                isOpen={modal}
                onRequestClose={closeModal}
                style={customStyles}

            >
                <iframe style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} src="https://www.youtube.com/embed/QmuFP2jQMGw" allow='autoplay' width={'100%'} height={'100%'}></iframe>


            </Modal>
        </div>
    </>;
};

export default MyModal;
