import "./Home.scss";
import { NavLink } from "react-router-dom";

const Home = () => {
    return (
        <section className="home">
            <div>
                <p className="home__title">
                    For better health
                    <br />
                    and flexibility
                </p>
                <NavLink className="home__btn-link" to="/contact">
                    Make an appointment
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
