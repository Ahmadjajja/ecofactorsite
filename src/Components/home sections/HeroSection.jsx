import logo from '../../Assets/LOGO_ECOFACTOR_FINAL (1).svg'
import laptop from '../../Assets/Laptop_ecofactor.png'
import Button from '../constant/Button'




const HeroSection = () => {
    return <>

        <div className="row " style={{marginTop : '5rem'}}>
            {/* hero section left side */}


            <div className="col-12 col-lg-6 text-white">
                <div>
                    <div style={{ position: 'relative' }}>
                        <img src={logo} alt="logo" className='image-fluid' style={{ maxWidth: '23rem', }} />
                        <p style={{ position: 'absolute', top: '65%', left: '14%' }}>Ai driven manufturing solutions</p>
                    </div>

                    <div className="row">
                        <div className="col-12 col-lg-9">
                            <p >A oportunidade que vc procurava para investir no proximo grande projeto de destaque no mundo da AI esta aqui, meet Ecofactor, the <b>Advanced AI-driven solution</b> para assistir fabricantes mundo afora, no processo de pesquisa, desenvolviemento e otimização de produtos utilizando cuting edge Ai technology.</p>
                            <Button />
                        </div>
                    </div>
                </div>
            </div>

            {/* hero section right side */}
            <div className="col-12 col-lg-6">
                <div className='ms-auto'>
                    <img src={laptop} alt="logo" className='img-fluid '  />
                </div>


            </div>
        </div>
    </>;
};

export default HeroSection;
