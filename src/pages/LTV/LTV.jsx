import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import PageInfo from "../../components/PageInfo/PageInfo";
import "./LTV.scss";

const LTV = () => {
    useEffect(() => {
        document.title = "Individuální fyzioterapie";
    }, []);

    return (
        <>
            <PageTitle title="Individuální fyzioterapie" />
            <PageInfo>
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
            </PageInfo>
        </>
    );
};

export default LTV;
