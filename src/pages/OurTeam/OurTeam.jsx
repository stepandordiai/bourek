import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./OurTeam.scss";

const OurTeam = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("our_team_title") + " - MUDr. Josef Bourek";
    }, [t]);

    const ourTeamData = [
        {
            profession: t("our_team.profession_type_1"),
            name: "MUDr. Josef Bourek",
            number: "+420 602 273 579",
            email: "josef@bourek.cz",
            workingHours: {
                mon: "7:00 - 17:00",
                tue: "7:00 - 14:30",
                wed: "7:00 - 15:00",
                thu: "7:00 - 14:30",
                fri: "7:00 - 14:00",
                sat: t("our_team.weekend"),
                sun: t("our_team.weekend"),
            },
        },
        {
            profession: t("our_team.profession_type_1"),
            name: "MUDr. Julie Cadorini",
            email: "cadorinij@seznam.cz",
            workingHours: {
                mon: "7:00 - 17:00",
                tue: "7:00 - 14:30",
                wed: "7:00 - 15:00",
                thu: "7:00 - 14:30",
                fri: "7:00 - 14:00",
                sat: t("our_team.weekend"),
                sun: t("our_team.weekend"),
            },
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
                sat: t("our_team.weekend"),
                sun: t("our_team.weekend"),
            },
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
                sat: t("our_team.weekend"),
                sun: t("our_team.weekend"),
            },
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
                sat: t("our_team.weekend"),
                sun: t("our_team.weekend"),
            },
        },
    ];

    const dateNow = new Date();
    const dayNow = dateNow.getDay();

    const inactiveDay = "day";
    const activeDay = "day day--active";

    return (
        <>
            <PageTitle title={t("our_team_title")} />
            <div className="our-team">
                {ourTeamData.map(
                    (
                        { profession, name, number, email, workingHours },
                        index
                    ) => {
                        return (
                            <div key={index} className="our-team__card">
                                <div className="our-team__card-top">
                                    <p>{profession}</p>
                                    <p>{name}</p>
                                    {number && (
                                        <a
                                            href={`tel:${number.replaceAll(
                                                " ",
                                                ""
                                            )}`}
                                        >
                                            {number}
                                        </a>
                                    )}

                                    {email && (
                                        <a href="mailto:josef@gmail.com">
                                            {email}
                                        </a>
                                    )}
                                </div>
                                <div className="our-team__card-bottom">
                                    <p>{t("our_team.working_hours")}</p>
                                    <ul className="our-team__working-hours">
                                        <li
                                            className={
                                                dayNow === 1
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.mon")}:</span>
                                            <span>{workingHours.mon}</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 2
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.tue")}:</span>
                                            <span>{workingHours.tue}</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 3
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.wed")}:</span>
                                            <span>{workingHours.wed}</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 4
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.thu")}:</span>
                                            <span>{workingHours.thu}</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 5
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.fri")}:</span>
                                            <span>{workingHours.fri}</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 6
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.sat")}:</span>
                                            <span>{workingHours.sat}</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 0
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.sun")}:</span>
                                            <span>{workingHours.sun}</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        );
                    }
                )}
            </div>
        </>
    );
};

export default OurTeam;
