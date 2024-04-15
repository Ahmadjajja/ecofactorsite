import axios from 'axios'; // Import axios for making HTTP requests
import { useState } from 'react';
import { IoMdAttach } from "react-icons/io";
import { ThreeDots } from "react-loader-spinner";
import Spinner from '../../Components/loader/Spinner';
import Sidebar from '../../Components/sideBar/SBar';
import chatgptLogo from "./CHATGPT_LOGO_WHITE.svg";
import './ProductOptimization.css'; // Import CSS file for additional styles
import cogwheel from "../../Assets/ICONS/ICON_ECOFACTOR.svg";
import BOX from '../../Assets/ICONS/4 BOXES_PRODUCT_OPTIMIZER.svg'
import SBarCollapsed from '../../Components/sideBar/SBarCollapsed';
import ecofactor from "../../Assets/ICONS/LOGO_ECOFACTOR_FINAL (1).svg";
import colorBar from "../../Assets/ICONS/COLORBAR.png";



export default function ProductOptimization() {
    const [collapsed, setCollapsed] = useState(false);
    const [loading, setLoading] = useState(false);
    const [prompt, setPrompt] = useState('');
    const [promptsArr, setPromptsArr] = useState([]);
    const [recentAnswer, setRecentAnswer] = useState("");
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (prompt.trim() !== '') {
            console.log("prompt -> ", prompt);
            setPromptsArr([...promptsArr, prompt]);
            const postData = {
                query: prompt + "? Give me response in JSON & there should be 1 key named response"
            };
            setPrompt('');

            setLoading(true);
            // API Calling and getting response code
            try {
                // Make a POST request using axios                             
                const response = await axios.post('http://127.0.0.1:5000/api/product_optimize', postData);
                console.log("response.data -> ", response.data.response);
                setRecentAnswer(response.data.response);
                setPromptsArr(prevPromptsArr => [...prevPromptsArr, response.data.response]);
                setLoading(false);
                setError(null); // Reset error state
            } catch (error) {
                // Handle errors
                console.error("Error fetching data: ", error);
                setError(error.message); // Store error message in state
                setLoading(false);
            }
        }
    };

    return (
        <>
        <img src={colorBar} alt="eco" style={{position : 'absolute', top : '-26px' , left : '35%'}} />

            <div >
                <div style={{ height: '10vh', backgroundColor: '#2f3135', }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '100%' }}>
                        <img src={ecofactor} alt="" style={{ height: '4.2rem', marginTop: ' 1.9rem', marginLeft: '1.2rem' }} />
                        <h2 style={textStyle} >Product Optimizer</h2>

                    </div>

                </div>
                <div id='productOptimization' style={{ display: 'flex', overflow : 'hidden' }}>


                    <Sidebar collapsed={collapsed} />
                    {collapsed && <SBarCollapsed />}

                    <main className='main' style={{ width: collapsed ? "96vw" : "77vw", backgroundColor: "#2f3135", }}>
                        <div onClick={() => setCollapsed(!collapsed)} style={{ cursor: "pointer", color: "#c1c1c1" }}>
                            <span className={` ${collapsed ? 'rotate-left' : 'rotate-right'}`} style={{ ...iconStyles, color: "#ccc", marginLeft: collapsed ? '-6px' : '-10px' }}>{collapsed ? <>&#187;</> : <>&#171;</>}</span>
                        </div>

                        <div className="container-fluid d-flex justify-content-center align-items-center" style={{ height: "100%", }}>

                            <div className="container-fluid" style={{ height: "100%", display: 'flex', flexDirection: 'column' }}>
                                {/* <div className="row" style={{ backgroundColor: "#c1c1c1", height: "15%", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
                                <div className="col">
                                    <div className="row">
                                        <div className="col-1"></div>
                                        <div className="col-11">
                                            <h2 style={textStyle} className='pt-4'>Product Optimization</h2>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className='pt-4'>
                                        <div className="row">
                                            <div className="col-3"></div>
                                            <div className="col-8">
                                                <select className="form-select" style={{ cursor: 'pointer' }} aria-label="Default select example">
                                                    <option selected>Select product to optimize</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>
                                            <div className="col-1"></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}


                                {promptsArr.length === 0 && <div className="row" style={{ backgroundColor: "#e6e6e6", height: "80%", borderTopLeftRadius: "25px", borderTopRightRadius: "25px" }}>
                                    <div className="col d-flex flex-column gap-3 py-2 justify-content-center align-items-center" style={{ margin: "0 auto", maxWidth: "800px" }}>
                                        <div>
                                            <img src={cogwheel} className='rounded circle ' style={{ width: '40px' }} alt="cogwheel" /></div>
                                        <h3 className='heading3'>&nbsp; Just select the product you want to optimize,<br /> and describe below what you want to optimize...</h3>
                                        <p className='main-text ' style={{ textAlignLast: "center" }}>&nbsp; &nbsp;An AI assistant versatile and effective in helping you maximize your productivity and expand the growth horizons of your business.
                                        </p>
                                        <img src={BOX} alt="P-box" style={{ maxWidth: "650px" }} className='' />
                                    </div>
                                </div>}

                                {/* show prompts */}
                                {promptsArr.length !== 0 && (
                                    <div className="prompt-scroll-box row " style={{ backgroundColor: "#e6e6e6", height: "80%" }}>
                                        <div className="scroll-inner ">
                                            <div className=" row prompts px-5 pt-4" style={{ backgroundColor: "#e6e6e6", height: "80%" }}>


                                                <div className="container-fluid">
                                                    {promptsArr.map((prom, index) => (
                                                        <div key={index}>
                                                            {index % 2 === 0 ?
                                                                <div className="row p-0 m-0 " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                    <img src="https://camo.githubusercontent.com/1e6de73a5a5d1800c3f18f294e4b019466d6daa7ac4ddbe713afc5e3ac062547/68747470733a2f2f6d656469612e6c6963646e2e636f6d2f646d732f696d6167652f4434443033415148556d6b357863444d6574412f70726f66696c652d646973706c617970686f746f2d736872696e6b5f3430305f3430302f302f313639333430353830343034313f653d3137313532313238303026763d6265746126743d307a4b74676b73684967694439786d6e456a425a7158755731343547774e5676386f6d3958576b424f7259" className='rounded-circle mb-auto ms-auto ' style={profileUserStyle} alt="" />
                                                                    <div className="col-9 shadow p-3 mb-5 bg-body-tertiary rounded " >
                                                                        {prom}
                                                                    </div>
                                                                    <div className="col-3"></div>

                                                                </div>
                                                                :
                                                                <div className="row " style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                                    <img src={chatgptLogo} className='rounded-circle mb-auto me-2' style={profileStyle} alt="" />
                                                                    <div className="col-9 me-auto shadow-none p-3 mb-5 bg-body-tertiary rounded">{prom}</div>
                                                                    <div className="col-3"></div>
                                                                </div>
                                                            }
                                                        </div>
                                                    ))}
                                                    {loading &&
                                                        <div className="row" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                                                            <img src={chatgptLogo} className='rounded-circle mb-auto me-2' style={profileStyle} alt="" />
                                                            <div className="col-9 shadow-none me-auto p-3 mb-5 bg-body-tertiary rounded" style={{ height: "100px" }}>
                                                                <ThreeDots
                                                                    visible={true}
                                                                    height="30"
                                                                    width="30"
                                                                    color="black"
                                                                    radius="9"
                                                                    ariaLabel="three-dots-loading"
                                                                    wrapperStyle={{}}
                                                                    wrapperClass=""
                                                                />
                                                            </div>
                                                            <div className="col-3"></div>
                                                        </div>}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}

                                <div className="row" style={{ backgroundColor: "#e6e6e6", height: "15%", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}>
                                <div className="col " style={{ backgroundColor: "#e6e6e6", borderBottomLeftRadius: "25px", borderBottomRightRadius: "25px" }}>
                                    <div className="row">
                                        <div className="col"></div>
                                        <div className={`${collapsed ? 'col-9' : 'col-11' } mx-auto`}>
                                            <div className="input-group mb-3" style={{ border: "1px black solid", borderRadius: "20px" }}>
                                                <button className="input-group-text" id="basic-addon1" style={{ fontSize: "1.8rem", backgroundColor: "white", borderTopLeftRadius: "20px", borderBottomLeftRadius: "20px", color: "#494c51", border: "none", borderRight: "none" }}><IoMdAttach /></button>
                                                <input value={prompt} onChange={(e) => setPrompt(e.target.value)} type="text" className="form-control " placeholder="Please type or say what kind of optimizations you are looking for ?" aria-label="Username" aria-describedby="basic-addon1" />
                                                <span className="input-group-text" id="basic-addon1" style={{ backgroundColor: "white", borderTopRightRadius: "20px", borderBottomRightRadius: "20px" }}>
                                                    <button onClick={handleSubmit} className='btn btnGradient' style={{ backgroundColor: "#0076c3" }}>{loading ? <Spinner /> : 'Submit'}</button>
                                                </span>
                                            </div>
                                            {error && <p className="text-danger">{error}</p>}
                                        </div>
                                        <div className="col"></div>
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
    zIndex: 3,
    transition: 'transform 0.3s ease', /* Add transition for smoother animation */
};

const textStyle = {
    fontFamily: '"Roboto", sans-serif',
    fontWeight: 300,
    color: 'white',
    marginRight: '2.2rem',
    marginTop : '1.5rem'

};

const profileStyle = {
    width: '3%',
    padding: '7px',
    backgroundColor: 'rgb(0, 118, 195)',
};
const profileUserStyle = {
    width: '4.5%',
    padding: '7px',
    marginTop: '-5px'
};
