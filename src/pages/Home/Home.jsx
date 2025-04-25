import { Helmet } from "react-helmet";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import Testimonials from "../../components/Testimonials/Testimonials";
import arrowUpperRightIcon from "/assets/icons/arrow-upper-right.png";
import FAQ from "../../components/FAQ/FAQ";
import "./Home.scss";

const Home = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("home.secondary_title")} - MUDr. Josef Bourek</title>
				<link rel="canonical" href="https://bourek.cz" />
			</Helmet>
			<section className="home">
				<div className="home__container">
					<div className="home__wrapper">
						<div>
							<h1 className="home__sec-title accent-title">
								MUDr. Josef Bourek
							</h1>
							<h2 className="home__sec-title">MUDr. Julie Cadorini</h2>
							<h2 className="home__title">{t("home.title")}</h2>
							<h3 className="home__sec-title">{t("home.secondary_title")}</h3>
						</div>
						<div>
							<img
								className="home__img"
								src="https://ld-wp73.template-help.com/wordpress/prod_29195/v1/wp-content/uploads/2020/05/Rectangle-64.png"
								alt="Home Image"
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
						<div>
							<span>{t("service_1")}</span>
							<NavLink className="grid-container__link" to="/surgery">
								{t("home.find_out_more")}
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div>
							<span>{t("service_2")}</span>
							<NavLink className="grid-container__link" to="/starvac">
								{t("home.find_out_more")}
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div>
							<span>{t("service_3")}</span>
							<NavLink className="grid-container__link" to="/cellulite">
								{t("home.find_out_more")}
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div>
							<span>{t("service_4")}</span>
							<NavLink className="grid-container__link" to="/lymphatic">
								{t("home.find_out_more")}
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div>
							<span>{t("service_5")}</span>
							<NavLink className="grid-container__link" to="/laser">
								{t("home.find_out_more")}
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div>
							<span>{t("service_6")}</span>
							<NavLink className="grid-container__link" to="/electrotherapy">
								{t("home.find_out_more")}
								<img src={arrowUpperRightIcon} alt="Arrow Upper Right" />
							</NavLink>
						</div>
						<div>
							<span>{t("service_7")}</span>
							<NavLink className="grid-container__link" to="/ltv">
								{t("home.find_out_more")}
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
