import { useEffect } from "react";
import locationIcon from "./img/location.png";
import phoneIcon from "./img/telephone.png";
import mailIcon from "./img/mail.png";
import CustomLine from "../../components/CustomLine/CustomLine";
import "./Contact.scss";

const Contact = () => {
    useEffect(() => {
        document.title = "Bourek | Kontakt";
    });

    return (
        <section className="contact">
            <h3 className="contact__title">Kontakt</h3>
            <ul className="contact__list">
                <li>
                    <img src={locationIcon} width={30} alt="" />
                    <span>Kolín 4 Pod Hroby 271</span>
                </li>
                <li>
                    <img src={phoneIcon} width={30} alt="" />

                    <a href="tel:+420321727404">+420 321 727 404</a>
                </li>
                <li>
                    <img src={mailIcon} width={30} alt="" />

                    <a href="mailto:josef@bourek.cz">josef@bourek.cz</a>
                </li>
            </ul>
            <CustomLine />
            <h4 className="contact__form-title">Domluvit si schůzku</h4>
            <form className="contact__form" action="">
                <div>
                    <input
                        className="first-name"
                        type="text"
                        placeholder="Jméno *"
                        required
                    />
                    <input
                        className="last-name"
                        type="text"
                        placeholder="Příjmení *"
                        required
                    />
                </div>
                <div>
                    <input className="email" type="text" placeholder="E-mail" />
                    <input
                        className="phone"
                        type="text"
                        placeholder="Telefonní číslo *"
                        required
                    />
                </div>
                <select className="department" name="" id="">
                    <option value="John Doe">Vybrat oddělení</option>
                    <option value="John Doe">John Doe</option>
                    <option value="John Doe">John Doe</option>
                </select>
                <div>
                    <input
                        className="date"
                        defaultValue="mm/dd/yyyy"
                        type="date"
                        name=""
                        id=""
                    />
                    <input
                        className="time"
                        defaultValue="--:--"
                        type="time"
                        name=""
                        id=""
                    />
                </div>
                <button type="submit">Rezervovat termín</button>
            </form>
            <CustomLine />
            <iframe
                className="contact__map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.3689079134874!2d15.212577416454117!3d50.02330318902428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c153bee9daf87%3A0xc91ccf8d204d4cb!2sPod%20Hroby%20271%2F271%2C%20280%2002%20Kol%C3%ADn%20IV!5e0!3m2!1scs!2scz!4v1736770298235!5m2!1scs!2scz"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </section>
    );
};

export default Contact;
