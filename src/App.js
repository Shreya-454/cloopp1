
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Header from "./components/Header";
import Creating from "./components/Creating";
import Recycling from "./components/Recycling";
import Faq from "./components/Faq";
import Subscribe from "./components/Subscribe";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import Preloader from "./components/Preloader";
import { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [data, setdata] = useState(false);
  useEffect(() => {
    setdata(true);
    setTimeout(() => {
      setdata(false);
    }, 4000);
  }, []);
  useEffect(() => {
    AOS.init({
      once: true,
      duration: 1000,
      easing: "linear",
    });
  }, []);
  return (
    <div>
    {data ? (
      <div>
        <Preloader/>
      </div>
    ) : (
    <div className="overflow-x-clip">
     <Header/>
     <Creating/>
     <Recycling/>
     <Faq/>
     <Subscribe/>
     <Footer/>
     <BackToTop/>
     </div>
    )}
    </div>
  );
}

export default App;
