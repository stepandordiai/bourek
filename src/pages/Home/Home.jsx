import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import arrowUpperRightIcon from "/assets/icons/arrow-upper-right.png";
import { useTranslation } from "react-i18next";
import "./Home.scss";

const Home = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = `MUDr. Josef Bourek | ${t("home.secondary_title")}`;
    }, [t]);

    useEffect(() => {
        document
            .querySelectorAll(".js-faq__item-header")
            .forEach((el, index) => {
                const classBtn = document.querySelectorAll(".faq__btn");
                const classGridLine = document.querySelectorAll(".grid-line");
                el.addEventListener("click", () => {
                    classBtn[index].classList.toggle("faq__btn--active");
                    classGridLine[index].classList.toggle("grid-line--active");
                });
            });
    }, []);

    return (
        <section className="home">
            <div className="home__container">
                <div className="home__wrapper">
                    <div>
                        <h1 className="home__sec-title accent-title">
                            MUDr. Josef Bourek
                        </h1>
                        <h2 className="home__sec-title">
                            MUDr. Julie Cadorini
                        </h2>
                        <h2 className="home__title">{t("home.title")}</h2>
                        <h3 className="home__sec-title">
                            {t("home.secondary_title")}
                        </h3>
                    </div>
                    <div>
                        <img
                            className="home__img"
                            src="https://ld-wp73.template-help.com/wordpress/prod_29195/v1/wp-content/uploads/2020/05/Rectangle-64.png"
                            alt="Home Image"
                        />
                    </div>
                </div>
                <a className="home__scroll-mouse-btn" href="#services">
                    <div className="wheel"></div>
                </a>
            </div>
            <div className="home__services" id="services">
                <h2 className="home__services-title">{t("services_title")}</h2>
                <div className="home__grid-container">
                    <div>
                        <span>{t("service_1")}</span>
                        <NavLink className="grid-container__link" to="/surgery">
                            {t("home.find_out_more")}
                            <img
                                src={arrowUpperRightIcon}
                                alt="Arrow Upper Right"
                            />
                        </NavLink>
                    </div>
                    <div>
                        <span>{t("service_2")}</span>
                        <NavLink className="grid-container__link" to="/starvac">
                            {t("home.find_out_more")}
                            <img
                                src={arrowUpperRightIcon}
                                alt="Arrow Upper Right"
                            />
                        </NavLink>
                    </div>
                    <div>
                        <span>{t("service_3")}</span>
                        <NavLink
                            className="grid-container__link"
                            to="/cellulite"
                        >
                            {t("home.find_out_more")}
                            <img
                                src={arrowUpperRightIcon}
                                alt="Arrow Upper Right"
                            />
                        </NavLink>
                    </div>
                    <div>
                        <span>{t("service_4")}</span>
                        <NavLink
                            className="grid-container__link"
                            to="/lymphatic"
                        >
                            {t("home.find_out_more")}
                            <img
                                src={arrowUpperRightIcon}
                                alt="Arrow Upper Right"
                            />
                        </NavLink>
                    </div>
                    <div>
                        <span>{t("service_5")}</span>
                        <NavLink className="grid-container__link" to="/laser">
                            {t("home.find_out_more")}
                            <img
                                src={arrowUpperRightIcon}
                                alt="Arrow Upper Right"
                            />
                        </NavLink>
                    </div>
                    <div>
                        <span>{t("service_6")}</span>
                        <NavLink
                            className="grid-container__link"
                            to="/electrotherapy"
                        >
                            {t("home.find_out_more")}
                            <img
                                src={arrowUpperRightIcon}
                                alt="Arrow Upper Right"
                            />
                        </NavLink>
                    </div>
                    <div>
                        <span>{t("service_7")}</span>
                        <NavLink className="grid-container__link" to="/ltv">
                            {t("home.find_out_more")}
                            <img
                                src={arrowUpperRightIcon}
                                alt="Arrow Upper Right"
                            />
                        </NavLink>
                    </div>
                </div>
            </div>
            <h2 className="home__testimonials-title" id="testimonials">
                {t("testimonials_title")}
            </h2>
            <div
                className="elfsight-app-920cb37f-0313-49ff-89e7-0fff3ce90a52"
                data-elfsight-app-lazy
            ></div>
            <h2 className="home__faq-title" id="faq">
                {t("faq_title")}
            </h2>
            <div className="home__faq">
                <div className="faq__item">
                    <div className="faq__item-header js-faq__item-header">
                        <p>{t("home.faq_1")}</p>
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
                        <p>{t("home.faq_2")}</p>
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
                        <p>{t("home.faq_3")}</p>
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
                        <p>{t("home.faq_4")}</p>
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
                        <p>{t("home.faq_5")}</p>
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
