import { useEffect } from "react";
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
import "./i18n";
import Banner from "./components/Banner/Banner";
import phoneCallIcon from "/icons/phone-call.png";
import dotsIcon from "/icons/dots.png";
import facebookIcon from "/icons/facebook.png";
import instagramIcon from "/icons/instagram.png";
import "./App.scss";

function App() {
	useEffect(() => {
		setTimeout(() => {
			document.querySelector(".wrapper").style.display = "initial";
		}, 2000);

		document.addEventListener("scroll", () => {
			document
				.querySelector(".fixed-link")
				.classList.remove("fixed-link--active");
			document
				.querySelector(".fixed-link1")
				.classList.remove("fixed-link1--active");
			document
				.querySelector(".fixed-link2")
				.classList.remove("fixed-link2--active");
		});
	}, []);

	function toogleFixedLinks() {
		document
			.querySelector(".fixed-link")
			.classList.toggle("fixed-link--active");
		document
			.querySelector(".fixed-link1")
			.classList.toggle("fixed-link1--active");
		document
			.querySelector(".fixed-link2")
			.classList.toggle("fixed-link2--active");
	}

	return (
		<Router>
			<Loading />
			<div className="wrapper" style={{ display: "none" }}>
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
					<Route path="/electrotherapy" element={<Electrotherapy />} />
					<Route path="/ltv" element={<LTV />} />
					<Route path="/contact" element={<Contact />} />
					<Route path="/personal-data" element={<PersonalData />} />
				</Routes>
				<div className="fixed-link-container">
					<a title="Telefon" className="fixed-link" href="tel:+420602273579">
						<img width={20} height={20} src={phoneCallIcon} alt="" />
					</a>
					<a
						title="Facebook"
						className="fixed-link1"
						href="https://www.facebook.com/profile.php?id=61575622597789"
						target="_blank"
					>
						<img width={20} height={20} src={facebookIcon} alt="" />
					</a>
					<button
						onClick={toogleFixedLinks}
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
