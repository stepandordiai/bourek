import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ClinicGalleryClient from "./ClinicGalleryClient";
import "./ClinicGallery.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const locales = ["cs", "uk", "en"];
	const languages = Object.fromEntries(
		locales.map((l) => [l, `/${l}/galerie-kliniky`]),
	);

	return {
		title: `${t("clinic_gallery_title")} | Bourek`,
		description: "",
		alternates: {
			canonical: `/${locale}/galerie-kliniky`,
			languages: {
				...languages,
				"x-default": `/cs/galerie-kliniky`,
			},
		},
	};
}

export default async function ClinicGallery() {
	return <ClinicGalleryClient />;
}
