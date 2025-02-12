import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import "./Offer.scss";

const Offer = () => {
    useEffect(() => {
        document.title = "Co nabízíme";
    }, []);

    return (
        <>
            <PageTitle title="Co nabízíme" />
            <div className="offer__wrapper">
                <ul className="about-us__offer-list">
                    <li>služby odborného rehabilitačního lékaře</li>
                    {/* <li>služby odborného neurologického lékaře</li> */}
                    <li>služby rehabilitačních pracovnic</li>
                    <li>
                        veškeré kompletní rehabilitační služby:
                        <ul>
                            <li>masážní přístroj starvac sp 2</li>
                            <li>
                                kompletní elektroléčba, laser terapie, solux
                            </li>
                            {/* <li>léčebná tělesná výchova</li> */}
                            {/* <li>speciální LTV na míčích</li> */}
                            {/* <li>reflexní masáže</li> */}
                            <li>poradenství o zdravém životním stylu</li>
                        </ul>
                    </li>
                    <li>speciální zdravotnický maloobchod</li>
                </ul>
            </div>
        </>
    );
};

export default Offer;
