import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import arrowUpperRightIcon from "./../../assets/icons/arrow-upper-right.png";
import scrollBarIcon from "./../../assets/icons/scroll-bar.png";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";

// import required modules
import { EffectCards } from "swiper/modules";

import peopleImg from "./../../assets/people.jpg";
import people1Img from "./../../assets/people1.jpg";
import people2Img from "./../../assets/people2.jpg";
import quoteIcon from "./../../assets/icons/quote.png";
import "./Home.scss";

const Home = () => {
    useEffect(() => {
        document.title = "Bourek | Dům";
    }, []);

    return (
        <section className="home">
            <div className="home__container">
                <div className="home__wrapper">
                    <div>
                        <p className="home__title">
                            Pro lepší zdraví
                            <br />a flexibilitu
                        </p>
                        <p>Ordinace rehabilitačního lékaře</p>
                        <p>MUDr. Josef Bourek</p>
                        <NavLink className="home__btn-link" to="/contact">
                            Domluvit si schůzku
                        </NavLink>
                    </div>
                    <div>
                        <img
                            className="home__img"
                            src="https://ld-wp73.template-help.com/wordpress/prod_29195/v1/wp-content/uploads/2020/05/Rectangle-64.png"
                            alt=""
                        />
                    </div>
                </div>
                <a className="home__scroll-down-btn" href="#departments">
                    <img src={scrollBarIcon} alt="" />
                    <span>Click to scroll down</span>
                </a>
            </div>
            <h3 id="departments" className="home__grid-container-title">
                Oddělení
            </h3>
            <div className="home__grid-container">
                <div>
                    <span>Ordinace</span>
                    <NavLink className="grid-container__link" to="/surgery">
                        Zjistit víc
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
                <div>
                    <span>Starvac</span>
                    <NavLink className="grid-container__link" to="/starvac">
                        Zjistit víc
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
                <div>
                    <span>Celulitida</span>
                    <NavLink className="grid-container__link" to="/cellulite">
                        Zjistit víc
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
                <div>
                    <span>Lymfodrenáž</span>
                    <NavLink className="grid-container__link" to="/lymphatic">
                        Zjistit víc
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
            </div>
            <h3 className="home__testimonials-title">Co říkají klienti</h3>
            <Swiper effect={"cards"} grabCursor={true} modules={[EffectCards]}>
                <SwiperSlide>
                    <div className="card">
                        <div className="card__header">
                            <img src={peopleImg} alt="" />
                            <p>Petr Klimša</p>
                        </div>

                        <div className="card__body">
                            <img src={quoteIcon} alt="" />
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
                            <img src={people1Img} alt="" />
                            <p>Tereza Belingerová</p>
                        </div>
                        <div className="card__body">
                            <img src={quoteIcon} alt="" />
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
                            <img src={people2Img} alt="" />
                            <p>Jan Ursíny</p>
                        </div>
                        <div className="card__body">
                            <img src={quoteIcon} alt="" />
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
