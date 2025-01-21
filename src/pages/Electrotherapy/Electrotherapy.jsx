import { useEffect } from "react";
import "./Electrotherapy.scss";

const Electrotherapy = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Elektroléčba";
    }, []);
    return (
        <section className="electrotherapy">
            <h2 className="electrotherapy__title">Elektroléčba</h2>
            <div className="electrotherapy__info">
                <p>
                    Elektroléčba je část fyzikální léčby, při které je využíván
                    léčebný účinek různých forem elektrické energie.
                    Elektroterapie a elektrodiagnostika prodělaly bouřlivý vývoj
                    a v současné době je tento rozvoj dále urychlován.
                </p>
            </div>
        </section>
    );
};

export default Electrotherapy;
