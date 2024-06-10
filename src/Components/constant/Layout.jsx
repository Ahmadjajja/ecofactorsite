import colorbar from '../../Assets/COLOR_BAR_1x.svg'
import circleThick from '../../Assets/THICK_circle.svg'
import circleThin from '../../Assets/Thin_Circle.svg'
import circles from '../../Assets/Circles.svg'
import Ball from '../../Assets/2_BALLS.svg'
import singleCircle from '../../Assets/BALL.svg'

import '../../App.css'


const Layout = ({ children }) => {
    return <>
        <div className="container-fluid p-0 overflow-hidden" style={{position : 'relative'}} >
            <img className='' src={colorbar} alt="c-bar" style={{width : '60%', position: 'absolute', top: '0px', left: '-10px', zIndex: '-1' }} />
            <img className='circleThick_mb' src={circleThick} alt="c-bar" style={{ width: '25rem', position: 'absolute', right: '-170px', top: '-170px', zIndex: '-1' }} />
            <img className='circleThin_mb' src={circleThin} alt="c-bar" style={{ width: '10rem', position: 'absolute', bottom: '90px', left: '-50px', zIndex: '-1' }} />
            <img className='d-none d-lg-block' src={Ball} alt="c-bar" style={{ width: '12rem', position: 'absolute', top: '41rem', left: '-100px', zIndex: '-1' }} />
            <img className='img-fluid d-none d-lg-block' src={circles} alt="c-bar" style={{ width: '18rem', position: 'absolute', bottom: '49rem', left: '-190px', zIndex: '-1' }} />
            <img className='' src={colorbar} alt="c-bar " style={{ width : '90%', position: 'absolute', bottom: '0px', right: '-22px', zIndex: '-1' }} />
            <img className='img-fluid singleCircleOne_mb ' src={singleCircle} alt="c-bar" style={{ width: '3rem', position: 'absolute', bottom: '135rem', right: '10%', zIndex: '-1' }} />
            <img className='img-fluid singleCircle_mb' src={singleCircle} alt="c-bar" style={{ width: '1rem', position: 'absolute', bottom: '47rem', right: '20%', zIndex: '-1' }} />


            <div className="container">
                <div className="row " >
                    <div className="col-12 col-xl-9 mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Layout;
