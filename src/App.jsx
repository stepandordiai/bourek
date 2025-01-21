import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
// Services
import Surgery from "./pages/Surgery/Surgery";
import Starvac from "./pages/Starvac/Starvac";
import Cellulite from "./pages/Cellulite/Cellulite";
import Lymphatic from "./pages/Lymphatic/Lymphatic";
import Laser from "./pages/Laser/Laser";
import Electrotherapy from "./pages/Electrotherapy/Electrotherapy";
import LTV from "./pages/LTV/LTV";
//
import Prices from "./pages/Prices/Prices";
import Contact from "./pages/Contact/Contact";
import Appointment from "./pages/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import PersonalData from "./pages/PersonalData/PersonalData";
import phoneCallIcon from "./assets/icons/phone-call.png";
import Loading from "./components/Loading/Loading";
import "./App.scss";

function App() {
    return (
        <>
            <Loading />
            <div className="wrapper">
                <Router>
                    <ScrollToTop />
                    <ScrollToTopBtn />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about-us" element={<AboutUs />} />
                        {/* Services */}
                        <Route path="/surgery" element={<Surgery />} />
                        <Route path="/starvac" element={<Starvac />} />
                        <Route path="/cellulite" element={<Cellulite />} />
                        <Route path="/lymphatic" element={<Lymphatic />} />
                        <Route path="/laser" element={<Laser />} />
                        <Route
                            path="/electrotherapy"
                            element={<Electrotherapy />}
                        />
                        <Route path="/ltv" element={<LTV />} />
                        {/*  */}
                        <Route path="/prices" element={<Prices />} />
                        <Route path="/contact" element={<Contact />} />
                        <Route path="/appointment" element={<Appointment />} />
                        {/* Other */}
                        <Route
                            path="/personal-data"
                            element={<PersonalData />}
                        />
                    </Routes>
                    <NavLink className="phone-call__btn-link" to="/contact">
                        <img src={phoneCallIcon} alt="Phone call" />
                    </NavLink>
                    <Footer />
                </Router>
            </div>
        </>
    );
}

export default App;
