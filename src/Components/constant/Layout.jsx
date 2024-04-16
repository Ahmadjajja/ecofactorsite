import colorbar from '../../Assets/COLORBAR.png'
import circleThick from '../../Assets/THICK_circle.svg'
import circleThin from '../../Assets/Thin_Circle.svg'
import circles from '../../Assets/Circles.svg'
import Ball from '../../Assets/BALL.svg'
import '../../App.css'


const Layout = ({ children }) => {
    return <>
        <div className="container-fluid p-0 overflow-hidden" style={{position : 'relative'}} >
            <img className='' src={colorbar} alt="c-bar" style={{ position: 'absolute', top: '-17px', left: '-10px', zIndex: '-1' }} />
            <img className='' src={circleThick} alt="c-bar" style={{ width: '10rem', position: 'absolute', right: '-50px', top: '-50px', zIndex: '-1' }} />
            <img className='' src={circleThin} alt="c-bar" style={{ width: '10rem', position: 'absolute', bottom: '50px', left: '-50px', zIndex: '-1' }} />
            <img className='' src={Ball} alt="c-bar" style={{ width: '10rem', position: 'absolute', top: '33rem', left: '-70px', zIndex: '-1' }} />
            <img className='' src={circles} alt="c-bar" style={{ width: '10rem', position: 'absolute', bottom: '38rem', left: '-110px', zIndex: '-1' }} />
            <img className='' src={colorbar} alt="c-bar" style={{ position: 'absolute', bottom: '0px', right: '-10px', zIndex: '-1' }} />


            <div className="container">
                <div className="row " >
                    <div className="col-12 col-lg-9 mx-auto">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Layout;
