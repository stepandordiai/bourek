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
import ClinicGallery from "./pages/ClinicGallery/ClinicGallery";
import Offer from "./pages/Offer/Offer";
import OurTeam from "./pages/OurTeam/OurTeam";
import Surgery from "./pages/Surgery/Surgery";
import Starvac from "./pages/Starvac/Starvac";
import Cellulite from "./pages/Cellulite/Cellulite";
import Lymphatic from "./pages/Lymphatic/Lymphatic";
import Laser from "./pages/Laser/Laser";
import Electrotherapy from "./pages/Electrotherapy/Electrotherapy";
import LTV from "./pages/LTV/LTV";
import PriceList from "./pages/PriceList/PriceList";
import Contact from "./pages/Contact/Contact";
// import Appointment from "./pages/Appointment/Appointment";
import Footer from "./components/Footer/Footer";
import PersonalData from "./pages/PersonalData/PersonalData";
import phoneCallIcon from "./assets/icons/phone-call.png";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { I18nextProvider } from "react-i18next";
import i18n from "i18next";
import translationCz from "./translations/cz/translation.json";
import translationUa from "./translations/ua/translation.json";
import translationEn from "./translations/en/translation.json";
import "./App.scss";

i18n.use(initReactI18next) // passes i18n down to react-i18next
    .use(LanguageDetector)
    // .use(HttpApi)
    .init({
        // the translations
        // (tip move them in a JSON file and import them,
        // or even better, manage them via a UI: https://react.i18next.com/guides/multiple-translation-files#manage-your-translations-with-a-management-gui)
        resources: {
            cz: {
                translation: translationCz,
            },
            en: {
                translation: translationEn,
            },
            ua: {
                translation: translationUa,
            },
        },
        // lng: document.querySelector("html").lang, // if you're using a language detector, do not define the lng option
        fallbackLng: "en",

        detection: {
            order: [
                "htmlTag",
                // "querystring",
                "cookie",
                "localStorage",
                "path",
                // "sessionStorage",
                // "navigator",
                "subdomain",
            ],
            // order: ["localStorage", "navigator"],
            // lookupQuerystring: "lng",
            // lookupLocalStorage: I18N_LANGUAGE,
            caches: ["cookie"],
            // caches: ["cookie", "localStorage"],
        },

        // backend: {
        //     loadPath: "./../assets/locales/{{lng}}/translation.json",
        // },

        // react: { useSuspense: false },

        interpolation: {
            escapeValue: false, // react already safes from xss => https://www.i18next.com/translation-function/interpolation#unescape
        },
    });

function App() {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".wrapper").style.display = "initial";
        }, 2000);
    }, []);

    return (
        <I18nextProvider i18n={i18n}>
            <Router>
                <Loading />
                <div className="wrapper">
                    <ScrollToTop />
                    <ScrollToTopBtn />
                    <Header />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/offer" element={<Offer />} />
                        <Route path="/our-team" element={<OurTeam />} />
                        <Route
                            path="/clinic-gallery"
                            element={<ClinicGallery />}
                        />
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
                        <Route path="/price-list" element={<PriceList />} />
                        <Route path="/contact" element={<Contact />} />
                        {/* <Route path="/appointment" element={<Appointment />} /> */}
                        <Route
                            path="/personal-data"
                            element={<PersonalData />}
                        />
                    </Routes>
                    <NavLink className="phone-btn" to="/contact">
                        <img src={phoneCallIcon} alt="Phone" />
                    </NavLink>
                    <Footer />
                </div>
            </Router>
        </I18nextProvider>
    );
}

export default App;
