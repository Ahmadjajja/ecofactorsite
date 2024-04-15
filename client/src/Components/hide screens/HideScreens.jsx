
const HideScreens = () => {
  return <div className="container-fluid">
    <div className="row  bg-dark text-white" style={{height: "100vh"}}>
      <div className="col-1 col-sm-2" >
      </div>
      <div className="col-10 col-sm-8 text-center d-flex align-items-center justify-content-center" >
        <p style={contentStyle}>Welcome to ECOFACTOR, This is a prototype project. At this stage, it was designed only for desktop computers. Please access the same page URL via a desktop computer to view this prototype. Thanks</p>
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
