import logo from '../../Assets/LOGO_ECOFACTOR_FINAL (1).svg'
import laptop from '../../Assets/Laptop_ecofactor.png'
import btnContact from '../../Assets/BT_CONTACT.svg'
import circle from '../../Assets/BALL.svg'
import { useNavigate } from 'react-router-dom';




const HeroSection = () => {

    const scrollToContact = () => {
        const contactSection = document.getElementById('contact');
        
        if (contactSection) {
            const yOffset = contactSection.offsetTop - 50; 
            window.scrollTo({ top: yOffset, behavior: 'smooth' });
        }
    };
    return <>

        <div className="row gap-5 gap-lg-0 mb-5  " style={{ marginTop: '7rem' }}>
            {/* hero section left side */}

            <div style={{ position: 'relative', color: 'white' }}>
                <img src={logo} alt="logo" className='image-fluid' style={{ maxWidth: '23rem', }} />
                <p className='logoText_mb' style={{ position: 'absolute', top: '65%', left: '9%' }}>Ai driven manufacturing solutions</p>
            </div>
            <div className="col-12 col-xl-5 col-lg-6 text-white">
                <div>
                    <div className="row">
                        <div className="col-12 col-lg-11">
                            <p className='mt-3 fs-5' >The opportunity you've been looking for to invest in the next <b>big standout project</b> in the AI world is here. Meet <b>Ecofactor</b>, the advanced <b>AI-driven solution</b> to assist manufacturers worldwide in the research, development, and optimization of products using cutting-edge AI technology.
                            </p>
                            <img onClick={scrollToContact} id='#contact' src={btnContact} alt="btn-contact" style={{ width: '9rem', marginTop: '1rem', cursor : 'pointer' }} />
                        </div>
                    </div>
                </div>
            </div>

            {/* hero section right side */}
            <div className="col-12 col-xl-7 col-lg-5 relative mb-5 ">
                <div style={{ position: 'relative', marginTop: '-60px' }} className='ms-auto laptop_mb'>
                    <img src={circle} alt="logo" className='img-fluid laptopblobe_mb ' style={{ width: '85%' }} />
                    <img src={laptop} alt="logo" className='img-fluid laptopImg_mb' style={{ position: 'absolute', left: '-60px', bottom: '-22px', height: '80%', }} />


                </div>


            </div>
        </div>
    </>;
};

export default HeroSection;
