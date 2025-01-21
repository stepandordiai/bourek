import { useEffect } from "react";
import "./Laser.scss";

const Laser = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Laser";
    }, []);
    return (
        <section className="laser">
            <h2 className="laser__title">Laser</h2>
            <div className="laser__info">
                <p>
                    Laser je světlo zesilované pomocí stimulované emise záření.
                    Podstatu tohoto záření objasnily zákony kvantové fyziky.
                    První podnět k hlubšímu studiu kvantové teorie dal Albert
                    Einstein. V případě laseru se jedná o koherentní
                    monochromatické záření v oblasti mikrovln, popřípadě
                    viditelného záření.
                </p>
            </div>
        </section>
    );
};

export default Laser;
