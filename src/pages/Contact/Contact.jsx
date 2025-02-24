import { useEffect } from "react";
import dayjs from "dayjs";
import CustomDivider from "../../components/CustomDivider/CustomDivider";
import PageTitle from "../../components/PageTitle/PageTitle";
import { useTranslation } from "react-i18next";
import locationIcon from "./../../assets/icons/location.png";
import phoneIcon from "./../../assets/icons/telephone.png";
import mailIcon from "./../../assets/icons/mail.png";
import "./Contact.scss";

const Contact = () => {
    const { t } = useTranslation();

    useEffect(() => {
        document.title = t("contacts_title");
    }, [t]);

    useEffect(() => {
        // Listener for multiple custom selectors

        document.querySelectorAll(".custom-select").forEach((select) => {
            const selectBtn = select.querySelector(".custom-select__btn");
            const selectList = select.querySelector(".custom-select__list");
            const selectOptions = selectList.querySelectorAll(
                ".custom-select__option"
            );
            const selectInput = document.querySelector(".custom-select__input");

            selectBtn.addEventListener("click", (e) => {
                // Prevent from submitting a form

                e.preventDefault();
                selectList.classList.toggle("custom-select__list--visible");
                selectBtn.classList.add("custom-select__btn--active");
            });

            selectOptions.forEach((option) => {
                option.addEventListener("click", (e) => {
                    // TODO:

                    e.stopPropagation();
                    selectBtn.textContent = option.textContent;
                    selectBtn.focus();
                    selectInput.value = option.dataset.value;
                    selectList.classList.remove("custom-select__list--visible");
                });
            });

            document.addEventListener("click", (e) => {
                if (e.target !== selectBtn) {
                    selectBtn.classList.remove("custom-select__btn--active");
                    selectList.classList.remove("custom-select__list--visible");
                }
            });
        });
    }, []);

    const addressLink =
        "https://www.google.com/maps/place/Pepa+Bourek/@50.0241827,15.2118482,17z/data=!3m1!4b1!4m15!1m8!3m7!1s0x470c153bee9daf87:0xc91ccf8d204d4cb!2sPod+Hroby+271%2F271,+280+02+Kol%C3%ADn+IV!3b1!8m2!3d50.0240306!4d15.2143025!16s%2Fg%2F11cpkpjyq9!3m5!1s0x470c1567f730be5f:0xba05366bb1086eb!8m2!3d50.0241793!4d15.2144231!16s%2Fg%2F11ybt54v3c?entry=ttu&g_ep=EgoyMDI1MDEyOC4wIKXMDSoASAFQAw%3D%3D";

    const dateNow = dayjs();
    const formatedDate = dateNow.format("YYYY-MM-DD");
    const hoursNow = dateNow.hour();
    const formatedHours = hoursNow < 10 ? "0" + hoursNow : hoursNow;
    const minutesNow = dateNow.minute();
    const formatedMinutes = minutesNow < 10 ? "0" + minutesNow : minutesNow;

    return (
        <>
            <PageTitle title={t("contacts_title")} />
            <div className="contact__wrapper">
                <ul className="contact__list">
                    <li>
                        <img src={phoneIcon} width={30} alt="Phone" />
                        <a href="tel:+420602273579">+420 602 273 579</a>
                    </li>
                    <li>
                        <img src={mailIcon} width={30} alt="E-mail" />
                        <a href="mailto:josef@bourek.cz">
                            pepabourek@gmail.com
                        </a>
                    </li>
                    <li>
                        <img src={locationIcon} width={30} alt="Location" />
                        <a href={addressLink} target="_blank">
                            Pod Hroby 271 Kolín IV
                        </a>
                    </li>
                </ul>
                <CustomDivider />
                <div className="form-map-wrapper">
                    <div className="form-wrapper">
                        <h3 className="contact__form-title" id="contact-form">
                            {t("contacts.form_title")}
                        </h3>
                        <form
                            className="contact__form"
                            action="mailto:pepabourek@gmail.com"
                            method="post"
                            encType="text/plain"
                        >
                            <div className="contact-form__inputs">
                                <input
                                    className="first-name"
                                    type="text"
                                    name="Jméno"
                                    placeholder={t("contacts.first_name")}
                                    required
                                />
                                <input
                                    className="last-name"
                                    type="text"
                                    name="Příjmení"
                                    placeholder={t("contacts.last_name")}
                                    required
                                />
                            </div>
                            <div className="contact-form__inputs">
                                <input
                                    className="email"
                                    type="text"
                                    name="E-mail"
                                    placeholder={t("contacts.email")}
                                />
                                <input
                                    className="phone"
                                    type="text"
                                    name="Telefonní číslo"
                                    placeholder={t("contacts.phone")}
                                    required
                                />
                            </div>

                            {/* Custom select */}

                            <div className="custom-select">
                                <button className="custom-select__btn">
                                    {t("contacts.select_btn")}
                                </button>
                                <ul className="custom-select__list">
                                    <li
                                        className="custom-select__option"
                                        data-value={t("contacts.not_selected")}
                                    >
                                        {t("contacts.select_btn")}
                                    </li>
                                    <li
                                        className="custom-select__option"
                                        data-value={t("service_1")}
                                    >
                                        {t("service_1")}
                                    </li>
                                    <li
                                        className="custom-select__option"
                                        data-value={t("service_2")}
                                    >
                                        {t("service_2")}
                                    </li>
                                    <li
                                        className="custom-select__option"
                                        data-value={t("service_3")}
                                    >
                                        {t("service_3")}
                                    </li>
                                    <li
                                        className="custom-select__option"
                                        data-value={t("service_4")}
                                    >
                                        {t("service_4")}
                                    </li>
                                    <li
                                        className="custom-select__option"
                                        data-value={t("service_5")}
                                    >
                                        {t("service_5")}
                                    </li>
                                    <li
                                        className="custom-select__option"
                                        data-value={t("service_6")}
                                    >
                                        {t("service_6")}
                                    </li>
                                    <li
                                        className="custom-select__option"
                                        data-value={t("service_7")}
                                    >
                                        {t("service_7")}
                                    </li>
                                </ul>
                                <input
                                    className="custom-select__input"
                                    type="text"
                                    name="Služby"
                                    defaultValue=""
                                />
                            </div>
                            <div className="date-container">
                                <label htmlFor="date">
                                    {t("contacts.visit_date")}
                                </label>
                                <input
                                    id="date"
                                    className="date"
                                    defaultValue={formatedDate}
                                    type="date"
                                    name="Datum"
                                />
                            </div>
                            <div className="time-container">
                                <label htmlFor="time">
                                    {t("contacts.visit_time")}
                                </label>
                                <input
                                    id="time"
                                    className="time"
                                    defaultValue={`${formatedHours}:${formatedMinutes}`}
                                    type="time"
                                    name="Čas"
                                />
                            </div>
                            <button className="submit-btn" type="submit">
                                {t("contacts.form_btn")}
                            </button>
                        </form>
                    </div>
                    <div className="map-wrapper">
                        <h3 className="contact__map-title" id="contact-map">
                            {t("contacts.map_title")}
                        </h3>
                        <iframe
                            className="contact__google-map"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2563.3769121247105!2d15.207949529345697!3d50.02303286368041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470c1567f730be5f%3A0xba05366bb1086eb!2sPepa%20Bourek!5e0!3m2!1scs!2scz!4v1738333836740!5m2!1scs!2scz"
                            loading="lazy"
                        ></iframe>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;
