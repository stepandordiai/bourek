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
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-telephone-fill"
							viewBox="0 0 16 16"
						>
							<path
								fill-rule="evenodd"
								d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"
							/>
						</svg>
					</a>
					<a
						title="Facebook"
						className={`fixed-link1 ${
							floatContactActive ? "fixed-link1--active" : ""
						}`}
						href="https://www.facebook.com/profile.php?id=61575622597789"
						target="_blank"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="20"
							height="20"
							fill="currentColor"
							class="bi bi-facebook"
							viewBox="0 0 16 16"
						>
							<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951" />
						</svg>
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
							class="bi bi-three-dots-vertical"
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
