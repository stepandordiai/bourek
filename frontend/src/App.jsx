import { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
import PersonalData from "./pages/PersonalData/PersonalData";
import Footer from "./components/Footer/Footer";
import Banner from "./components/Banner/Banner";
// import OnlineAppointment from "./pages/OnlineAppointment/OnlineAppointment";
import NotFound from "./pages/NotFound/NotFound";
import "./i18n";
import FacebookIcon from "./icons/FacebookIcon";
import "./App.scss";
import TelIcon from "./icons/TelIcon";

function App() {
	const [floatContactActive, setFloatContactActive] = useState(false);

	const toggleFloatContact = () => setFloatContactActive((prev) => !prev);

	useEffect(() => {
		setTimeout(() => {
			document.querySelector(".wrapper").style.display = "initial";
		}, 2000);

		const hideFloatContact = () => setFloatContactActive(false);

		window.addEventListener("scroll", hideFloatContact);

		return () => window.removeEventListener("scroll", hideFloatContact);
	}, []);

	return (
		<Router>
			<ScrollToTop />
			<Loading />
			<div className="wrapper" style={{ display: "none" }}>
				<Header />
				<ScrollToTopBtn />
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/co-nabizime" element={<Offer />} />
					<Route path="/cenik" element={<PriceList />} />
					<Route path="/nas-tym" element={<OurTeam />} />
					<Route path="/galerie-kliniky" element={<ClinicGallery />} />
					<Route path="/ordinace" element={<Surgery />} />
					<Route path="/starvac" element={<Starvac />} />
					<Route path="/celulitida" element={<Cellulite />} />
					<Route path="/lymfodrenaz" element={<Lymphatic />} />
					<Route path="/laser" element={<Laser />} />
					<Route path="/elektrolecba" element={<Electrotherapy />} />
					<Route path="/individualni-fyzioterapie" element={<LTV />} />
					<Route path="/kontakt" element={<Contact />} />
					<Route path="/osobni-udaje" element={<PersonalData />} />
					{/* <Route path="/online-appointment" element={<OnlineAppointment />} /> */}
					<Route path="*" element={<NotFound />} />
				</Routes>
				<div className="fixed-link-container">
					<a
						title="Telefon"
						className={`fixed-link ${
							floatContactActive ? "fixed-link--active" : ""
						}`}
						href="tel:+420602273579"
					>
						<TelIcon />
					</a>
					<a
						title="Facebook"
						className={`fixed-link1 ${
							floatContactActive ? "fixed-link1--active" : ""
						}`}
						href="https://www.facebook.com/profile.php?id=61575622597789"
						target="_blank"
					>
						<FacebookIcon />
					</a>
					<button
						onClick={toggleFloatContact}
						className="fixed-link-container-btn"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							className="bi bi-three-dots-vertical"
							viewBox="0 0 16 16"
						>
							<path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
						</svg>
					</button>
				</div>
				<Banner />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
