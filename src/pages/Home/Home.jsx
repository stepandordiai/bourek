import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import arrowUpperRightIcon from "./../../assets/icons/arrow-upper-right.png";
import scrollBarIcon from "./../../assets/icons/scroll-bar.png";
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
                        Read more
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
                <div>
                    <span>Starvac</span>
                    <NavLink className="grid-container__link" to="/starvac">
                        Read more
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
                <div>
                    <span>Celulitida</span>
                    <NavLink className="grid-container__link" to="/cellulite">
                        Read more
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
                <div>
                    <span>Lymfodrenáž</span>
                    <NavLink className="grid-container__link" to="/lymphatic">
                        Read more
                        <img src={arrowUpperRightIcon} alt="" />
                    </NavLink>
                </div>
            </div>
        </section>
    );
};

export default Home;
