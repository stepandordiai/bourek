import { useEffect } from "react";
import "./Surgery.scss";

const Surgery = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Ordinace";
    }, []);

    return (
        <section className="surgery">
            <h2 className="surgery__title">Ordinace</h2>
            <div className="surgery__info">
                <p>
                    Naše ordinace poskytuje služby rehabilitačního lékaře s
                    atestací I. stupně z ortopedie (1983), atestace z fyziatrie,
                    balneologie a léčebné rehabilitace (1990), kurs mobilisací a
                    manipulací (1985 až 1986 u profesora Lewita) ukončený
                    zkouškou. Nově dr.Bourek absolvoval inovační kurz mobilisací
                    a manipulací taktéž zakončen zkouškou a vydáním
                    certifikátu/2010/
                </p>
                <strong>
                    V naší ordinaci OBJEDNÁVÁME !!!! Prosím , respektujte to ,
                    nejsme jednotka intensivní péče ani ARO , takže akutní stav
                    ohrožující život nebo zdraví se u nás prakticky
                    nevyskytuje!!!!!
                </strong>
                <p>Děkujeme za pochopení.</p>
                <strong>Smluvní pojišťovny:</strong>
                <ul className="surgery__ul-list">
                    <li>111 – Všeobecná zdravotní pojišťovna ČR</li>
                    <li>201 – Vojenská zdravotní pojišťovna</li>
                    <li>211 – Pojišťovna ministerstva vnitra ČR</li>
                    <li>207 – Oborová zdravotní pojišťovna zaměstnanců bank</li>
                    <li>205 – Česká průmyslová zdravotní pojišťovna</li>
                    <li>209 – ŠKOZAM – zaměstnanecká pojišťovna</li>
                </ul>
                <strong>
                    MUDr. Uhlířová ukončila svojí ordinaci v Kolíně.Je k
                    zastižení pouze v Českém Brodě a to v pondělí, ve středu a
                    ve čtvrtek
                </strong>
                <p>
                    Dále Vám jsou k dispozici dvě erudované rehabilitační
                    pracovnice s dosažitelností téměř celý den.
                </p>
                <p>
                    Dále naše ordinace nabízí kompletní elektroléčbu, laser
                    therapii, solux, léčebnou tělesnou výchovu, speciální LTV na
                    míčích,, poradenství o zdravém životním stylu, tj. veškeré
                    komplexní rehabilitační služby.
                </p>
                <p>
                    Kompletní elektroléčbu a lasertherapii poskytujeme na
                    přístrojích české firmy BTL s.r.o. Lasertherapii, starvac
                    ,lymfodrenáž a solux poskytujeme za přímou úhradu.Ceník
                    těchto procedur je k disposici v ordinacích našich
                    fyzioterapeutek.
                </p>
                <p>
                    Veškeré ostatní rehabilitační procedury jsou hrazeny z
                    veřejného zdravotního pojištění.
                </p>
            </div>
        </section>
    );
};

export default Surgery;
