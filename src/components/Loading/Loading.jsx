import { useEffect } from "react";
import logoIcon from "./../../assets/logo/medical-symbol.png";
import "./Loading.scss";

const Loading = () => {
    // useEffect(() => {
    //     setTimeout(() => {
    //         document.querySelector(".loading").style.display = "none";
    //     }, 2200);
    // }, []);

    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".loading-logo").style.display = "none";
        }, 2000);
    }, []);
    return (
        <div id="loading" className="loading-logo" style={{ display: "flex" }}>
            <img src={logoIcon} alt="Logo icon" />
            <div className="text-line">
                <p>Pepa Bourek</p>
            </div>
        </div>
    );
};

export default Loading;
