import { useEffect } from "react";
import dayjs from "dayjs";
import CustomHr from "../../components/CustomHr/CustomHr";
import locationIcon from "./../../assets/icons/location.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import "./Contact.scss";

const Contact = () => {
    useEffect(() => {
        document.title = "Pepa Bourek | Kontakty";
    });

    const dateNow = dayjs();
    const formatedDate = dateNow.format("YYYY-MM-DD");
    const hoursNow = dateNow.hour();
    const formatedHours = hoursNow < 10 ? "0" + hoursNow : hoursNow;
    const minutesNow = dateNow.minute();
    const formatedMinutes = minutesNow < 10 ? "0" + minutesNow : minutesNow;

    return (
        <section className="contact">
            <h2 className="contact__title">Kontakty</h2>
            <ul className="contact__list">
                <li>
                    <img src={phoneIcon} width={30} alt="Phone" />
                    <a href="tel:+420602273579">+420 602 273 579</a>
                </li>
                <li>
                    <img src={mailIcon} width={30} alt="E-mail" />
                    <a href="mailto:josef@bourek.cz">pepabourek@gmail.com</a>
                </li>
                <li>
                    <img src={locationIcon} width={30} alt="Location" />
                    <a href="https://maps.app.goo.gl/zyvc7wwr1atb3N3m8">
                        Pod Hroby 271/271 Kolín IV
                    </a>
                </li>
            </ul>
            <CustomHr />
            <h3 className="contact__form-title">Domluvit si schůzku</h3>
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
                            defaultValue={`${formatedHours}:${formatedMinutes}`}
                            type="time"
                            name="Time"
                        />
                    </div>
                </div>
                <button type="submit">Domluvit si schůzku</button>
            </form>
            <CustomHr />
            <h3 className="contact__map-title">Kde jsme</h3>
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
