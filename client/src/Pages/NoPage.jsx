
const HideScreens = () => {
  return <div className="container-fluid">
    <div className="row  bg-dark text-white" style={{height: "100vh"}}>
      <div className="col-1 col-sm-2" >
      </div>
      <div className="col-10 col-sm-8 text-center text-danger d-flex align-items-center justify-content-center" >
        <p >
        <h1 className="text-center mt-5">ERROR 404!</h1>
        <h2 className="text-center mb-0">Page Not Found</h2>
        </p>
      </div>
      <div className="col-1 col-sm-2" >
      </div>
    </div>
  </div>;
};

export default HideScreens;

const contentStyle = {
  background: "linear-gradient(to right, #00b555 30%, rgba(0, 181, 85, 0.5) 30%, rgba(0, 181, 85, 0.5) 75%, #0076c3 75%)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
  fontFamily: "Roboto, sans-serif",
  fontWeight: "bold"
};
