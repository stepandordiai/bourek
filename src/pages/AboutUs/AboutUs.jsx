import CustomHr from "../../components/CustomHr/CustomHr";
import { useEffect } from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";
import img16 from "./img/16.jpg";
import img18 from "./img/18.jpg";
import img19 from "./img/19.jpg";
import img20 from "./img/20.jpg";
import img21 from "./img/21.jpg";
import img22 from "./img/22.jpg";
import "./AboutUs.scss";

const AboutUs = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | O nás";
    }, []);

    return (
        <section className="about-us">
            <h2 className="about-us__title">O nás</h2>
            <h3 className="about-us__mini-title">Co nabízíme</h3>
            <ul className="about-us__offer-list">
                <li>služby odborného rehabilitačního lékaře</li>
                {/* <li>služby odborného neurologického lékaře</li> */}
                <li>služby rehabilitačních pracovnic</li>
                <li>
                    veškeré kompletní rehabilitační služby:
                    <ul>
                        <li>masážní přístroj starvac sp 2</li>
                        <li>kompletní elektroléčba, laser terapie, solux</li>
                        {/* <li>léčebná tělesná výchova</li> */}
                        {/* <li>speciální LTV na míčích</li> */}
                        {/* <li>reflexní masáže</li> */}
                        <li>poradenství o zdravém životním stylu</li>
                    </ul>
                </li>
                <li>speciální zdravotnický maloobchod</li>
            </ul>
            <CustomHr />
            <h3 className="about-us__mini-title">Náš tým</h3>
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
            <CustomHr />
            <h3 className="about-us__mini-title">Galerie</h3>
            <div className="about-us__gallery">
                <img src={img1} loading="lazy" alt="Image" />
                <img src={img2} loading="lazy" alt="Image" />
                <img src={img3} loading="lazy" alt="Image" />
                <img src={img4} loading="lazy" alt="Image" />
                <img src={img5} loading="lazy" alt="Image" />
                <img src={img6} loading="lazy" alt="Image" />
                <img src={img7} loading="lazy" alt="Image" />
                <img src={img8} loading="lazy" alt="Image" />
                <img src={img9} loading="lazy" alt="Image" />
                <img src={img10} loading="lazy" alt="Image" />
                <img src={img11} loading="lazy" alt="Image" />
                <img src={img12} loading="lazy" alt="Image" />
                <img src={img13} loading="lazy" alt="Image" />
                <img src={img14} loading="lazy" alt="Image" />
                <img src={img15} loading="lazy" alt="Image" />
                <img src={img16} loading="lazy" alt="Image" />
                <img src={img18} loading="lazy" alt="Image" />
                <img src={img19} loading="lazy" alt="Image" />
                <img src={img20} loading="lazy" alt="Image" />
                <img src={img21} loading="lazy" alt="Image" />
                <img src={img22} loading="lazy" alt="Image" />
            </div>
        </section>
    );
};

export default AboutUs;
