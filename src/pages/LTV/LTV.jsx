import { useEffect } from "react";
import "./LTV.scss";

const LTV = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | LTV";
    }, []);
    return (
        <section className="ltv">
            <h2 className="ltv__title">Individuální fyzioterapie</h2>
            <div className="ltv__info">
                <p>
                    Individuální cvičení je vedené zkušeným fyzioterapeutem,
                    jenž má bohaté zkušenosti v oblasti rehabilitace a péče o
                    tělo.
                </p>
            </div>
        </section>
    );
};

export default LTV;
