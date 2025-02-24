import "./Banner.scss";

const Banner = () => {
    function removeBanner() {
        document.querySelector(".banner").remove();
        document.querySelector(".burger-menu").style.top = "80px";
        document.querySelector("#root").style.paddingTop = "80px";
    }

    return (
        <div className="banner">
            <p className="banner__txt">Důležité informace budou oznámeny zde</p>
            <button className="banner__btn" onClick={removeBanner}>
                <i className="fa-solid fa-xmark"></i>
            </button>
        </div>
    );
};

export default Banner;
