import CustomHr from "../../components/CustomHr/CustomHr";
import { useEffect } from "react";
import img1 from "./img/1.jpg";
import img2 from "./img/2.jpg";
import img3 from "./img/3.jpg";
import img4 from "./img/4.jpg";
import img5 from "./img/5.jpg";
import img6 from "./img/6.jpg";
import img7 from "./img/7.jpg";
import img8 from "./img/8.jpg";
import img9 from "./img/9.jpg";
import img10 from "./img/10.jpg";
import img11 from "./img/11.jpg";
import img12 from "./img/12.jpg";
import img13 from "./img/13.jpg";
import img14 from "./img/14.jpg";
import img15 from "./img/15.jpg";
import img16 from "./img/16.jpg";
import img18 from "./img/18.jpg";
import img19 from "./img/19.jpg";
import img20 from "./img/20.jpg";
import img21 from "./img/21.jpg";
import img22 from "./img/22.jpg";
import "./AboutUs.scss";

const AboutUs = () => {
    useEffect(() => {
        document.title = "Bourek | O nás";
    }, []);

    return (
        <section className="about-us">
            <h3 className="about-us__offer-title">Co nabízíme</h3>
            <ul className="about-us__offer-list">
                <li>služby odborného rehabilitačního lékaře</li>
                <li>služby odborného neurologického lékaře</li>
                <li>služby rehabilitačních pracovnic</li>
                <li>
                    veškeré kompletní rehabilitační služby:
                    <ul>
                        <li>masážní přístroj starvac sp 2</li>
                        <li>kompletní elektroléčba, laser terapie, solux</li>
                        <li>léčebná tělesná výchova</li>
                        <li>speciální LTV na míčích</li>
                        <li>reflexní masáže</li>
                        <li>poradenství o zdravém životním stylu</li>
                    </ul>
                </li>
                <li>speciální zdravotnický maloobchod</li>
            </ul>
            <CustomHr />
            <h3 className="about-us__gallery-title">Galerie</h3>
            <div className="about-us__gallery">
                <img src={img1} loading="lazy" />
                <img src={img2} loading="lazy" />
                <img src={img3} loading="lazy" />
                <img src={img4} loading="lazy" />
                <img src={img5} loading="lazy" />
                <img src={img6} loading="lazy" />
                <img src={img7} loading="lazy" />
                <img src={img8} loading="lazy" />
                <img src={img9} loading="lazy" />
                <img src={img10} loading="lazy" />
                <img src={img11} loading="lazy" />
                <img src={img12} loading="lazy" />
                <img src={img13} loading="lazy" />
                <img src={img14} loading="lazy" />
                <img src={img15} loading="lazy" />
                <img src={img16} loading="lazy" />
                <img src={img18} loading="lazy" />
                <img src={img19} loading="lazy" />
                <img src={img20} loading="lazy" />
                <img src={img21} loading="lazy" />
                <img src={img22} loading="lazy" />
            </div>
        </section>
    );
};

export default AboutUs;
