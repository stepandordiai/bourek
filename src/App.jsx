import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
//
import Prices from "./pages/Prices/Prices";
import Contact from "./pages/Contact/Contact";
// Other
import PersonalData from "./pages/PersonalData/PersonalData";
import Footer from "./components/Footer/Footer";
import "./App.scss";

function App() {
    return (
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
                {/*  */}
                <Route path="/prices" element={<Prices />} />
                <Route path="/contact" element={<Contact />} />
                {/* Other */}
                <Route path="/personal-data" element={<PersonalData />} />
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
