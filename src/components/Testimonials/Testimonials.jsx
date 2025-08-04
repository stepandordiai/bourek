import { useTranslation } from "react-i18next";

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import googleIcon from "/icons/google.png";
import starIcon from "/icons/star.png";
import "./Testimonials.scss";

const Testimonials = () => {
	const { t } = useTranslation();

	const testimonialsData = [
		{
			name: "Cathy Mattson",
			date: "April 2, 2025",
			review:
				"Naprosto perfekní přístup a profesionální chování. Neumím si představit lepší a příjemnější místo na rehabilitaci. Doporučuji všem známým!",
		},
		{
			name: "Valeria Novitskaia",
			date: "January 10, 2025",
			review:
				"Všechno probíhalo na jedničku. Velice milý a profesionální přístup.",
		},
		{
			name: "Jan Šmída",
			date: "March 16, 2025",
			review:
				"Velmi pozitivní a přátelský přístup. Pár cviků a obrovský posun.",
		},
		{
			name: "Jiri Capek",
			date: "March 25, 2025",
			review:
				"Nádherné, moderní a čisté prostředí. Extrémně empatický, milý a trpělivý personál. Celkově místo působí profesionálním, ale zároveň přívětivým dojmem.",
		},
	];

	return (
		<>
			<h2 className="home__testimonials-title" id="testimonials">
				{t("testimonials_title")}
			</h2>
			<a
				className="testimonials__link"
				href="https://g.page/r/CeuGELtmU6ALEAE/review"
				target="_blank"
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
			>
				{testimonialsData.map((testimonial, index) => {
					return (
						<SwiperSlide key={index}>
							<div className="testimonials__card">
								<div className="testimonials-card__header">
									<div>
										<p className="testimonials-card__header-name">
											{testimonial.name}
										</p>
										<p className="testimonials-card__header-date">
											{testimonial.date}
										</p>
									</div>
									<img
										src={googleIcon}
										width={40}
										height={40}
										alt=""
										loading="lazy"
									/>
								</div>
								<div className="testimonials-card__rating">
									<img
										src={starIcon}
										width={20}
										height={20}
										alt=""
										loading="lazy"
									/>
									<img
										src={starIcon}
										width={20}
										height={20}
										alt=""
										loading="lazy"
									/>
									<img
										src={starIcon}
										width={20}
										height={20}
										alt=""
										loading="lazy"
									/>
									<img
										src={starIcon}
										width={20}
										height={20}
										alt=""
										loading="lazy"
									/>
									<img
										src={starIcon}
										width={20}
										height={20}
										alt=""
										loading="lazy"
									/>
								</div>
								<p>{testimonial.review}</p>
							</div>
						</SwiperSlide>
					);
				})}
			</Swiper>
		</>
	);
};

export default Testimonials;
