import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import "./OurTeam.scss";

const OurTeam = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("our_team_title");
    }, [t]);

    const ourTeamData = [
        {
            profession: t("our_team.profession_1"),
            name: "MUDr. Josef Bourek",
            number: "+420 602 273 579",
            email: "pepabourek@gmail.com",
        },
        {
            profession: t("our_team.profession_2"),
            name: "MUDr. Julia Cadorini",
            number: "+420 607 841 622",
            email: "cadorinij@seznam.cz",
        },
        {
            profession: t("our_team.profession_3"),
            name: "MUDr. Josef Bourek",
            number: "+420 602 273 579",
            email: "pepabourek@gmail.com",
        },
        {
            profession: t("our_team.profession_4"),
            name: "MUDr. Josef Bourek",
            number: "+420 602 273 579",
            email: "pepabourek@gmail.com",
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
                    ({ profession, name, number, email }, index) => {
                        return (
                            <div key={index} className="our-team__card">
                                <div className="our-team__card-top">
                                    <p>{profession}</p>
                                    <p>{name}</p>
                                    <a href="tel:+420602273579">{number}</a>
                                    <a href="mailto:pepabourek@gmail.com">
                                        {email}
                                    </a>
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
                                            <span>7:00 - 17:00</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 2
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.tue")}:</span>
                                            <span>7:00 - 14:30</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 3
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.wed")}:</span>
                                            <span>7:00 - 15:00</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 4
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.thu")}:</span>
                                            <span>7:00 - 14:30</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 5
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.fri")}:</span>
                                            <span>7:00 - 14:00</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 6
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.sat")}:</span>
                                            <span>{t("our_team.weekend")}</span>
                                        </li>
                                        <li
                                            className={
                                                dayNow === 0
                                                    ? activeDay
                                                    : inactiveDay
                                            }
                                        >
                                            <span>{t("our_team.sun")}:</span>
                                            <span>{t("our_team.weekend")}</span>
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
