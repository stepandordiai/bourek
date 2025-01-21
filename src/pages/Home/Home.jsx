import { useEffect } from "react";
import { NavLink } from "react-router-dom";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { EffectCards } from "swiper/modules";

import arrowUpperRightIcon from "./../../assets/icons/arrow-upper-right.png";
import scrollBarIcon from "./../../assets/icons/scroll-bar.png";
import peopleImg from "./../../assets/people.jpg";
import people1Img from "./../../assets/people1.jpg";
import people2Img from "./../../assets/people2.jpg";
import quoteIcon from "./../../assets/icons/quote.png";
import "./Home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Dům";
    }, []);

    useEffect(() => {
        if (document.querySelector(".loading").style.display === "flex") {
            setTimeout(() => {
                document.querySelector(".home__container").style.display =
                    "initial";
                // 100ms less time
            }, 2100);
        } else {
            document.querySelector(".home__container").style.display =
                "initial";
        }
    }, []);

    return (
        <section className="home">
            <div className="home__container" style={{ display: "none" }}>
                <div className="home__wrapper">
                    <div>
                        <h1 className="home__title">
                            Pro lepší zdraví
                            <br />a flexibilitu
                        </h1>
                        <h2>Ordinace rehabilitačního lékaře</h2>
                        <h2>MUDr. Josef Bourek</h2>
                        <NavLink className="home__btn-link" to="/appointment">
                            Domluvit si schůzku
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
                    <span>Click to scroll down</span>
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
                    <span>Léčebná tělesná výchova</span>
                    <NavLink className="grid-container__link" to="/ltv">
                        Zjistit víc
                        <img
                            src={arrowUpperRightIcon}
                            alt="Arrow Upper Right"
                        />
                    </NavLink>
                </div>
            </div>
            <h2 className="home__testimonials-title">Co říkají klienti</h2>
            <Swiper
                className="testimonials-swiper"
                effect={"cards"}
                grabCursor={true}
                modules={[EffectCards]}
            >
                <SwiperSlide>
                    <div className="card">
                        <div className="card__header">
                            <img src={peopleImg} alt="People" loading="lazy" />
                            <p>Petr Klimša</p>
                        </div>
                        <div className="card__body">
                            <img src={quoteIcon} alt="Quote" loading="lazy" />
                            <p>
                                Než jsem začal navštěvovat tyto fyzikální
                                terapie a léčebná sezení, moje migrény mě každý
                                den přiváděly k šílenství
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__header">
                            <img src={people1Img} alt="People" loading="lazy" />
                            <p>Tereza Belingerová</p>
                        </div>
                        <div className="card__body">
                            <img src={quoteIcon} alt="Quote" loading="lazy" />
                            <p>
                                Celý svůj dospělý život jsem se potýkal s
                                různými typy a intenzitou bolestí zad. Díky bohu
                                mě sem odkázal jeden z mých přátel
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__header">
                            <img src={people2Img} alt="People" loading="lazy" />
                            <p>Jan Ursíny</p>
                        </div>
                        <div className="card__body">
                            <img src={quoteIcon} alt="Quote" loading="lazy" />
                            <p>
                                prostě si nemůžete užívat život naplno, když
                                neustále bojujete s bolestí svalů. To byl důvod,
                                proč jsem nakonec začal
                            </p>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Home;
