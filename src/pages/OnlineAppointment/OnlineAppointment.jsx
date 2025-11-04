import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import qr1 from "/qr/with-login.png";
import qr2 from "/qr/without-login.png";
import "./OnlineAppointment.scss";

const OnlineAppointment = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<title>{t("onlineAppointmentTitle")} | Bourek</title>
			</Helmet>
			<main>
				<PageTitle title={t("onlineAppointmentTitle")} />
				<PageInfo>
					<strong>Informace pro pacienty:</strong>
					<p>
						Pro naše pacienty zavádíme online služby, které po přihlášení
						umožňují jednoduchý a bezpečný způsob komunikace s ordinací (místo
						e-mailu a telefonu), vše na jednom místě, dostupné i mimo naše
						ordinační hodiny. Pro přihlášení do tohoto systému a využití všech
						online služeb je nutné mít u lékaře uložený kontaktní e-mail. Bez
						přihlášení lze využít online služby pouze v rozsahu objednávání.
						Prosíme pacienty, kteří chtějí využít online služby a nemají u nás
						dosud uložený e-mail o jeho urychlené doplnění.
					</p>
					<ul className="online-appointment__ul">
						<li>
							Při objednávání prosím respektujte definované typy vyšetření – viz
							výběr v objednávkovém formuláři
						</li>
						<li>
							Nevhodně zvolené objednávky mohou být ze strany ordinace bez
							náhrady zrušeny
						</li>
						<li>Do důvodu návštěvy upřesněte vaše obtíže</li>
						<li>
							Pokud se nemůžete dostavit na plánovanou návštěvu, prosím zrušte
							si svou objednávku předem sami
						</li>
					</ul>
					<ul className="online-appointment__ul">
						<li style={{ listStyle: "disc" }}>
							Pokud se nemůžete dostavit na plánovanou návštěvu, prosím zrušte
							si svou objednávku předem sami
						</li>
						<li>
							Při každém dalším vstupu už zadáváte svůj e-mail a zvolené heslo
							rovnou do přihlašovací obrazovky
						</li>
					</ul>
					<CustomDivider />
					<div className="online-appointment__wrapper">
						<div className="online-appointment__container">
							<strong>
								Pokud u nás máte email a chcete plně využít online služby,
								použijte:
							</strong>
							<div style={{ width: "min-content", alignSelf: "flex-end" }}>
								<img src={qr1} alt="" />
								<p style={{ textAlign: "center" }}>
									{t("onlineAppointment.orClick")}
								</p>
								<a
									className="online-appointment__link"
									href="https://v3.smartmedix.net/Login/?idreg=2478701,2478702&an=0"
									target="_blank"
								>
									Přístup s přihlášením
								</a>
							</div>
						</div>
						<div className="online-appointment__container">
							<strong>
								Pokud u nás nemáte email, ale jste u nás vedený v péči a chcete
								se objednat, použijte:
							</strong>
							<div style={{ width: "min-content", alignSelf: "flex-end" }}>
								<img src={qr2} alt="" />
								<p style={{ textAlign: "center" }}>
									{t("onlineAppointment.orClick")}
								</p>
								<a
									className="online-appointment__link"
									href="https://v3.smartmedix.net/login/anonym/?reg=2478701,2478702"
									target="_blank"
								>
									Přístup bez přihlášení
								</a>
							</div>
						</div>
					</div>
					<CustomDivider />
					<strong>Po přihlášení máte k dispozici tyto služby:</strong>
					<ol className="online-appointment__ol">
						<li>
							Zaslání žádosti o recept – vyplníte příslušný formulář, uvedete
							název a obvyklé dávkování, požadované léky prosím zadávejte pokud
							možno do 1 formuláře
						</li>
						<li>
							Zadání objednávky k návštěvě lékaře – máte k dispozici kalendář s
							přehledem termínů, vyplníte formulář a po odeslání a zpracování u
							lékaře vám systém zašle zpětnou informaci o uvedené objednávce na
							váš e-mail
							<br />
							Takto zadanou objednávku si můžete předem smazat
							<br />
							Přehled termínů objednávek – můžete sledovat přehled termínů svých
							budoucích návštěv v ordinaci
						</li>
						<li>
							Zaslání zprávy – můžete lékaři zaslat informaci k probíhající
							léčbě nebo dotaz, omluvu z plánované návštěvy
							<br />
							Zaslání dokumentu k založení do karty – můžete do ordinace zaslat
							dokument formátu pdf nebo obrázek (např. zprávu z vyšetření u
							specialisty apod.)
							<br />
							Lékař může rychlou a krátkou informaci zaslat vám.
						</li>
						<li>
							Můžete sledovat způsob vyřízení svých požadavků, o vyřízení jste
							informován e-mailem
						</li>
					</ol>
				</PageInfo>
			</main>
		</>
	);
};

export default OnlineAppointment;
