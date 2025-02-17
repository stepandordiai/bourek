import { useEffect } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    NavLink,
} from "react-router-dom";
import Loading from "./components/Loading/Loading";
import ScrollToTop from "./utils/ScrollToTop";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";

// About us

import ClinicGallery from "./pages/ClinicGallery/ClinicGallery";
import Offer from "./pages/Offer/Offer";
import OurTeam from "./pages/OurTeam/OurTeam";

// Services

import Surgery from "./pages/Surgery/Surgery";
import Starvac from "./pages/Starvac/Starvac";
import Cellulite from "./pages/Cellulite/Cellulite";
import Lymphatic from "./pages/Lymphatic/Lymphatic";
import Laser from "./pages/Laser/Laser";
import Electrotherapy from "./pages/Electrotherapy/Electrotherapy";
import LTV from "./pages/LTV/LTV";

//

import PriceList from "./pages/PriceList/PriceList";
import Contact from "./pages/Contact/Contact";
// import Appointment from "./pages/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import PersonalData from "./pages/PersonalData/PersonalData";
import phoneCallIcon from "./assets/icons/phone-call.png";
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
                <ScrollToTop />
                <ScrollToTopBtn />
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />

                    {/* About us */}

                    <Route path="/offer" element={<Offer />} />
                    <Route path="/our-team" element={<OurTeam />} />
                    <Route path="/clinic-gallery" element={<ClinicGallery />} />

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

                    <Route path="/price-list" element={<PriceList />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* <Route path="/appointment" element={<Appointment />} /> */}
                    <Route path="/personal-data" element={<PersonalData />} />
                </Routes>
                <NavLink className="phone-call__btn-link" to="/contact">
                    <img src={phoneCallIcon} alt="Phone call" />
                </NavLink>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
