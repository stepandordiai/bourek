import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import ClinicGalleryClient from "./ClinicGalleryClient";
import "./ClinicGallery.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const baseUrl = "https://www.bourek.cz";

	return {
		title: `${t("clinic_gallery_title")} | Bourek`,
		description: "",
		alternates: {
			canonical: `${baseUrl}/${locale}/galerie-kliniky`,
			languages: {
				cs: `${baseUrl}/cs/galerie-kliniky`,
				uk: `${baseUrl}/uk/galerie-kliniky`,
				en: `${baseUrl}/en/galerie-kliniky`,
				"x-default": `${baseUrl}/cs/galerie-kliniky`,
			},
		},
	};
}

export default async function ClinicGallery() {
	return <ClinicGalleryClient />;
}
