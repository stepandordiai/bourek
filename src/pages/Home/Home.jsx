import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import arrowUpperRightIcon from "./../../assets/icons/arrow-upper-right.png";
import scrollBarIcon from "./../../assets/icons/scroll-bar.png";

import "./Home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Ordinace rehabilitačního lékaře";
    }, []);

    useEffect(() => {
        document
            .querySelectorAll(".js-faq__item-header")
            .forEach((btn, index) => {
                btn.addEventListener("click", () => {
                    const classBtn = document.querySelectorAll(".faq__btn");
                    classBtn[index].classList.toggle("faq__btn--active");
                    const classGridLine =
                        document.querySelectorAll(".grid-line");
                    classGridLine[index].classList.toggle("grid-line--active");
                });
            });
    });

    return (
        <section className="home">
            <div className="home__container">
                <div className="home__wrapper">
                    <div>
                        <h1 className="home__title">
                            Pro lepší zdraví
                            <br />a flexibilitu
                        </h1>
                        <h2>Ordinace rehabilitačního lékaře</h2>
                        <h2>MUDr. Josef Bourek</h2>
                        <NavLink className="home__btn-link" to="/appointment">
                            Rezervovat termín
                        </NavLink>
                    </div>
                    <div>
                        <img
                            className="home__img"
                            src="https://ld-wp73.template-help.com/wordpress/prod_29195/v1/wp-content/uploads/2020/05/Rectangle-64.png"
                            alt="Home Image"
                        />
                    </div>
                </div>
                <a className="home__scroll-down-btn" href="#departments">
                    <img src={scrollBarIcon} alt="Scroll Bar" />
                    <span>Kliknutím přejděte dolů</span>
                </a>
            </div>
            <h2 id="departments" className="home__grid-container-title">
                Služby
            </h2>
            <div className="home__grid-container">
                <div>
                    <span>Ordinace</span>
                    <NavLink className="grid-container__link" to="/surgery">
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
                <div>
                    <span>Starvac</span>
                    <NavLink className="grid-container__link" to="/starvac">
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
                <div>
                    <span>Celulitida</span>
                    <NavLink className="grid-container__link" to="/cellulite">
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
                <div>
                    <span>Lymfodrenáž</span>
                    <NavLink className="grid-container__link" to="/lymphatic">
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
                <div>
                    <span>Laser</span>
                    <NavLink className="grid-container__link" to="/laser">
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
                <div>
                    <span>Elektroléčba</span>
                    <NavLink
                        className="grid-container__link"
                        to="/electrotherapy"
                    >
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
                <div>
                    <span>Individuální fyzioterapie</span>
                    <NavLink className="grid-container__link" to="/ltv">
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
            </div>
            <h3 className="home__testimonials-title">
                Co říkají naši zákazníci
            </h3>
            <div
                className="elfsight-app-920cb37f-0313-49ff-89e7-0fff3ce90a52"
                data-elfsight-app-lazy
            ></div>
            <h3 className="home__testimonials-title">Často kladené dotazy</h3>
            <div className="home__faq">
                <div className="faq__item">
                    <div className="faq__item-header js-faq__item-header">
                        <p>Vaše otázka zde může být brzy</p>
                        <div className="faq__btn"></div>
                    </div>
                    <div className="grid-line">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, quos totam. Nihil harum inventore enim
                            reiciendis, quam voluptas explicabo laborum dolorem
                            vitae veritatis asperiores repudiandae ipsam eveniet
                            dolor ipsum. Voluptates.
                        </p>
                    </div>
                </div>
                <div className="faq__item">
                    <div className="faq__item-header js-faq__item-header">
                        <p>Vaše otázka zde může být brzy</p>
                        <div className="faq__btn"></div>
                    </div>
                    <div className="grid-line">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, quos totam. Nihil harum inventore enim
                            reiciendis, quam voluptas explicabo laborum dolorem
                            vitae veritatis asperiores repudiandae ipsam eveniet
                            dolor ipsum. Voluptates.
                        </p>
                    </div>
                </div>
                <div className="faq__item">
                    <div className="faq__item-header js-faq__item-header">
                        <p>Vaše otázka zde může být brzy</p>
                        <div className="faq__btn"></div>
                    </div>
                    <div className="grid-line">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, quos totam. Nihil harum inventore enim
                            reiciendis, quam voluptas explicabo laborum dolorem
                            vitae veritatis asperiores repudiandae ipsam eveniet
                            dolor ipsum. Voluptates.
                        </p>
                    </div>
                </div>
                <div className="faq__item">
                    <div className="faq__item-header js-faq__item-header">
                        <p>Vaše otázka zde může být brzy</p>
                        <div className="faq__btn"></div>
                    </div>
                    <div className="grid-line">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, quos totam. Nihil harum inventore enim
                            reiciendis, quam voluptas explicabo laborum dolorem
                            vitae veritatis asperiores repudiandae ipsam eveniet
                            dolor ipsum. Voluptates.
                        </p>
                    </div>
                </div>
                <div className="faq__item">
                    <div className="faq__item-header js-faq__item-header">
                        <p>Vaše otázka zde může být brzy</p>
                        <div className="faq__btn"></div>
                    </div>
                    <div className="grid-line">
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Odio, quos totam. Nihil harum inventore enim
                            reiciendis, quam voluptas explicabo laborum dolorem
                            vitae veritatis asperiores repudiandae ipsam eveniet
                            dolor ipsum. Voluptates.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;
