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
                <strong>
                    Prosíme o včasné zrušení termínu na fyzioterapii tj24h před
                    ,nejdéle v brzkých ranních hodinách téhož dne po SMS Pakliže
                    nebude váš termín včas zrušen terapie vám propadá, v případě
                    2 absenci bez omluvy bude zrušena veškerá léčba
                </strong>
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
