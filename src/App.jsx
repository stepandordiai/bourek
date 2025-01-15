import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./utils/ScrollToTop";
import Cellulite from "./pages/Cellulite/Cellulite";
import ScrollToTopBtn from "./components/ScrollToTopBtn/ScrollToTopBtn";
import Surgery from "./pages/Surgery/Surgery";
import AboutUs from "./pages/AboutUs/AboutUs";
import Prices from "./pages/Prices/Prices";
import "./App.scss";
import Lymphatic from "./pages/Lymphatic/Lymphatic";
import Starvac from "./pages/Starvac/Starvac";

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
            </Routes>
            <Footer />
        </Router>
    );
}

export default App;
