import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import Container from "../../components/Container/Container";
import navLinksData from "./../../data/nav-links-data.json";
import { NavLink } from "react-router-dom";
import Testimonials from "../../components/Testimonials/Testimonials";
import FAQ from "../../components/FAQ/FAQ";
import { HashLink } from "react-router-hash-link";
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
				<title>Bourek | {t("homeMetaTitle")}</title>
				<link rel="canonical" href="https://www.bourek.cz/" />
			</Helmet>
			<main className="home">
				<Container>
					<section className="home-hero">
						<div className="home__wrapper">
							<div>
								<div className="home__title-container">
									<h1 className="home__title accent">MUDr. Josef Bourek</h1>
									<p className="home__title">MUDr. Julie Cadorini</p>
								</div>
								<h2 className="home__sec-title accent">{t("home.title")}</h2>
								<h3 className="home__title">{t("home.secondary_title")}</h3>
								<div className="home__link-container">
									<HashLink className="home__link" to="/#services" smooth>
										{t("services_title")}
									</HashLink>
									{/* <NavLink className="home__link" to="/online-appointment">
									{t("appointment_title")}
								</NavLink> */}
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
						<HashLink className="home__scroll-mouse-btn" to="/#services" smooth>
							<div className="wheel"></div>
						</HashLink>
					</section>
					<section className="home__services" id="services">
						<h2 className="home__services-title">{t("services_title")}</h2>
						<div className="home__grid-container">
							{navLinksData
								.filter((link) => link.id === 3)
								.flatMap((link) => link.nestedLinks)
								.map((link) => {
									return (
										<NavLink
											to={`/${link.id}`}
											key={link.id}
											className="home__service-card"
										>
											<p>{t(link.name)}</p>
											<span className="grid-container__link">
												<span>{t("home.find_out_more")}</span>
												<svg
													xmlns="http://www.w3.org/2000/svg"
													width="20"
													height="20"
													fill="currentColor"
													className="bi bi-arrow-up-right"
													viewBox="0 0 16 16"
												>
													<path
														fillRule="evenodd"
														d="M14 2.5a.5.5 0 0 0-.5-.5h-6a.5.5 0 0 0 0 1h4.793L2.146 13.146a.5.5 0 0 0 .708.708L13 3.707V8.5a.5.5 0 0 0 1 0z"
													/>
												</svg>
											</span>
										</NavLink>
									);
								})}
						</div>
					</section>
					<Testimonials />
					<FAQ />
				</Container>
			</main>
		</>
	);
};

export default Home;
