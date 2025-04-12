import axios from "axios";
import "./Banner.scss";
import { useState } from "react";
import { useEffect } from "react";

const Banner = () => {
    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);

    function removeBanner() {
        document.querySelector(".banner").remove();
    }

    const getInfo = async () => {
        try {
            const response = await axios(
                "https://stepan-dordiai-backend.onrender.com/api/product"
            );
            setInfo(response.data);
            console.log(response.data);
            setLoading(false);
        } catch (error) {
            console.log(error);
            setLoading(false);
        }
    };

    useEffect(() => {
        getInfo();
    }, []);

    return (
        <div className="banner">
            <div className="banner-header">
                <p className="banner__title">
                    Důležité informace k {loading ? "Loading..." : info[0].date}
                </p>
                <button className="banner__close-btn" onClick={removeBanner}>
                    zavřít <i className="fa-solid fa-xmark"></i>
                </button>
            </div>
            <div className="banner__divider"></div>
            <ul className="banner-list">
                <li className="banner-list__option">
                    {loading ? "Loading..." : info[0].info}
                </li>
                {/* <li className="banner-list__option">
                    {loading ? "Loading..." : info[0].info2}
                </li>
                <li className="banner-list__option">
                    {loading ? "Loading..." : info[0].info3}
                </li>
                <li className="banner-list__option">
                    {loading ? "Loading..." : info[0].info4}
                </li>
                <li className="banner-list__option">
                    {loading ? "Loading..." : info[0].info5}
                </li> */}
            </ul>
        </div>
    );
};

export default Banner;
