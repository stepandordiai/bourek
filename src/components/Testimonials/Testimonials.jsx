import { useTranslation } from "react-i18next";
import googleIcon from "/assets/icons/google.png";
import starIcon from "/assets/icons/star.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
	const { t } = useTranslation();

	return (
		<>
			<h2 className={styles["home__testimonials-title"]} id="testimonials">
				{t("testimonials_title")}
			</h2>
			<a
				className={styles["testimonials__link"]}
				href="https://g.page/r/CeuGELtmU6ALEAE/review"
			>
				{t("testimonials_btn")}
			</a>
			<Swiper
				breakpoints={{
					1200: {
						slidesPerView: 3,
						spaceBetween: 40,
					},

					900: {
						slidesPerView: 2,
						spaceBetween: 40,
					},
				}}
				slidesPerView={1}
				centeredSlides={true}
				spaceBetween={20}
				grabCursor={true}
				autoplay={{
					delay: 4000,
					disableOnInteraction: false,
				}}
				modules={[Autoplay]}
				className="mySwiper"
			>
				<SwiperSlide>
					<div className={styles["testimonials__card"]}>
						<div className={styles["testimonials-card__header"]}>
							<div>
								<p className={styles["testimonials-card__header-name"]}>
									Cathy Mattson
								</p>
								<p className={styles["testimonials-card__header-date"]}>
									April 2, 2025
								</p>
							</div>
							<img src={googleIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__rating"]}>
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__info"]}>
							Naprosto perfekní přístup a profesionální chování. Neumím si
							představit lepší a příjemnější místo na rehabilitaci. Doporučuji
							všem známým!
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles["testimonials__card"]}>
						<div className={styles["testimonials-card__header"]}>
							<div>
								<p className={styles["testimonials-card__header-name"]}>
									Valeria Novitskaia
								</p>
								<p className={styles["testimonials-card__header-date"]}>
									January 10, 2025
								</p>
							</div>
							<img src={googleIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__rating"]}>
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__info"]}>
							Všechno probíhalo na jedničku. Velice milý a profesionální
							přístup.
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles["testimonials__card"]}>
						<div className={styles["testimonials-card__header"]}>
							<div>
								<p className={styles["testimonials-card__header-name"]}>
									Jan Šmída
								</p>
								<p className={styles["testimonials-card__header-date"]}>
									March 16, 2025
								</p>
							</div>
							<img src={googleIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__rating"]}>
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__info"]}>
							Velmi pozitivní a přátelský přístup. Pár cviků a obrovský posun
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={styles["testimonials__card"]}>
						<div className={styles["testimonials-card__header"]}>
							<div>
								<p className={styles["testimonials-card__header-name"]}>
									Jiri Capek
								</p>
								<p className={styles["testimonials-card__header-date"]}>
									March 25, 2025
								</p>
							</div>
							<img src={googleIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__rating"]}>
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
							<img src={starIcon} alt="" />
						</div>
						<div className={styles["testimonials-card__info"]}>
							Nádherné, moderní a čisté prostředí. Extrémně empatický, milý a
							trpělivý personál. Celkově místo působí profesionálním, ale
							zároveň přívětivým dojmem.
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	);
};

export default Testimonials;
