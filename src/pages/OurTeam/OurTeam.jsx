import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./OurTeam.scss";

const OurTeam = () => {
    useEffect(() => {
        document.title = "Náš tým";
    }, []);

    const dateNow = new Date();
    const dayNow = dateNow.getDay();

    const inactiveDay = "day";
    const activeDay = "day day--active";

    return (
        <>
            <PageTitle title="Náš tým" />
            <div className="our-team">
                <div className="our-team__card">
                    <div className="our-team__card-top">
                        <p>Rehabilitačního lékaře</p>
                        <p>MUDr. Josef Bourek</p>
                        <a href="tel:+420602273579">+420 602 273 579</a>
                        <a href="mailto:pepabourek@gmail.com">
                            pepabourek@gmail.com
                        </a>
                    </div>
                    <div className="our-team__card-bottom">
                        <p>Pracovní doba</p>
                        <ul className="our-team__working-hours">
                            <li
                                className={
                                    dayNow === 1 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pondělí:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 2 ? activeDay : inactiveDay
                                }
                            >
                                <span>Uterý:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 3 ? activeDay : inactiveDay
                                }
                            >
                                <span>Středa:</span>
                                <span>7:00 - 15:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 4 ? activeDay : inactiveDay
                                }
                            >
                                <span>Ctvrtek:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 5 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pátek:</span>
                                <span>7:00 - 14:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 6 ? activeDay : inactiveDay
                                }
                            >
                                <span>Sobota:</span>
                                <span>Víkend</span>
                            </li>
                            <li
                                className={
                                    dayNow === 0 ? activeDay : inactiveDay
                                }
                            >
                                <span>Neděle:</span>
                                <span>Víkend</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="our-team__card">
                    <div className="our-team__card-top">
                        <p>Rehabilitačního lékaře</p>
                        <p>MUDr. Julia Cadorini</p>
                        <a href="tel:+420602273579">+420 602 273 579</a>
                        <a href="mailto:pepabourek@gmail.com">
                            cadorinij@seznam.cz
                        </a>
                    </div>
                    <div className="our-team__card-bottom">
                        <p>Pracovní doba</p>
                        <ul className="our-team__working-hours">
                            <li
                                className={
                                    dayNow === 1 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pondělí:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 2 ? activeDay : inactiveDay
                                }
                            >
                                <span>Uterý:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 3 ? activeDay : inactiveDay
                                }
                            >
                                <span>Středa:</span>
                                <span>7:00 - 15:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 4 ? activeDay : inactiveDay
                                }
                            >
                                <span>Ctvrtek:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 5 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pátek:</span>
                                <span>7:00 - 14:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 6 ? activeDay : inactiveDay
                                }
                            >
                                <span>Sobota:</span>
                                <span>Víkend</span>
                            </li>
                            <li
                                className={
                                    dayNow === 0 ? activeDay : inactiveDay
                                }
                            >
                                <span>Neděle:</span>
                                <span>Víkend</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="our-team__card">
                    <div className="our-team__card-top">
                        <p>Rehabilitačního lékaře</p>
                        <p>Dr. Sarah Johnson</p>
                        <a href="tel:+420602273579">+420 602 273 579</a>
                        <a href="mailto:pepabourek@gmail.com">
                            pepabourek@gmail.com
                        </a>
                    </div>
                    <div className="our-team__card-bottom">
                        <p>Pracovní doba</p>
                        <ul className="our-team__working-hours">
                            <li
                                className={
                                    dayNow === 1 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pondělí:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 2 ? activeDay : inactiveDay
                                }
                            >
                                <span>Uterý:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 3 ? activeDay : inactiveDay
                                }
                            >
                                <span>Středa:</span>
                                <span>7:00 - 15:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 4 ? activeDay : inactiveDay
                                }
                            >
                                <span>Ctvrtek:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 5 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pátek:</span>
                                <span>7:00 - 14:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 6 ? activeDay : inactiveDay
                                }
                            >
                                <span>Sobota:</span>
                                <span>Víkend</span>
                            </li>
                            <li
                                className={
                                    dayNow === 0 ? activeDay : inactiveDay
                                }
                            >
                                <span>Neděle:</span>
                                <span>Víkend</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="our-team__card">
                    <div className="our-team__card-top">
                        <p>Rehabilitačního lékaře</p>
                        <p>Dr. Sarah Johnson</p>
                        <a href="tel:+420602273579">+420 602 273 579</a>
                        <a href="mailto:pepabourek@gmail.com">
                            pepabourek@gmail.com
                        </a>
                    </div>
                    <div className="our-team__card-bottom">
                        <p>Pracovní doba</p>
                        <ul className="our-team__working-hours">
                            <li
                                className={
                                    dayNow === 1 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pondělí:</span>
                                <span>7:00 - 17:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 2 ? activeDay : inactiveDay
                                }
                            >
                                <span>Uterý:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 3 ? activeDay : inactiveDay
                                }
                            >
                                <span>Středa:</span>
                                <span>7:00 - 15:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 4 ? activeDay : inactiveDay
                                }
                            >
                                <span>Ctvrtek:</span>
                                <span>7:00 - 14:30</span>
                            </li>
                            <li
                                className={
                                    dayNow === 5 ? activeDay : inactiveDay
                                }
                            >
                                <span>Pátek:</span>
                                <span>7:00 - 14:00</span>
                            </li>
                            <li
                                className={
                                    dayNow === 6 ? activeDay : inactiveDay
                                }
                            >
                                <span>Sobota:</span>
                                <span>Víkend</span>
                            </li>
                            <li
                                className={
                                    dayNow === 0 ? activeDay : inactiveDay
                                }
                            >
                                <span>Neděle:</span>
                                <span>Víkend</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurTeam;
