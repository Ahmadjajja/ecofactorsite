import Modal from 'react-modal';
import { RxCross2 } from "react-icons/rx";
import { useEffect } from 'react';

const customStyles = {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',

};
const MyModal = ({ setmodal, modal }) => {
    useEffect(() => {
      
        if (modal) {
            document.body.style.overflowY = 'hidden';
        } else {
            document.body.style.overflowY = 'auto';
        }

        // Cleanup function
        return () => {
            document.body.style.overflowY = 'auto';
        };
    }, [modal]);

    
    function closeModal() {
        setmodal(false);
    }
    return <>
        <div>
            <button onClick={() => setmodal(false)} className='cross-btn' style={{display : modal ? 'block' : 'none', position: 'absolute', right: '20%', top : '3.2%', zIndex : '10', backgroundColor : 'transparent', color : 'orange', border : '0', fontSize : '2.5rem' }}><RxCross2 /></button>

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
