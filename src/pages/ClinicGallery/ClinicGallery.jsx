import { useEffect } from "react";
import PageTitle from "../../components/PageTitle/PageTitle";
import img1 from "./../../assets/img/1.jpg";
import img2 from "./../../assets/img/2.jpg";
import img3 from "./../../assets/img/3.jpg";
import img4 from "./../../assets/img/4.jpg";
import img5 from "./../../assets/img/5.jpg";
import img6 from "./../../assets/img/6.jpg";
import img7 from "./../../assets/img/7.jpg";
import img8 from "./../../assets/img/8.jpg";
import img9 from "./../../assets/img/9.jpg";
import img10 from "./../../assets/img/10.jpg";
import img11 from "./../../assets/img/11.jpg";
import img12 from "./../../assets/img/12.jpg";
import img13 from "./../../assets/img/13.jpg";
import img14 from "./../../assets/img/14.jpg";
import img15 from "./../../assets/img/15.jpg";
import img16 from "./../../assets/img/16.jpg";
import img18 from "./../../assets/img/18.jpg";
import img19 from "./../../assets/img/19.jpg";
import img20 from "./../../assets/img/20.jpg";
import img21 from "./../../assets/img/21.jpg";
import img22 from "./../../assets/img/22.jpg";
import "./ClinicGallery.scss";

const ClinicGallery = () => {
    useEffect(() => {
        document.title = "Galerie kliniky";
    }, []);

    return (
        <>
            <PageTitle title="Galerie kliniky" />
            <div className="clinic-gallery__wrapper">
                <img src={img1} loading="lazy" alt="Image" />
                <img src={img2} loading="lazy" alt="Image" />
                <img src={img3} loading="lazy" alt="Image" />
                <img src={img4} loading="lazy" alt="Image" />
                <img src={img5} loading="lazy" alt="Image" />
                <img src={img6} loading="lazy" alt="Image" />
                <img src={img7} loading="lazy" alt="Image" />
                <img src={img8} loading="lazy" alt="Image" />
                <img src={img9} loading="lazy" alt="Image" />
                <img src={img10} loading="lazy" alt="Image" />
                <img src={img11} loading="lazy" alt="Image" />
                <img src={img12} loading="lazy" alt="Image" />
                <img src={img13} loading="lazy" alt="Image" />
                <img src={img14} loading="lazy" alt="Image" />
                <img src={img15} loading="lazy" alt="Image" />
                <img src={img16} loading="lazy" alt="Image" />
                <img src={img18} loading="lazy" alt="Image" />
                <img src={img19} loading="lazy" alt="Image" />
                <img src={img20} loading="lazy" alt="Image" />
                <img src={img21} loading="lazy" alt="Image" />
                <img src={img22} loading="lazy" alt="Image" />
            </div>
        </>
    );
};

export default ClinicGallery;
