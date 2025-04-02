import "./Banner.scss";

const Banner = () => {
    function removeBanner() {
        document.querySelector(".banner").remove();
    }

    return (
        <div className="banner">
            <div className="banner-header">
                <p className="banner__title">Důležité informace k 02.04.2025</p>
                <button className="banner__close-btn" onClick={removeBanner}>
                    zavřít <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="banner__divider"></div>
            <ul className="banner-list">
                <li className="banner-list__option">Informace 1</li>
                <li className="banner-list__option">Informace 2</li>
                <li className="banner-list__option">Informace 3</li>
                <li className="banner-list__option">Informace 4</li>
                <li className="banner-list__option">Informace 5</li>
            </ul>
        </div>
    );
};

export default Banner;
