import { useEffect } from "react";
import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
    useEffect(() => {
        document.title = "Bourek | Dům";
    }, []);

    return (
        <section className="home">
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
        </section>
    );
};

export default Home;
