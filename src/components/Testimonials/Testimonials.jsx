import { useTranslation } from "react-i18next";
import googleIcon from "/icons/google.png";
import starIcon from "/icons/star.png";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import styles from "./Testimonials.module.scss";

const Testimonials = () => {
	const { t } = useTranslation();

	const testimonialsData = [
		{
			name: "Cathy Mattson",
			date: "April 2, 2025",
			info: "Naprosto perfekní přístup a profesionální chování. Neumím si představit lepší a příjemnější místo na rehabilitaci. Doporučuji všem známým!",
		},
		{
			name: "Valeria Novitskaia",
			date: "January 10, 2025",
			info: "Všechno probíhalo na jedničku. Velice milý a profesionální přístup.",
		},
		{
			name: "Jan Šmída",
			date: "March 16, 2025",
			info: "Velmi pozitivní a přátelský přístup. Pár cviků a obrovský posun.",
		},
		{
			name: "Jiri Capek",
			date: "March 25, 2025",
			info: "Nádherné, moderní a čisté prostředí. Extrémně empatický, milý a trpělivý personál. Celkově místo působí profesionálním, ale zároveň přívětivým dojmem.",
		},
	];

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
				{testimonialsData.map((testimonial) => {
					return (
						<SwiperSlide>
							<div className={styles["testimonials__card"]}>
								<div className={styles["testimonials-card__header"]}>
									<div>
										<p className={styles["testimonials-card__header-name"]}>
											{testimonial.name}
										</p>
										<p className={styles["testimonials-card__header-date"]}>
											{testimonial.date}
										</p>
									</div>
									<img src={googleIcon} width={40} height={40} alt="" />
								</div>
								<div className={styles["testimonials-card__rating"]}>
									<img src={starIcon} width={20} height={20} alt="" />
									<img src={starIcon} width={20} height={20} alt="" />
									<img src={starIcon} width={20} height={20} alt="" />
									<img src={starIcon} width={20} height={20} alt="" />
									<img src={starIcon} width={20} height={20} alt="" />
								</div>
								<div className={styles["testimonials-card__info"]}>
									{testimonial.info}
								</div>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Testimonials;
