import btnContact from '../../Assets/BT_SEND_MESSAGE.svg'
import { useRef } from 'react';
import emailjs from '@emailjs/browser';


const Contact = () => {
    const form = useRef();
  

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_p4tinib', 'template_ziapjvq', form.current, {
        publicKey: 'NrZlxRKEnF-70jwSr',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          form.current.reset();
        }, 
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };



    return <>
        <form ref={form} className="row " style={{ marginBottom: '5rem' }} onSubmit={sendEmail} id='contact'>
            <div className="col-12 text-white my-4 ">
                <h2 style={{ color: '#76b870' }}>Contact Us:</h2>


                <div className="row ">
                    {/* <div className="col-lg-1"></div> */}
                    <div className="col-12 col-lg-12 my-5 ">
                        <div className='ms-auto inputs_mb'  style={{display : 'flex', justifyContent : 'end', flexDirection : 'column'}}>
                            <input required name='from_name' type="text" className="w-75 mb-4 py-2 px-1 mx-auto" placeholder="Insert your name here" />
                            <input required name='from_email' type="text" className="w-75 mb-4 py-2 px-1 mx-auto" placeholder="Insert your email here" />
                            <textarea required name="message" id="" cols="30" rows="5" className="w-75 mx-auto mb-3 py-2 px-1" placeholder="Insert message goes here"></textarea>
                           <button type='submit' value='send' className='float-end' style={{width : '12rem',  marginLeft: '70%', marginTop: '2rem', cursor : 'pointer', backgroundColor : 'transparent', border : 'none' }}><img src={btnContact} alt="btn-con "  style={{  }} /></button> 
                        </div>
                    </div>
                </div>
            </div>
        </form>
    </>;
};

export default Contact;
