import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./OurTeam.scss";

const OurTeam = () => {
    useEffect(() => {
        document.title = "Náš tým";
    }, []);

    return (
        <>
            <PageTitle title="Náš tým" />
            <div className="about-us__grid-container">
                <div className="team-member">
                    <p>Rehabilitačního lékaře</p>
                    <p>MUDr. Josef Bourek</p>
                    <a href="tel:+420602273579">+420 602 273 579</a>
                    <a href="mailto:pepabourek@gmail.com">
                        pepabourek@gmail.com
                    </a>
                    <p>Pracovní doba</p>
                    <table className="footer__nav-table">
                        <tbody>
                            <tr>
                                <td>Pondělí:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Uterý:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Středa:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Ctvrtek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Pátek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Sobota:</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Neděle:</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="team-member">
                    <p>Rehabilitačního lékaře</p>
                    <p>MUDr. Julia Cadorini</p>
                    <a href="tel:+420602273579">+420 602 273 579</a>
                    <a href="mailto:pepabourek@gmail.com">
                        pepabourek@gmail.com
                    </a>
                    <p>Pracovní doba</p>
                    <table className="footer__nav-table">
                        <tbody>
                            <tr>
                                <td>Pondělí:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Uterý:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Středa:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Ctvrtek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Pátek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Sobota:</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Neděle:</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="team-member">
                    <p>Rehabilitačního lékaře</p>
                    <p>Dr. Sarah Johnson</p>
                    <a href="tel:+420602273579">+420 602 273 579</a>
                    <a href="mailto:pepabourek@gmail.com">
                        pepabourek@gmail.com
                    </a>
                    <p>Pracovní doba</p>
                    <table className="footer__nav-table">
                        <tbody>
                            <tr>
                                <td>Pondělí:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Uterý:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Středa:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Ctvrtek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Pátek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Sobota:</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Neděle:</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="team-member">
                    <p>Rehabilitačního lékaře</p>
                    <p>Dr. Sarah Johnson</p>
                    <a href="tel:+420602273579">+420 602 273 579</a>
                    <a href="mailto:pepabourek@gmail.com">
                        pepabourek@gmail.com
                    </a>
                    <p>Pracovní doba</p>
                    <table className="footer__nav-table">
                        <tbody>
                            <tr>
                                <td>Pondělí:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Uterý:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Středa:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Ctvrtek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Pátek:</td>
                                <td>__:__ - __:__</td>
                            </tr>
                            <tr>
                                <td>Sobota:</td>
                                <td>Closed</td>
                            </tr>
                            <tr>
                                <td>Neděle:</td>
                                <td>Closed</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default OurTeam;
