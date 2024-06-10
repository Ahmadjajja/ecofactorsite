import BTN_DATASET from '../../Assets/BT_DATASET2.svg'
import BTN_DEMO from '../../Assets/B T_PLAY_VIDEO2.svg'
import MyModal from '../constant/MyModal';
import { useState } from 'react';

const DemoDataset = () => {
    const handleDownload = () => {
        const fileToDownload = '/src/Assets/DATASET_ECOFACTOR.zip';
        const anchor = document.createElement('a');
        anchor.href = fileToDownload;
        anchor.download = 'DATASET_ECOFACTOR.zip';
        anchor.click();
    };

    const [demoVideo, setdemoVideo] = useState(false);
    


    return <>

        <div className="mt-5">
            <div className="row gap-5 gap-lg-0 ">
                <div className="col-12 col-lg-6 dashed-line" style={{ borderRight: '2px dashed gray' }}>
                    <div className='me-lg-2 me-0'>
                        <h3 className='mb-lg-4 mb-3' style={{ color: '#76b870' }}>VIDEO DEMO - EcoFactor v0.2 </h3>
                        <p className="fs-5 text-white">Check out our first demo video showcasing Ecofactor v0.2 in action, generating <br /> interesting proof-of-concepts for various applications and industries, demonstrating <br /> the great versatility of this promising tool.</p>
                        <div className='d-lg-flex justify-content-center'>
                            <img onClick={() => setdemoVideo(true)} className='me-lg-5' id='#contact' src={BTN_DEMO} alt="btn-contact" style={{ width: '50%', marginTop: '1rem', cursor: 'pointer', }} />
                        </div>

                    </div>
                </div>

                <div className="col-12 col-lg-6">
                    <div className='ms-0 ms-lg-4'>
                        <h3 className='mb-lg-4 mb-3' style={{ color: '#76b870' }}> Download Dataset Sample </h3>
                        <p className="fs-5 text-white">It was designed to work with technical and descriptive data from any project, so you <br /> can test it with your own data. For quick testing, you can use one of the three <br /> datasets from the demo video.</p>
                        <div className='d-lg-flex justify-content-center'>
                            <img className='me-lg-5' onClick={handleDownload} id='#contact' src={BTN_DATASET} alt="btn-contact" style={{ width: '50%', marginTop: '1rem', cursor: 'pointer', }} />
                        </div>
                    </div>
                </div>

            </div>
        </div>

        <MyModal modal={demoVideo} setmodal={setdemoVideo} />

    </>;
};

export default DemoDataset;
