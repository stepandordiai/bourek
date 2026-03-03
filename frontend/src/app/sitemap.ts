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
const locales = ["cs", "uk", "en"];

export default function sitemap(): MetadataRoute.Sitemap {
	// TODO: LEARN THIS
	const alternates = (path: string) => ({
		...Object.fromEntries(
			locales.map((locale) => [locale, `${BASE_URL}/${locale}${path}`]),
		),
		"x-default": `${BASE_URL}/cs${path}`,
	});

	return locales.flatMap((locale) =>
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
