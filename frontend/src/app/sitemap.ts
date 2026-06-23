import { routing } from "@/i18n/routing";
import { BASE_URL } from "@/lib/constants";
import { MetadataRoute } from "next";

const pages = [
	{ path: "", priority: 1.0, changeFreq: "weekly" },
	{ path: "cenik", priority: 0.9, changeFreq: "monthly" },
	{ path: "galerie-usmevu", priority: 0.8, changeFreq: "monthly" },
	{ path: "kontakty", priority: 0.8, changeFreq: "monthly" },
	{ path: "nase-klinika", priority: 0.5, changeFreq: "monthly" },
	{ path: "ordinacni-hodiny", priority: 0.8, changeFreq: "monthly" },
	{
		path: "zasady-ochrany-osobnich-udaju",
		priority: 0.1,
		changeFreq: "yearly",
	},
] as const;

export default function sitemap(): MetadataRoute.Sitemap {
	const alternates = (path: string) => ({
		...Object.fromEntries(
			routing.locales.map((l) => [l, `${BASE_URL}/${l}${path}`]),
		),
		"x-default": `${BASE_URL}/${routing.defaultLocale}${path}`,
	});

	return routing.locales.flatMap((locale) =>
		pages.map((page) => ({
			url: `${BASE_URL}/${locale}/${page.path}`.replace(/\/$/, ""),
			lastModified: new Date(),
			changeFrequency: page.changeFreq,
			priority: page.priority,
			alternates: {
				languages: alternates(page.path ? `/${page.path}` : ""),
			},
		})),
	);
}
