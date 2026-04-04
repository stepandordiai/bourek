"use client";

import { useTranslations } from "next-intl";
import { useState } from "react";
import Breadcrumbs from "@/components/common/PageTitle/Breadcrumbs";
import Container from "@/components/Container/Container";
import "./ClinicGallery.scss";

const clinicGallery = [
	"./../clinic/01-c.jpg",
	"./../clinic/02-c.jpg",
	"./../clinic/03-c.jpg",
	"./../clinic/04-c.jpg",
	"./../clinic/05-c.jpg",
	"./../clinic/06-c.jpg",
	"./../clinic/07-c.jpg",
	"./../clinic/08-c.jpg",
	"./../clinic/09-c.jpg",
	"./../clinic/10-c.jpg",
	"./../clinic/11-c.jpg",
	"./../clinic/12-c.jpg",
	"./../clinic/13-c.jpg",
	"./../clinic/14-c.jpg",
	"./../clinic/15-c.jpg",
];

function ClinicGalleryClient() {
	const t = useTranslations();

	const [isImgSliderActive, setIsImgSliderActive] = useState(false);
	const [imgIndex, setImgIndex] = useState<number>(0);

	const showImgSlider = (index: number) => {
		setIsImgSliderActive(true);
		setImgIndex(index);

		document.body.style.overflow = "hidden";
	};

	const handleImgSlider = (direction: number) => {
		setImgIndex((prev) => {
			const galleryLength = clinicGallery.length;
			let nextIndex = prev + direction;

			if (nextIndex === galleryLength) nextIndex = 0;
			if (nextIndex < 0) nextIndex = galleryLength - 1;
			return nextIndex;
		});
	};

	const hideImgSlider = () => {
		setIsImgSliderActive(false);

		document.body.style.overflow = "auto";
	};
	return (
		<>
			<main>
				<Breadcrumbs title={t("clinic_gallery_title")} />
				<Container>
					<div className="clinic-gallery__masonry">
						{clinicGallery.map((imgSrc, index) => {
							return (
								<img
									key={index}
									onClick={() => showImgSlider(index)}
									src={imgSrc}
									alt=""
									loading="lazy"
								/>
							);
						})}
					</div>
				</Container>
			</main>
			<div
				className={`img-slider ${
					isImgSliderActive ? "img-slider--active" : ""
				}`}
			>
				<div className="img-slider__pagination">
					{imgIndex + 1} / {clinicGallery.length}
				</div>
				<button className="img-slider__close-btn" onClick={hideImgSlider}>
					{t("banner.close_btn")}
				</button>
				<img src={clinicGallery[imgIndex]} alt="" />
				<button
					onClick={() => handleImgSlider(-1)}
					className="img-slider__prev-btn"
				>
					❮
				</button>
				<button
					onClick={() => handleImgSlider(1)}
					className="img-slider__next-btn"
				>
					❯
				</button>
			</div>
		</>
	);
}

export default ClinicGalleryClient;
