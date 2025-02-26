import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import Header from "./components/Header/Header";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import Home from "./pages/Home/Home";
import Offer from "./pages/Offer/Offer";
import PriceList from "./pages/PriceList/PriceList";
import OurTeam from "./pages/OurTeam/OurTeam";
import ClinicGallery from "./pages/ClinicGallery/ClinicGallery";
import Surgery from "./pages/Surgery/Surgery";
import Starvac from "./pages/Starvac/Starvac";
import Cellulite from "./pages/Cellulite/Cellulite";
import Lymphatic from "./pages/Lymphatic/Lymphatic";
import Laser from "./pages/Laser/Laser";
import Electrotherapy from "./pages/Electrotherapy/Electrotherapy";
import LTV from "./pages/LTV/LTV";
import Contact from "./pages/Contact/Contact";
// import Appointment from "./pages/Appointment/Appointment";
import PersonalData from "./pages/PersonalData/PersonalData";
import phoneCallIcon from "./assets/icons/phone-call.png";
import Footer from "./components/Footer/Footer";
import "./i18n";
import "./App.scss";

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".wrapper").style.display = "initial";
        }, 2000);
    }, []);

    return (
        <Router>
            <Loading />
            <div className="wrapper">
                <Header />
                <ScrollToTop />
                <ScrollToTopBtn />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/offer" element={<Offer />} />
                    <Route path="/price-list" element={<PriceList />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/clinic-gallery" element={<ClinicGallery />} />
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
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/appointment" element={<Appointment />} /> */}
                    <Route path="/personal-data" element={<PersonalData />} />
                </Routes>
                <NavLink className="phone-btn" to="/contact">
                    <img src={phoneCallIcon} alt="Phone" />
                </NavLink>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
