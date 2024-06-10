import btnAccessEF from '../../Assets/BT_ACCESS.svg'

const EcofactorAccess = () => {
    // const navigate = useNavigate();
    const handleImageClick = () => {
        window.open('https://ecofactor-v2.netlify.app/', '_blank');
    };


    return <>
        <div className="mt-5">
            <div className="row my-5 text-white">

                <div className="col-12 col-lg-6 mt-lg-5 ">
                    <div>
                        <h2 className='mb-4' style={{ color: '#76b870' }}>ACCESS - EcoFactor v0.2</h2>
                        <p className="fs-5">Currently, <b>ECOFACTOR</b> is in its version V0.2, our first MVP, which already has important functionalities enabled. <b>Click the link</b> to check out Ecofactor</p>
                    </div>
                </div>
                <div className="col-12 col-lg-5 mt-5 ">
                    <div style={{ display: 'flex', justifyContent: 'center', }} className='btnAccess_mb ms-lg-3'>
                        <img src={btnAccessEF} alt="btn-contact" className='img-fluid ms-lg-5 ' style={{width: '60%', marginTop: '20%', cursor: 'pointer' }} onClick={handleImageClick} />

                    </div>
                </div>

            </div>
        </div>
    </>;
};

export default EcofactorAccess;
