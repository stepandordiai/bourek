import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import { HashLink } from "react-router-hash-link";
import "./Cellulite.scss";

const Cellulite = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Zjistěte, jak účinně bojovat proti celulitidě. Ordinace MUDr. Josef Bourek v Kolíně nabízí terapie, masáže a přístrojové ošetření pro hladší pokožku."
				/>
				<title>{t("service_3")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/cellulite" />
			</Helmet>
			<main>
				<PageTitle title={t("service_3")} />
				<PageInfo>
					<strong>{t("cellulite.chapters")}:</strong>
					<ul className="cellulite__chapters-list">
						<li>
							<HashLink to="#chapter1" smooth>
								{t("cellulite.chapter_1")}
							</HashLink>
						</li>
						<li>
							<HashLink to="#chapter2" smooth>
								{t("cellulite.chapter_2")}
							</HashLink>
						</li>
						<li>
							<HashLink to="#chapter3" smooth>
								{t("cellulite.chapter_3")}
							</HashLink>
						</li>
						<li>
							<HashLink to="#chapter4" smooth>
								{t("cellulite.chapter_4")}
							</HashLink>
						</li>
						<li>
							<HashLink to="#chapter5" smooth>
								{t("cellulite.chapter_5")}
							</HashLink>
						</li>
						<li>
							<HashLink href="#chapter6" smooth>
								{t("cellulite.chapter_6")}
							</HashLink>
						</li>
					</ul>
					<div className="chapter" id="chapter1">
						<a href="#chapter1">{t("cellulite.chapter_1")}</a>
					</div>
					<p>{t("cellulite.chapter_1_info_1")}</p>
					<p>{t("cellulite.chapter_1_info_2")}</p>
					<p>{t("cellulite.chapter_1_info_3")}</p>
					<p>{t("cellulite.chapter_1_info_4")}</p>
					<p>{t("cellulite.chapter_1_info_5")}</p>
					<p>{t("cellulite.chapter_1_info_6")}</p>
					<p>{t("cellulite.chapter_1_info_7")}</p>
					<p>{t("cellulite.chapter_1_info_8")}</p>
					<p>{t("cellulite.chapter_1_info_9")}</p>
					<p>{t("cellulite.chapter_1_info_10")}</p>
					<div className="chapter" id="chapter2">
						<a href="#chapter2">{t("cellulite.chapter_2")}</a>
					</div>
					<p>{t("cellulite.chapter_2_info_1")}</p>
					<p>{t("cellulite.chapter_2_info_2")}</p>
					<div className="chapter" id="chapter3">
						<a href="#chapter3">{t("cellulite.chapter_3")}</a>
					</div>
					<p className="semi-tp-text">{t("cellulite.chapter_3_info_1")}</p>
					<p>{t("cellulite.chapter_3_secondary_info_1")}</p>
					<p className="semi-tp-text">{t("cellulite.chapter_3_info_2")}</p>
					<p>{t("cellulite.chapter_3_secondary_info_2")}</p>
					<p className="semi-tp-text">{t("cellulite.chapter_3_info_3")}</p>
					<p>{t("cellulite.chapter_3_secondary_info_3")}</p>
					<p className="semi-tp-text">{t("cellulite.chapter_3_info_4")}</p>
					<p>{t("cellulite.chapter_3_secondary_info_4")}</p>
					<div className="chapter" id="chapter4">
						<a href="#chapter4">{t("cellulite.chapter_4")}</a>
					</div>
					<p>{t("cellulite.chapter_4_info_1")}</p>
					<p>{t("cellulite.chapter_4_info_2")}</p>
					<div className="chapter" id="chapter5">
						<a href="#chapter5">{t("cellulite.chapter_5")}</a>
					</div>
					<ol className="cellulite__ol-list">
						<li>{t("cellulite.chapter_5_info_1")}</li>
						<li>{t("cellulite.chapter_5_info_2")}</li>
						<li>{t("cellulite.chapter_5_info_3")}</li>
						<li>{t("cellulite.chapter_5_info_4")}</li>
						<li>{t("cellulite.chapter_5_info_5")}</li>
					</ol>
					<div className="chapter" id="chapter6">
						<a href="#chapter6">{t("cellulite.chapter_6")}</a>
					</div>
					<ol className="cellulite__ol-list">
						<li>{t("cellulite.chapter_6_info_1")}</li>
						<li>{t("cellulite.chapter_6_info_2")}</li>
						<li>{t("cellulite.chapter_6_info_3")}</li>
						<li>{t("cellulite.chapter_6_info_4")}</li>
						<li>{t("cellulite.chapter_6_info_5")}</li>
						<li>{t("cellulite.chapter_6_info_6")}</li>
						<li>{t("cellulite.chapter_6_info_7")}</li>
					</ol>
					<p>{t("cellulite.chapter_6_info_8")}</p>
				</PageInfo>
			</main>
		</>
	);
};

export default Cellulite;
