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
		title: `${t("contacts_title")} | Bourek`,
		description:
			"Kontaktujte ordinaci MUDr. Josef Bourek v Kolíně nebo Českém Brodě. Objednejte se na rehabilitaci, fyzioterapii či další služby online nebo telefonicky.",
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
