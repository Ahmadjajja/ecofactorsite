import btnContact from '../../Assets/BT_SEND_MESSAGE.svg'
const Contact = () => {
    return <>
        <div className="row " style={{ marginBottom: '5rem' }}>
            <div className="col-12 text-white my-4 ">
                <h2 style={{ color: '#76b870' }}>CONTACT US:</h2>


                <div className="row ">
                    {/* <div className="col-lg-1"></div> */}
                    <div className="col-12 col-lg-12 my-5 ">
                        <div className='ms-auto inputs_mb'  style={{display : 'flex', justifyContent : 'end', flexDirection : 'column'}}>
                            <input type="text" className="w-75 mb-4 py-2 px-1 mx-auto" placeholder="Insert your name here" />
                            <input type="text" className="w-75 mb-4 py-2 px-1 mx-auto" placeholder="Insert your email here" />
                            <textarea name="" id="" cols="30" rows="5" className="w-75 mx-auto mb-3 py-2 px-1" placeholder="Insert message goes here"></textarea>
                            <img src={btnContact} alt="btn-con "  style={{ width: '12rem', marginLeft: '70%', marginTop: '2rem' }} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Contact;
