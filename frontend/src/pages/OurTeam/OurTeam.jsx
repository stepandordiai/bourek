import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import Container from "../../components/Container/Container";
import profileIcon from "/icons/profile-icon.png";
import "./OurTeam.scss";

const ourTeamData = [
	{
		profession: "our_team.profession_type_1",
		name: "MUDr. Josef Bourek",
		number: "+420 602 273 579",
		email: "josef@bourek.cz",
		workingHours: [
			{ id: 3, name: "our_team.wed", start: "12:30", end: "17:00" },
			{ id: 4, name: "our_team.thu", start: "8:30", end: "11:30" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_1",
		name: "MUDr. Julie Cadorini",
		email: "cadorinij@seznam.cz",
		emailTxt: true,
		workingHours: [
			{ id: 1, name: "our_team.mon", start: "7:30", end: "11:30" },
			{ id: 2, name: "our_team.tue", start: "13:00", end: "16:30" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_2",
		name: "Matějková Iva",
		number: "+420 607 841 622",
		workingHours: [
			{ id: 1, name: "our_team.mon", start: "6:00", end: "14:00" },
			{ id: 2, name: "our_team.tue", start: "6:00", end: "14:00" },
			{ id: 3, name: "our_team.wed", start: "6:00", end: "18:00" },
			{ id: 4, name: "our_team.thu", start: "6:00", end: "13:30" },
			{ id: 5, name: "our_team.fri", start: "6:00", end: "13:00" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_2",
		name: "Jansová Radka",
		workingHours: [
			{ id: 1, name: "our_team.mon", start: "7:00", end: "14:30" },
			{ id: 2, name: "our_team.tue", start: "7:00", end: "17:00" },
			{ id: 3, name: "our_team.wed", start: "7:00", end: "15:00" },
			{ id: 4, name: "our_team.thu", start: "7:00", end: "14:30" },
			{ id: 5, name: "our_team.fri", start: "7:00", end: "14:00" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_3",
		name: "Pixová Dagmar",
		workingHours: [
			{ id: 1, name: "our_team.mon", start: "7:30", end: "11:30" },
			{ id: 3, name: "our_team.wed", start: "12:30", end: "17:00" },
			{ id: 4, name: "our_team.thu", start: "8:30", end: "11:30" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_3",
		name: "Soňa Minovska",
		workingHours: [
			{ id: 2, name: "our_team.tue", start: "13:00", end: "16:30" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_3",
		name: "Elena Zajičkova",
		number: "+420 601 369 198",
		workingHours: [
			{ id: 2, name: "our_team.tue", start: "8:30", end: "14:30" },
		],
		place: 2,
	},
];

const now = new Date();
const dayNow = now.getDay();
const currentMinutes = now.getHours() * 60 + now.getMinutes();

// TODO: learn this
function timeToMinutes(time) {
	const [h, m] = time.split(":").map(Number);
	return h * 60 + m;
}

const OurTeam = () => {
	const { t } = useTranslation();

	return (
		<>
			<Helmet>
				<meta
					name="description"
					content="Seznamte se s týmem odborníků v ordinaci MUDr. Josef Bourek v Kolíně. Zkušení fyzioterapeuti a zdravotnický personál poskytují individuální rehabilitační péči."
				/>
				<title>{t("our_team_title")} | Bourek</title>
				<link rel="canonical" href="https://www.bourek.cz/nas-tym" />
			</Helmet>
			<main>
				<PageTitle title={t("our_team_title")} />
				<Container>
					<div className="our-team">
						<p className="our-team__title">Kolín</p>
						<div className="our-team__grid">
							{ourTeamData
								.filter((member) => member.place === 1)
								.map(
									(
										{ profession, name, number, email, workingHours, emailTxt },
										index,
									) => {
										// TODO: learn this
										const isWorkingNow = workingHours.some((day) => {
											const start = timeToMinutes(day.start);
											const end = timeToMinutes(day.end);

											return (
												currentMinutes >= start &&
												currentMinutes <= end &&
												day.id === dayNow
											);
										});

										return (
											<div key={index} className="our-team__card">
												<div
													style={{
														display: "flex",
														justifyContent: "flex-start",
														alignItems: "center",
														gap: 10,
													}}
												>
													<span
														className={`our-team__card-indicator ${isWorkingNow ? "indicator--active" : ""}`.trim()}
													></span>
													<span>
														{isWorkingNow
															? t("our_team.atWork")
															: t("our_team.offWork")}
													</span>
												</div>
												<img src={profileIcon} alt={name} loading="lazy" />
												<div className="our-team__card-top">
													<p>{t(profession)}</p>
													<p>{name}</p>
													{number && (
														<a href={`tel:${number.replaceAll(" ", "")}`}>
															{number}
														</a>
													)}
													{email && (
														<a href="mailto:josef@gmail.com">{email}</a>
													)}
													{emailTxt && (
														<p
															style={{
																textAlign: "center",
																backgroundColor: "var(--blue-clr)",
																color: "#fff",
																padding: 10,
																borderRadius: 10,
															}}
														>
															Pro konzultaci lékarky využijte zabezpečenou
															komunikaci přes Smartmedix.net, odpoví v pracovní
															době.
														</p>
													)}
												</div>
												<div className="our-team__card-bottom">
													<p style={{ marginBottom: 5, fontWeight: 600 }}>
														{t("our_team.working_hours")}
													</p>
													<ul className="our-team__working-hours">
														{workingHours.map((day, i) => {
															return (
																<li
																	key={i}
																	className={`day ${day.id === dayNow ? "day--active" : ""}`.trim()}
																>
																	<span>{t(day.name)}:</span>
																	<span>
																		{day.start} - {day.end}
																	</span>
																</li>
															);
														})}
													</ul>
												</div>
											</div>
										);
									},
								)}
						</div>
						<p className="our-team__title">Český Brod</p>
						<div className="our-team__grid">
							{ourTeamData
								.filter((member) => member.place === 2)
								.map(
									(
										{ profession, name, number, email, workingHours },
										index,
									) => {
										const isWorkingNow = workingHours.some((day) => {
											const start = timeToMinutes(day.start);
											const end = timeToMinutes(day.end);

											return (
												currentMinutes >= start &&
												currentMinutes <= end &&
												day.id === dayNow
											);
										});

										return (
											<div key={index} className="our-team__card">
												<div
													style={{
														display: "flex",
														justifyContent: "flex-start",
														alignItems: "center",
														gap: 10,
													}}
												>
													<span
														className={`our-team__card-indicator ${isWorkingNow ? "indicator--active" : ""}`.trim()}
													></span>
													<span>
														{isWorkingNow
															? t("our_team.atWork")
															: t("our_team.offWork")}
													</span>
												</div>
												<img src={profileIcon} alt="" />
												<div className="our-team__card-top">
													<p>{t(profession)}</p>
													<p>{name}</p>
													{number && (
														<a href={`tel:${number.replaceAll(" ", "")}`}>
															{number}
														</a>
													)}
													{email && (
														<a href="mailto:josef@gmail.com">{email}</a>
													)}
												</div>
												<div className="our-team__card-bottom">
													<p style={{ marginBottom: 5, fontWeight: 500 }}>
														{t("our_team.working_hours")}
													</p>
													<ul className="our-team__working-hours">
														{workingHours.map((day, i) => {
															return (
																<li
																	key={i}
																	className={`day ${day.id === dayNow ? "day--active" : ""}`.trim()}
																>
																	<span>{t(day.name)}:</span>
																	<span>
																		{day.start} - {day.end}
																	</span>
																</li>
															);
														})}
													</ul>
												</div>
											</div>
										);
									},
								)}
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default OurTeam;
