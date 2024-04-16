import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import "./App.css";

import Loader from "./Components/loader/Loader";
import Home from "./Pages/home/Home";
// import CustomRoutes from "./Pages/Routes";
function App() {
  const [width, setWidth] = useState(false); // Initialize width as false
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    // Loader for 3 seconds
    setTimeout(() => {
      setIsLoading(true)
    }, 3000);
    setIsLoading(false)
  }, [])
  
  useEffect(() => {
    // Function to update width state
    const updateWidth = () => {
      const isSmallerScreen = window.innerWidth < 1024;
      setWidth(isSmallerScreen);
    };
    updateWidth();

    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  return (
    <>
      {!isLoading ? <Loader /> : <Home />}
    </>
  );
}

export default App;

