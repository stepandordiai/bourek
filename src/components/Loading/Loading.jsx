import { useEffect } from "react";
import logoIcon from "./../../assets/logo/medical-symbol.png";
import "./Loading.scss";

const Loading = () => {
    useEffect(() => {
        setTimeout(() => {
            // document
            // .querySelector(".loading")
            // .addEventListener("animationend", () => {
            document.querySelector(".loading").style.display = "none";
            // });
        }, 2200);
    }, []);
    return (
        <div className="loading" style={{ display: "flex" }}>
            <img src={logoIcon} alt="Logo icon" />
            <div>
                <p>Pepa Bourek</p>
            </div>
        </div>
    );
};

export default Loading;
