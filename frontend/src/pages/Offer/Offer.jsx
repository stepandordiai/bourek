import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import WordFileIcon from "../../icons/WordFileIcon";
import "./Offer.scss";

const Offer = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Komplexní rehabilitační péče v ordinaci MUDr. Josef Bourek v Kolíně – odborné lékařské služby, fyzioterapie, elektroterapie, lymfodrenáž a další moderní terapie."
				/>
				<title>{t("offer_title")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/co-nabizime" />
			</Helmet>
			<main className="offer">
				<PageTitle title={t("offer_title")} />
				<Container>
					<div className="offer-container">
						<p>V naší ordinaci přijímáme pouze předem objednané pacienty.</p>
						<p>Smluvní pojišťovny: 111, 201, 211, 207, 205, 209</p>
						<strong>Rehabilitační lékaři:</strong>
						<i>MUDr. Josef Bourek:</i>
						<p>
							rehabilitační lékař s atestací I. stupně z ortopedie (1983),
							atestace z fyziatrie, balneologie a léčebné rehabilitace (1990),
							kurs mobilisací a manipulací (1985 až 1986 u profesora Lewita)
							ukončený zkouškou. V roce 2010 dr.Bourek absolvoval inovační kurz
							mobilisací a manipulací taktéž zakončen zkouškou a vydáním
							certifikátu
						</p>
						<i>MUDr. Julie Cadorini:</i>
						<ul className="offer-list">
							<li>
								atestovaná lékařka pro dospělé v oboru Rehabilitační a fyzikální
								medicína (r. 2024), základní neurologický kmen (r. 2021)
							</li>
							<li>
								používané techniky:
								<ul className="offer-list">
									<li>
										Manuální a myoskeletální medicína (kurz při IPVZ lékařů
										2024), Škola zad (IPVZ lékařů 2020),
									</li>
									<li>
										intradermální obstřiky spoušťových bodů a obstřiky SIK
										lokálním anestetikem, technika suché jehly (pro klasické
										obstřiky ramen, kyčlí, kolen se obraťte na ortopedickou
										ambulanci)
									</li>
									<li>
										<strong>
											Lékařská akupunktura (celoevropsky platný certifikát, kurz
											při IPVZ 2024)
										</strong>{" "}
										v rámci oboru rehabilitace (především bolesti pohybového
										aparátu, hlavy, psychosomatické obtíže...),
									</li>
								</ul>
							</li>
						</ul>
						<p>
							Akupunktura v ČR není hrazena z veřejného zdravotního pojištění,
							viz ceník
						</p>
						<p>
							Více informací o akupunktuře v informovaném souhlasu zde:{" "}
							<a
								style={{
									color: "var(--blue-clr)",
									display: "inline-flex",
									alignItems: "center",
									gap: 5,
								}}
								href="/INFORMOSOUHLAS.docx"
							>
								<span>dokument</span>
								<WordFileIcon />
							</a>
						</p>
						<p>
							Před akupunkturou pročíst informovaný souhlas a přinést jej
							podepsaný lékařce.
						</p>
						<p>
							<strong>Fyzioterapie:</strong> kompletní elektroléčba, laser
							terapie (obojí na přístrojích české firmy BTL, s. r. o.), solux,
							léčebná tělesná výchova, speciální LTV na míčích, poradenství o
							zdravém životním stylu, tj. veškeré komplexní rehabilitační
							služby.
						</p>
						<p>
							Laserterapii, starvac, lymfodrenáž a solux poskytujeme za přímou
							úhradu – viz ceník.
						</p>
						<p>
							Více o lymfodrenáži zde:{" "}
							<a
								style={{
									color: "var(--blue-clr)",
									display: "inline-flex",
									alignItems: "center",
									gap: 5,
								}}
								href="/lymfodrenaz.docx"
							>
								<span>dokument o lymfodrenazi</span>
								<WordFileIcon />
							</a>
						</p>
						<p>
							Více o starvacu zde:{" "}
							<a
								style={{
									color: "var(--blue-clr)",
									display: "inline-flex",
									alignItems: "center",
									gap: 5,
								}}
								href="/starvac.docx"
							>
								<span>dokument o starvacu</span>
								<WordFileIcon />
							</a>
						</p>
						<i>
							Prosíme o včasné zrušení termínu na fyzioterapii, tj. 24h předem,
							nejdéle v brzkých ranních hodinách téhož dne cestou SMS. Pakliže
							nebude váš termín včas zrušen, terapie vám propadá, v případě 2
							absenci bez omluvy bude zrušena veškerá léčba
						</i>
					</div>
				</Container>
			</main>
		</>
	);
};

export default Offer;
