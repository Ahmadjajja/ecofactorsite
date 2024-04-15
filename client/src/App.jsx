import "bootstrap/dist/js/bootstrap.bundle";
import { useEffect, useState } from "react";
import "./App.css";
import HideScreens from "./Components/hide screens/HideScreens";
import Loader from "./Components/loader/Loader";
import CustomRoutes from "./Pages/Routes";
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
      {!isLoading ? <Loader /> : width ? <HideScreens /> : <CustomRoutes />}
    </>
  );
}

export default App;

