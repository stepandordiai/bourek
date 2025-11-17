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
			{ name: "our_team.wed", hours: "12:30 - 17:00" },
			{ name: "our_team.thu", hours: "8:30 - 11:30" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_1",
		name: "MUDr. Julie Cadorini",
		email: "cadorinij@seznam.cz",
		emailTxt: true,
		workingHours: [
			{ name: "our_team.mon", hours: "7:30 - 11:30" },
			{ name: "our_team.tue", hours: "13:00 - 16:30" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_2",
		name: "Matějková Iva",
		number: "+420 607 841 622",
		workingHours: [
			{ name: "our_team.mon", hours: "6:00 - 14:00" },
			{ name: "our_team.tue", hours: "6:00 - 14:00" },
			{ name: "our_team.wed", hours: "6:00 - 18:00" },
			{ name: "our_team.thu", hours: "6:00 - 13:30" },
			{ name: "our_team.fri", hours: "6:00 - 13:00" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_2",
		name: "Jansová Radka",
		workingHours: [
			{ name: "our_team.mon", hours: "7:00 - 17:00" },
			{ name: "our_team.tue", hours: "7:00 - 14:30" },
			{ name: "our_team.wed", hours: "7:00 - 15:00" },
			{ name: "our_team.thu", hours: "7:00 - 14:30" },
			{ name: "our_team.fri", hours: "7:00 - 14:00" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_3",
		name: "Pixová Dagmar",
		workingHours: [
			{ name: "our_team.mon", hours: "7:30 - 11:30" },
			{ name: "our_team.wed", hours: "12:30 - 17:00" },
			{ name: "our_team.thu", hours: "8:30 - 11:30" },
		],
		place: 1,
	},
	{
		profession: "our_team.profession_type_3",
		name: "Soňa Minovska",
		workingHours: [{ name: "our_team.tue", hours: "13:00 - 16:30" }],
		place: 1,
	},
	{
		profession: "our_team.profession_type_3",
		name: "Elena Zajičkova",
		number: "+420 601 369 198",
		workingHours: [{ name: "our_team.tue", hours: "8:30 - 14:30" }],
		place: 2,
	},
];

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
				<link rel="canonical" href="https://www.bourek.cz/our-team" />
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
										index
									) => {
										return (
											<div key={index} className="our-team__card">
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
													<p style={{ marginBottom: 5 }}>
														{t("our_team.working_hours")}
													</p>
													<ul className="our-team__working-hours">
														{workingHours.map((day, index) => {
															return (
																<li key={index} className="day">
																	<span>{t(day.name)}:</span>
																	<span>{day.hours}</span>
																</li>
															);
														})}
													</ul>
												</div>
											</div>
										);
									}
								)}
						</div>
						<p className="our-team__title">Český Brod</p>
						<div className="our-team__grid">
							{ourTeamData
								.filter((member) => member.place === 2)
								.map(
									(
										{ profession, name, number, email, workingHours },
										index
									) => {
										return (
											<div key={index} className="our-team__card">
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
													<p style={{ marginBottom: 5 }}>
														{t("our_team.working_hours")}
													</p>
													<ul className="our-team__working-hours">
														{workingHours.map((day, index) => {
															return (
																<li key={index} className="day">
																	<span>{t(day.name)}:</span>
																	<span>{day.hours}</span>
																</li>
															);
														})}
													</ul>
												</div>
											</div>
										);
									}
								)}
						</div>
					</div>
				</Container>
			</main>
		</>
	);
};

export default OurTeam;
