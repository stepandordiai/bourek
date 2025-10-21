import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import navLinksData from "./../../data/nav-links-data.json";
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
				<meta
					name="description"
					content="Ordinace MUDr. Josef Bourek – odborná rehabilitační péče v Kolíně. Fyzioterapie, elektroléčba, lymfodrenáže a moderní terapie pro úlevu od bolesti."
				/>
				<title>{t("home.secondary_title")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/" />
			</Helmet>
			<main className="home">
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
						{navLinksData
							.filter((link) => link.id === 3)
							.flatMap((link) => link.nestedLinks)
							.map((link) => {
								return (
									<div className="home__service-card">
										<p>{t(link.name)}</p>
										<NavLink
											className="grid-container__link"
											to={`/${link.id}`}
										>
											<span>{t("home.find_out_more")}</span>
											<img
												src={arrowUpperRightIcon}
												width={20}
												height={20}
												alt=""
											/>
										</NavLink>
									</div>
								);
							})}
					</div>
				</div>
				<Testimonials />
				<FAQ />
			</main>
		</>
	);
};

export default Home;
