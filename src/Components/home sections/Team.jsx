import BRUNO_IMG from '../../Assets/BRUNO_1_1x.png'
import KATRINA_IMG from '../../Assets/KATRINA_1x.png'
import ERIK_IMG from '../../Assets/ERIK_1x.png'
import AHMAD_IMG from '../../Assets/AHMAD_1x.png'
import ALEEZA_IMG from '../../Assets/ALEEZA_1x.png'
import AYMEN_IMG from '../../Assets/AYMEN_1x.png'
import INAM_IMG from '../../Assets/INAM_1x.png'

const Team = () => {
    const firstRowImges = [
        { name: 'Bruno Cesar', post: 'Senior UI/UX Designer\nPrompt Engineer\nTeam Lead', img: BRUNO_IMG },
        { name: 'Katrina Cekmarjova', post: 'Marketing, Design\nand Copywriting', img: KATRINA_IMG },
        { name: 'Erik Mattfeldt', post: 'Business Relations', img: ERIK_IMG }
    ]

    const secondRowImges = [
        { name: 'Ahmad Jajja', post: 'Senior Full Stack\nDeveloper\nDev Lead', img: AHMAD_IMG },
        { name: 'Aleeza Rubab', post: 'Frontend Developer', img: ALEEZA_IMG },
        { name: 'Aymen Noor', post: 'Ai Developer', img: AYMEN_IMG },
        { name: 'Inam Ul Rehman', post: 'Ai Developer', img: INAM_IMG },

    ]

    return <>
        <h2 className="text-center mb-5 " style={{ color: '#76b870', marginTop : '7rem' }}>ECOFACTOR TEAM</h2>
        <div className="row  mb-3 ">
            <div className="col-xl-9 mx-auto mb-5 ">
                <div className="row text-white mx-auto mb-4 ">
                    <div className="col-xl-10 mx-auto ">
                        <div className="row ">
                            {firstRowImges.map((elm, i) => {
                                return <div className="col-6 col-md-4" key={i}>
                                    <div className='mb-3 mb-lg-0' style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={elm.img} alt={elm.name} className='img-fluid' />
                                        <h5 className='mt-3 text-center' style={{fontSize : '.9rem'}}>{elm.name}</h5>
                                        <small className='text-center ' style={{color : '#8C979A'}}>{elm.post.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</small>

                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </div>

                <div className="row text-white mx-auto ">
                    <div className="col-xl-12 mx-auto mt-5 ">

                        <p className='text-center text-secondary'>AI DEV TEAM </p>
                        <div className="row  ">
                            {secondRowImges.map((elm, i) => {
                                return <div className="col-6 col-md-3 " key={i}>
                                    <div className='mb-3 mb-lg-0' style={{ display: "flex", justifyContent: "center", flexDirection: 'column', alignItems: 'center' }}>
                                        <img src={elm.img} alt={elm.name} className='img-fluid' />
                                        <h5 className='mt-3 text-center' style={{fontSize : '.9rem'}}>{elm.name}</h5>
                                        <small className='text-center' style={{color : '#8C979A', }}>{elm.post.split('\n').map((line, index) => <span key={index}>{line}<br /></span>)}</small>
                                    </div>
                                </div>
                            })}


                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
};

export default Team;
