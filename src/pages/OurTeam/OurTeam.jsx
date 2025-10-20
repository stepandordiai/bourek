import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet-async";
import PageTitle from "../../components/PageTitle/PageTitle";
import profileIcon from "/icons/profile-icon.png";
import "./OurTeam.scss";

const OurTeam = () => {
	const { t } = useTranslation();

	const ourTeamData = [
		{
			profession: t("our_team.profession_type_1"),
			name: "MUDr. Josef Bourek",
			number: "+420 602 273 579",
			email: "josef@bourek.cz",
			workingHours: {
				wed: "12:30 - 17:00",
				thu: "8:30 - 11:30",
			},
			place: 1,
		},
		{
			profession: t("our_team.profession_type_1"),
			name: "MUDr. Julie Cadorini",
			email: "cadorinij@seznam.cz",
			workingHours: {
				mon: "7:30 - 11:30",
				tue: "13:00 - 16:30",
			},
			place: 1,
		},
		{
			profession: t("our_team.profession_type_2"),
			name: "Matějková Iva",
			number: "+420 607 841 622",
			workingHours: {
				mon: "6:00 - 14:00",
				tue: "6:00 - 14:00",
				wed: "6:00 - 18:00",
				thu: "6:00 - 13:30",
				fri: "6:00 - 13:00",
			},
			place: 1,
		},
		{
			profession: t("our_team.profession_type_2"),
			name: "Jansová Radka",
			workingHours: {
				mon: "7:00 - 17:00",
				tue: "7:00 - 14:30",
				wed: "7:00 - 15:00",
				thu: "7:00 - 14:30",
				fri: "7:00 - 14:00",
			},
			place: 1,
		},
		{
			profession: t("our_team.profession_type_3"),
			name: "Pixová Dagmar",
			workingHours: {
				mon: "7:00 - 17:00",
				tue: "7:00 - 14:30",
				wed: "7:00 - 15:00",
				thu: "7:00 - 14:30",
				fri: "7:00 - 14:00",
			},
			place: 1,
		},
		{
			profession: t("our_team.profession_type_3"),
			name: "Soňa Minovska",
			workingHours: {
				mon: "7:00 - 17:00",
				tue: "7:00 - 14:30",
				wed: "7:00 - 15:00",
				thu: "7:00 - 14:30",
				fri: "7:00 - 14:00",
			},
			place: 1,
		},
		{
			profession: t("our_team.profession_type_3"),
			name: "Elena Zajičkova",
			number: "+420 601 369 198",
			workingHours: {
				tue: "8:30 - 14:30",
			},
			place: 2,
		},
	];

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
				<div className="our-team">
					<p className="our-team__title">Kolín</p>
					<div className="our-team__grid">
						{ourTeamData
							.filter((member) => member.place === 1)
							.map(
								({ profession, name, number, email, workingHours }, index) => {
									return (
										<div key={index} className="our-team__card">
											<img src={profileIcon} alt={name} loading="lazy" />
											<div className="our-team__card-top">
												<p>{profession}</p>
												<p>{name}</p>
												{number && (
													<a href={`tel:${number.replaceAll(" ", "")}`}>
														{number}
													</a>
												)}
												{email && <a href="mailto:josef@gmail.com">{email}</a>}
											</div>
											<div className="our-team__card-bottom">
												<p style={{ marginBottom: 5 }}>
													{t("our_team.working_hours")}
												</p>
												<ul className="our-team__working-hours">
													{workingHours.mon && (
														<li className={"day"}>
															<>
																<span>{t("our_team.mon")}:</span>
																<span>{workingHours.mon}</span>
															</>
														</li>
													)}
													{workingHours.tue && (
														<li className={"day"}>
															<>
																<span>{t("our_team.tue")}:</span>
																<span>{workingHours.tue}</span>
															</>
														</li>
													)}

													{workingHours.wed && (
														<li className={"day"}>
															<>
																<span>{t("our_team.wed")}:</span>
																<span>{workingHours.wed}</span>
															</>
														</li>
													)}
													{workingHours.thu && (
														<li className={"day"}>
															<>
																<span>{t("our_team.thu")}:</span>
																<span>{workingHours.thu}</span>
															</>
														</li>
													)}
													{workingHours.fri && (
														<li className={"day"}>
															<>
																<span>{t("our_team.fri")}:</span>
																<span>{workingHours.fri}</span>
															</>
														</li>
													)}
													{workingHours.sat && (
														<li className={"day"}>
															<>
																<span>{t("our_team.sat")}:</span>
																<span>{workingHours.sat}</span>
															</>
														</li>
													)}
													{workingHours.sun && (
														<li className={"day"}>
															<>
																<span>{t("our_team.sun")}:</span>
																<span>{workingHours.sun}</span>
															</>
														</li>
													)}
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
								({ profession, name, number, email, workingHours }, index) => {
									return (
										<div key={index} className="our-team__card">
											<img src={profileIcon} alt="" />
											<div className="our-team__card-top">
												<p>{profession}</p>
												<p>{name}</p>
												{number && (
													<a href={`tel:${number.replaceAll(" ", "")}`}>
														{number}
													</a>
												)}
												{email && <a href="mailto:josef@gmail.com">{email}</a>}
											</div>
											<div className="our-team__card-bottom">
												<p style={{ marginBottom: 5 }}>
													{t("our_team.working_hours")}
												</p>
												<ul className="our-team__working-hours">
													{workingHours.mon && (
														<li className={"day"}>
															<>
																<span>{t("our_team.mon")}:</span>
																<span>{workingHours.mon}</span>
															</>
														</li>
													)}
													{workingHours.tue && (
														<li className={"day"}>
															<>
																<span>{t("our_team.tue")}:</span>
																<span>{workingHours.tue}</span>
															</>
														</li>
													)}

													{workingHours.wed && (
														<li className={"day"}>
															<>
																<span>{t("our_team.wed")}:</span>
																<span>{workingHours.wed}</span>
															</>
														</li>
													)}
													{workingHours.thu && (
														<li className={"day"}>
															<>
																<span>{t("our_team.thu")}:</span>
																<span>{workingHours.thu}</span>
															</>
														</li>
													)}
													{workingHours.fri && (
														<li className={"day"}>
															<>
																<span>{t("our_team.fri")}:</span>
																<span>{workingHours.fri}</span>
															</>
														</li>
													)}
													{workingHours.sat && (
														<li className={"day"}>
															<>
																<span>{t("our_team.sat")}:</span>
																<span>{workingHours.sat}</span>
															</>
														</li>
													)}
													{workingHours.sun && (
														<li className={"day"}>
															<>
																<span>{t("our_team.sun")}:</span>
																<span>{workingHours.sun}</span>
															</>
														</li>
													)}
												</ul>
											</div>
										</div>
									);
								}
							)}
					</div>
				</div>
			</main>
		</>
	);
};

export default OurTeam;
