
import { useState } from 'react';
import PRICING_TABEL from '../../Assets/ICONS/PRICE_TABLE.svg';
import Sidebar from '../../Components/sideBar/SBar';
import '../productOptimization/ProductOptimization.css'; // Import CSS file for additional styles
import SBarCollapsed from '../../Components/sideBar/SBarCollapsed';
import ecofactor from "../../Assets/ICONS/LOGO_ECOFACTOR_FINAL (1).svg";
import colorBar from "../../Assets/ICONS/COLORBAR.png";


export default function Pricing({ children, img, btnSvg }) {
    const [collapsed, setCollapsed] = useState(false);


    return (
        <>
        <img src={colorBar} alt="eco" style={{position : 'absolute', top : '-26px' , left : '35%'}} />
            
       
        <div>
            <div style={{ height: '10vh', backgroundColor: '#2f3135' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                    <img src={ecofactor} alt="" style={{ height: '4.2rem', marginTop: ' 1.9rem', marginLeft: '1.2rem' }} />
                    <h2 style={textStyle} >{children}</h2>

                </div>

            </div>
            <div id='productOptimization' style={{ display: 'flex' }}>
                <Sidebar collapsed={collapsed} />
                {collapsed && <SBarCollapsed />}


                <main className='main' style={{ width: collapsed ? "96vw" : "77vw", backgroundColor: "#2f3135", }}>
                    <div onClick={() => setCollapsed(!collapsed)} style={{ cursor: "pointer", color: "#c1c1c1" }}>
                        {/* <span class="big-icon" style={iconStyles}>{collapsed ? <>&#187;</>: <>&#171;</>}</span> */}
                        <span className={`big-icon ${collapsed ? 'rotate-left' : 'rotate-right'}`} style={{ ...iconStyles, color: "#ccc", marginLeft: collapsed ? '-6px' : '-10px' }}>{collapsed ? <>&#187;</> : <>&#171;</>}</span>
                    </div>
                    <div className="container-fluid d-flex justify-between align-items-center" style={{ height: "90vh" }}>
                        <div className="container-fluid" style={{ height: "100%" }}>
                            {/* <div className="row" style={{ backgroundColor: "#c1c1c1", height: "15%", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
                            <div className="col ms-5 d-flex justify-center align-center">
                                <h2 style={textStyle} className='my-auto '>{children ? children : "Plans"}</h2>
                              {btnSvg && <img src={btnSvg  } className='ms-auto me-5' alt="btn" style={{width : "200px"}}/> }  
                            </div>
                        </div> */}

                            <div className="prompt-scroll-box row " style={{ backgroundColor: "#e6e6e6", height: "95%", borderTopLeftRadius: "25px", borderTopRightRadius: "25px", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}>
                                <div className="scroll-inner ">
                                    <div className="row mt-5 mx-auto mb-3 w-100" style={{ backgroundColor: "#e6e6e6", height: "95%", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}>
                                        <div className={`col-12 w-100 ${!img ? "d-flex flex-column justify-content-center align-items-center" : ""}   `} style={{ margin: "0 auto", maxWidth: !img && "800px" }}>
                                            {/* <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At, commodi. Adipisci ex beatae nihil debitis eveniet, id ducimus! Quae assumenda perspiciatis recusandae cumque fugiat est.</p> */}
                                            <img src={img ? img : PRICING_TABEL} className=' ' style={{ width: '100%', height: "100%" }} alt="pricing-tabel" />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </div>
        </>
    )
}

const iconStyles = {
    fontSize: '2em',
    lineHeight: '1em',
    position: 'absolute',
    top: '50%',
    marginLeft: '-3px',
    zIndex: 3,
    transition: 'transform 0.3s ease' /* Add transition for smoother animation */
};

const textStyle = {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 300,
    color: 'white',
    marginRight: '2.2rem',
    marginTop : '1.5rem'

};