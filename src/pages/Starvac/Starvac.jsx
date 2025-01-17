import { useEffect } from "react";
import img1 from "./img/starvac.jpg";
import "./Starvac.scss";

const Starvac = () => {
    useEffect(() => {
        document.title = "Bourek | Starvac";
    }, []);

    return (
        <section className="starvac">
            <h3 className="starvac__title">Starvac</h3>
            <div className="starvac__info">
                <strong>
                    Nový pomocník při baňkování – masážní přístroj STARVAC SP2
                </strong>
                <p className="img-text__container">
                    <img src={img1} loading="lazy" alt="Starvac" />
                    Původní starověká metoda sloužící k čištění krve –
                    přikládání baněk se v dnešní doběstává novým hitem v léčebné
                    fyzioterapii, dále při léčbě celulitidy, podpory
                    lymfatického systemu a následné detoxikaci celého těla,
                    zlepšení krevního oběhu, redukci hmotnosti, tvarování
                    postavy a zpevňování pokožky.
                    <br />
                    <br />
                    STARVAC SP2 je velmi moderní přístroj s LCD obrazovkou,
                    dvaceti pěti přednastavitelnými programy: devět v kráse a
                    péči o tělo a šestnáct terapeutických aplikací a možností
                    nastavení vlastních programů (délka ošetření, frekvence,
                    cyklus) nastavit podtlak se dá až do 900 milibarů v
                    kontinuálním nebo plzním vakuovém módu. Účinek ošetření
                    zvyšuje speciální masážní krém s aktivními složkami, který
                    je k němu dodáván.
                </p>
                <strong>Využití přístroje:</strong>
                <strong>estetická indikace</strong>
                <ul className="starvac__ul-list">
                    <li>
                        léčba celulitidy (zeštíhlení problematických partií a
                        formování postavy, odbourávání podkožního tuku)
                    </li>
                    <li>
                        lymfatická drenáž (zlepšení lymfatického toku, účinné
                        pročišťování těla, podpoření funkčnosti krevního oběhu)
                    </li>
                    <li>relaxační masáž</li>
                    <li>zpevnění a zvětšení objemu prsou</li>
                    <li>
                        lymfatická drenáž obličeje (omlazování a zpevňování
                        pleti obličeje,vyhlazování vrásek,odstraňování váčků pod
                        očima, ochablých očních víček, dvojité brady)
                    </li>
                    <li>podpora při léčbě akne</li>
                    <li>zbavení pocitu těžkých , unavených nohou</li>
                </ul>
                <strong>sport, rehabilitace, fitness</strong>
                <ul className="starvac__ul-list">
                    <li>svalová ztuhlost</li>
                    <li>zánět šlach</li>
                    <li>léčba rukou a prstů</li>
                    <li>dolní končetina – léčba kyčlí, kolen, nohou</li>
                    <li>Traumatologie (vymknutí kotníku, hematom, jizvy)</li>
                </ul>
                <strong>terapeutické užití</strong>
                <ul className="starvac__ul-list">
                    <li>
                        Revmatologie (léčba pateře-bolest krčních obratlů, zad,
                        houser, lokte, zápěstí, zánět sedacího nervu)
                    </li>
                    <li>
                        horní končetina-léčba ramene, lokte,zápěstí, léčba rukou
                        a prstů
                    </li>
                    <li>dolní končetina-léčba kyčlí,kolen,nohou</li>
                    <li>Traumatologie (vymknutí kotníku,hematom, jizvy)</li>
                </ul>
                <strong>Mezi další přednosti STARVACu patří:</strong>
                <ul className="starvac__ul-list">
                    <li>originální a průkopnický design</li>
                    <li>široká, dotyková LCD obrazovka</li>
                    <li>přednastavené programy</li>
                    <li>snadná nastavitelnost vlastních programů</li>
                    <li>13 masážních nástavců</li>
                    <li>patentovaný systém</li>
                    <li>nízká energetická náročnost</li>
                    <li>nebolestivost prováděného výkonu</li>
                    <li>inovovaná sací hlava</li>
                </ul>
                <strong>příslušenství přístroje:</strong>
                <p>
                    2 speciální sací hlavy: kůže je nasávána pod tlakem mezi dva
                    pohyblivé válečky. Volné uložení válečků umožňuje lepší
                    přizpůsobení individuální tloušťce podkožního vaziva.
                    Patentovaný „roler“ pohyb válečků zvyšuje efektivitu masáže.
                    Vhodné pro revmatologická a traumatologická ošetření,
                    relaxační, uvolňovací masáže, lymfatickou drenáž, léčbu
                    celulitidy.
                </p>
                <p>
                    4 patentované double sací baňky: slouží k podtlakové pulzní
                    masáži v automatickém módu vhodné pro revmatologická a
                    traumatologická ošetření, terapeutické indikace, formování
                    postavy a léčbě starších typů celulitidy.
                </p>
                <p>
                    4 základní sací baňky – pro manuelní (s otvorem) nebo
                    automatický mód (bez otvoru), slouží k uvolnění v ošetřované
                    oblasti bodově nebo tahem.Vhodné pro revmatologická a
                    traumatologická ošetření, všechny druhy masáží.
                </p>
                <p>
                    3 malé sací baňky – pro automatický mód. Vhodné pro
                    revmatologická a traumatologická ošetření, reflexní masáže,
                    k ošetření obličeje, krku, vyhlazování vrásek a jizev.
                </p>
                <p>
                    1 pár prsních baněk – volitelné příslušenství pro zpevňování
                    a zvětšování poprsí. Nastavení podtlaku pro tuto speciální
                    masáž je regulován programem s ohledem na tento velmi
                    citlivý orgán.
                </p>
            </div>
        </section>
    );
};

export default Starvac;
