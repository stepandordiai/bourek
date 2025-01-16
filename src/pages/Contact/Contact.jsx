import { useEffect } from "react";
import dayjs from "dayjs";
import locationIcon from "./../../assets/icons/location.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import CustomLine from "../../components/CustomLine/CustomLine";
import "./Contact.scss";

const Contact = () => {
    useEffect(() => {
        document.title = "Bourek | Kontakt";
    });

    const currentDate = dayjs();

    const hours = currentDate.hour();

    const minutes = currentDate.minute();

    const formatedDate = currentDate.format("YYYY-MM-DD");

    return (
        <section className="contact">
            <h3 className="contact__title">Kontakt</h3>
            <ul className="contact__list">
                <li>
                    <img src={phoneIcon} width={30} alt="" />
                    <a href="tel:+420321727404">+420 321 727 404</a>
                    {/* <a href="sms:+380689852978?&body=Hi%2520there%252C%2520I%2527d%2520like%2520to%2520place%2520an%2520order%2520for...">
                        Click here to text us!
                    </a> */}
                </li>
                <li>
                    <img src={mailIcon} width={30} alt="" />
                    <a href="mailto:josef@bourek.cz">josef@bourek.cz</a>
                </li>
                <li>
                    <img src={locationIcon} width={30} alt="" />
                    <a href="https://maps.app.goo.gl/zyvc7wwr1atb3N3m8">
                        Kolín 4 Pod Hroby 271
                    </a>
                </li>
            </ul>
            <CustomLine />
            <h4 className="contact__form-title">Domluvit si schůzku</h4>
            <form
                className="contact__form"
                action="mailto:josef@bourek.cz"
                method="post"
                encType="text/plain"
            >
                <div>
                    <input
                        className="first-name"
                        type="text"
                        name="First name"
                        placeholder="Jméno *"
                        required
                    />
                    <input
                        className="last-name"
                        type="text"
                        name="Last name"
                        placeholder="Příjmení *"
                        required
                    />
                </div>
                <div>
                    <input
                        className="email"
                        type="text"
                        name="E-mail"
                        placeholder="E-mail"
                    />
                    <input
                        className="phone"
                        type="text"
                        name="Phone number"
                        placeholder="Telefonní číslo *"
                        required
                    />
                </div>
                <select className="department" name="Department">
                    <option className="default-option" value="Vybrat oddělení">
                        Vybrat oddělení
                    </option>
                    <option value="Ordinace">Ordinace</option>
                    <option value="Starvac">Starvac</option>
                    <option value="Celulitida">Celulitida</option>
                    <option value="Lymfodrenáž">Lymfodrenáž</option>
                </select>
                <div>
                    <div className="date-container">
                        <label htmlFor="date">Vyberte datum návštěvy</label>
                        <input
                            id="date"
                            className="date"
                            defaultValue={formatedDate}
                            type="date"
                            name="Date"
                        />
                    </div>
                    <div className="time-container">
                        <label htmlFor="date">Zvolit čas návštěvy</label>
                        <input
                            className="time"
                            defaultValue={`${hours}:${minutes}`}
                            type="time"
                            name="Time"
                        />
                    </div>
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
