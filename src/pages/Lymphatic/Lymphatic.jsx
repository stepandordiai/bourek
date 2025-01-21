import { useEffect } from "react";
import img1 from "./img/BTL-6000.jpg";
import img2 from "./img/BTL-6000-1.jpg";
import "./Lymphatic.scss";

const Lymphatic = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Lymfodrenáž";
    }, []);

    return (
        <section className="lymphatic">
            <h2 className="lymphatic__title">Lymfodrenáž</h2>
            <div className="lymphatic__info">
                <strong>Přístrojová lymfodrenáž</strong>
                <strong>
                    Přístrojová lymfodrenáž pomáhá udržovat a vytvářet vyvážený
                    stav proudění mezi krevním a lymfatickým systémem.
                </strong>
                <p>
                    Přístrojová lymfodrenáž je založena na přerušované kompresi
                    končetiny a vytváření tlakové vlny.Přístroj se stará o
                    stimulaci lymfatických cév pomocí speciálních návleků na
                    končetiny a systémem komor v těchto návlecích postupně se
                    naplňujících se vzduchem.
                </p>
                <p className="lymphatic__img-info">
                    <img src={img1} loading="lazy" alt="Image" />
                    Lymfodrenáž ovlivňuje lymfatický systém, což je soustava
                    uzlin spojených mízními cévami, v nichž koluje
                    míza/lymfa/.Transport mízy je zajištěn pasivně pomocí
                    svalové pumpy a pohybem bránice při dýchání.Vlivem dlouhého
                    stání či sezení, nedostatku pohybu, po úrazech nebo vlivem
                    infekce dochází ke zhoršení funkce celého systému,
                    bolestivosti a vzniku otoku končetin.Vlivem naší
                    lymfodrenáže dochází k uvolnění mízních cév a uzlin, ke
                    zlepšení průtoku mízy v cévách, zlepšení prokrvení.
                </p>
                <p className="lymphatic__img-info">
                    <img src={img2} loading="lazy" alt="Image" />
                    Lymfodrenáž je vhodná při detoxikaci organismu, při potížích
                    s křečovými žílami a při žilních nedostatcích, při prevenci
                    a odstraňování celulitidy, při otocích končetin,při
                    nadváze,při relaxaci a regeneraci organismu, při bolesti
                    svalů a pateře, při pocitu těžkých a unavených nohou, po
                    úrazech nebo preventivně, jak pro ženy , tak pro muže.Pro
                    dosažení co nejvyššího efektu je vhodné provádět lymfodrenáž
                    opakovaně , v počtu 5-10 sezení na jeden cyklus.
                </p>
                <strong>BTL-6000 Lymfastim 12Topline</strong>
                <p>
                    V naší ordinaci je přístrojová lymfodrenáž prováděna
                    přístrojem BTL-6000 Lymfastim 12Topline.
                </p>
                <strong>10 nabízených programů:</strong>
                <ol className="lymphatic__ol-list">
                    <li>celulitida</li>
                    <li>detoxikace</li>
                    <li>lipedem a otoky</li>
                    <li>obezita</li>
                    <li>péče o liposukci</li>
                    <li>prevence křečových žil</li>
                    <li>regenerace</li>
                    <li>syndrom těžkých nohou</li>
                    <li>zlepšení elasticity pokožky</li>
                    <li>úponové bolesti nohou</li>
                </ol>
                <strong>Nejběžnější kosmetické/estetické indikace</strong>
                <p>
                    Regenerace, relaxace a detoxikace organismu. Odstranění
                    přebytečných tekutin např. při redukci hmotnosti. Prevence a
                    redukce celulitidy-alespoň 10 aplikací. Prevence
                    varixů/křečových žil/ Poliposukční péče Zlepšení elasticity
                    kůže Zlepšení syndromu těžkých nohou Vše vhodné pro ženy i
                    pro muže!!!
                </p>
                <strong>Proč lymfodrenáž u nás?</strong>
                <p>
                    Přístroj BTL-6000 Lymfastim 12Topline je nejmodernější
                    přístroj ve své kategorii na trhu, okamžitě viditelné
                    výsledky!!Pacienty příjemně vnímaná terapie, při níž hodinu
                    odpočíváte a lymfatický systém pracuje za Vás.
                </p>
                <p>
                    Tělo není zatěžováno léky!!! Dochází k odvodu mízy a
                    odpadních látek buněčného metabolismu ze tkání
                    prostřednictvím lymfatického systému do krevního řečiště a
                    ven z těla.
                </p>
            </div>
        </section>
    );
};

export default Lymphatic;
