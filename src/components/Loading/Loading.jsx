import { useEffect } from "react";
import logoIcon from "./../../assets/logo/medical-symbol.png";
import "./Loading.scss";

const Loading = () => {
    useEffect(() => {
        setTimeout(() => {
            document.querySelector(".wrapper").classList.remove("none");
        }, 2700);
    }, []);

    return (
        <div className="loading">
            <img src={logoIcon} alt="Logo icon" />
            <div>
                <p>Pepa Bourek</p>
            </div>
        </div>
    );
};

export default Loading;
