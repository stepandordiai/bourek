import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import arrowUpperRightIcon from "/icons/arrow-upper-right.png";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("home.secondary_title")} | MUDr. Josef Bourek</title>
				<link rel="canonical" href="https://bourek.cz/" />
			</Helmet>
			<section className="home">
				<div className="home__container">
					<div className="home__wrapper">
						<div>
							<div className="home__title-container">
								<h1 className="home__title accent">MUDr. Josef Bourek</h1>
								<p className="home__title">MUDr. Julie Cadorini</p>
							</div>
							<h2 className="home__sec-title accent">{t("home.title")}</h2>
							<h3 className="home__title">{t("home.secondary_title")}</h3>
							<div className="home__link-container">
								<a className="home__link" href="#services">
									{t("services_title")}
								</a>
								<a className="home__link" href="tel:+420602273579">
									{t("appointment_title")}
								</a>
							</div>
						</div>
						<div>
							<img
								className="home__img"
								src="https://ld-wp73.template-help.com/wordpress/prod_29195/v1/wp-content/uploads/2020/05/Rectangle-64.png"
								alt="MUDr. Josef Bourek"
							/>
						</div>
					</div>
					<a className="home__scroll-mouse-btn" href="#services">
						<div className="wheel"></div>
					</a>
				</div>
				<div className="home__services" id="services">
					<h2 className="home__services-title">{t("services_title")}</h2>
					<div className="home__grid-container">
						<div className="home__service-card">
							<p>{t("service_1")}</p>
							<NavLink className="grid-container__link" to="/surgery">
								<span>{t("home.find_out_more")}</span>
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div className="home__service-card">
							<p>{t("service_2")}</p>
							<NavLink className="grid-container__link" to="/starvac">
								<span>{t("home.find_out_more")}</span>
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div className="home__service-card">
							<p>{t("service_3")}</p>
							<NavLink className="grid-container__link" to="/cellulite">
								<span>{t("home.find_out_more")}</span>
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div className="home__service-card">
							<p>{t("service_4")}</p>
							<NavLink className="grid-container__link" to="/lymphatic">
								<span>{t("home.find_out_more")}</span>
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div className="home__service-card">
							<p>{t("service_5")}</p>
							<NavLink className="grid-container__link" to="/laser">
								<span>{t("home.find_out_more")}</span>
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div className="home__service-card">
							<p>{t("service_6")}</p>
							<NavLink className="grid-container__link" to="/electrotherapy">
								<span>{t("home.find_out_more")}</span>
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div className="home__service-card">
							<p>{t("service_7")}</p>
							<NavLink className="grid-container__link" to="/ltv">
								<span>{t("home.find_out_more")}</span>
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
					</div>
				</div>
				<Testimonials />
				<FAQ />
			</section>
		</>
	);
};

export default Home;
