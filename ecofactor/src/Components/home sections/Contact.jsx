
const Contact = () => {
    return <>
        <div className="row " style={{marginBottom : '5rem'}}>
            <div className="col-12 text-white bg-danger">
                <h1>Contact Us:</h1>


                <div className="row bg-success ">
                <div className="col-11 ms-auto">
                    <div className="">
                    <input type="text" className="w-100 mb-2" placeholder="Insert your name here"/>
                    <input type="text" className="w-100 mb-2" placeholder="Insert your email here"/>
                    <textarea name="" id="" cols="30" rows="5" className="w-100 mb-2" placeholder="Insert message goes here"></textarea>

                    </div>
                </div>
                 

                </div>

            </div>
        </div>
    </>;
};

export default Contact;
