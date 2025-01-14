import CustomLine from "../../components/CustomLine/CustomLine";
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
    return (
        <section className="about-us">
            <h3 className="about-us__offer-title">What we offer</h3>
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
            <CustomLine />
            <h3 className="about-us__gallery-title">Gallery</h3>
            <div className="about-us__gallery">
                <img src={img1} alt="" />
                <img src={img2} alt="" />
                <img src={img3} alt="" />
                <img src={img4} alt="" />
                <img src={img5} alt="" />
                <img src={img6} alt="" />
                <img src={img7} alt="" />
                <img src={img8} alt="" />
                <img src={img9} alt="" />
                <img src={img10} alt="" />
                <img src={img11} alt="" />
                <img src={img12} alt="" />
                <img src={img13} alt="" />
                <img src={img14} alt="" />
                <img src={img15} alt="" />
                <img src={img16} alt="" />
                <img src={img18} alt="" />
                <img src={img19} alt="" />
                <img src={img20} alt="" />
                <img src={img21} alt="" />
                <img src={img22} alt="" />
            </div>
        </section>
    );
};

export default AboutUs;
