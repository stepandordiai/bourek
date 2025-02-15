import "./BurgerBtn.scss";

const BurgerBtn = () => {
    function toggleBurger13() {
        document
            .querySelector(".burger-13")
            .classList.toggle("burger-13--active");
        document
            .querySelector(".burger-13__center-line")
            .classList.toggle("burger-13__center-line--active");
        document
            .querySelector(".burger-menu")
            .classList.toggle("burger-menu--active");

        document
            .querySelectorAll(".burger-menu__dd-wrapper")
            .forEach((wrapper) => {
                wrapper.classList.remove("burger-menu__dd-wrapper--active");
            });
        document
            .querySelectorAll(".burger-menu__dd-btn-icon")
            .forEach((btn) => {
                btn.classList.remove("burger-menu__dd-btn-icon--active");
            });
    }

    return (
        <div onClick={toggleBurger13} className="burger__container">
            <p>menu</p>
            <div className="burger-13">
                <span className="burger-13__center-line"></span>
            </div>
        </div>
    );
};

export default BurgerBtn;
