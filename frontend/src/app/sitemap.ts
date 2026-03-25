import { routing } from "@/i18n/routing";
import { MetadataRoute } from "next";

const BASE_URL = "https://www.bourek.cz";
const pages = [
	"",
	"co-nabizime",
	"cenik",
	"ordinacni-doba",
	"galerie-kliniky",
	"kontakty",
	"gdpr",
];

export default function sitemap(): MetadataRoute.Sitemap {
	// TODO: LEARN THIS
	const alternates = (path: string) => ({
		...Object.fromEntries(
			routing.locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`]),
		),
		"x-default": `${BASE_URL}/${routing.defaultLocale}${path}`,
	});

	return routing.locales.flatMap((locale) =>
		pages.map((page) => ({
			url: `${BASE_URL}/${locale}/${page}`.replace(/\/$/, ""),
			lastModified: new Date(),
			changeFrequency: "monthly",
			priority: page === "" ? 1 : 0.8,
			alternates: {
				languages: alternates(page ? `/${page}` : ""),
			},
		})),
	);
}
