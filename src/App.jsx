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
import phoneCallIcon from "/icons/phone-call.png";
import dotsIcon from "/icons/dots.png";
import facebookIcon from "/icons/facebook.png";
// import OnlineAppointment from "./pages/OnlineAppointment/OnlineAppointment";
import NotFound from "./pages/NotFound/NotFound";
import "./i18n";
import "./App.scss";

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
					<Route path="/offer" element={<Offer />} />
					<Route path="/price-list" element={<PriceList />} />
					<Route path="/our-team" element={<OurTeam />} />
					<Route path="/clinic-gallery" element={<ClinicGallery />} />
					<Route path="/surgery" element={<Surgery />} />
					<Route path="/starvac" element={<Starvac />} />
					<Route path="/cellulite" element={<Cellulite />} />
					<Route path="/lymphatic" element={<Lymphatic />} />
					<Route path="/laser" element={<Laser />} />
					<Route path="/electrotherapy" element={<Electrotherapy />} />
					<Route path="/ltv" element={<LTV />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/personal-data" element={<PersonalData />} />
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
						<img width={20} height={20} src={phoneCallIcon} alt="" />
					</a>
					<a
						title="Facebook"
						className={`fixed-link1 ${
							floatContactActive ? "fixed-link1--active" : ""
						}`}
						href="https://www.facebook.com/profile.php?id=61575622597789"
						target="_blank"
					>
						<img width={20} height={20} src={facebookIcon} alt="" />
					</a>
					<button
						onClick={toggleFloatContact}
						className="fixed-link-container-btn"
					>
						<img width={20} height={20} src={dotsIcon} alt="" />
					</button>
				</div>
				<Banner />
				<Footer />
			</div>
		</Router>
	);
}

export default App;
