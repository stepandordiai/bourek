import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { routing } from "@/i18n/routing";
import Breadcrumbs from "@/components/common/PageTitle/Breadcrumbs";
import PageInfo from "@/components/PageInfo/PageInfo";
import "./PersonalData.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale, namespace: "gdpr.meta" });
	const page = "gdpr";
	const languages = Object.fromEntries(
		routing.locales.map((l) => [l, `/${l}/${page}`]),
	);

	return {
		title: t("title"),
		description: t("desc"),
		alternates: {
			canonical: `/${locale}/${page}`,
			languages: {
				...languages,
				"x-default": `/${routing.defaultLocale}/${page}`,
			},
		},
	};
}

export default async function PersonalData() {
	const t = await getTranslations();

	return (
		<main>
			<Breadcrumbs title={t("personal_data_title")} />
			<PageInfo>
				<strong>{t("personal_data.info_1")},</strong>
				<p>{t("personal_data.info_2")}</p>
				<p>{t("personal_data.info_3")}</p>
				<p>{t("personal_data.info_4")}</p>
				<p>{t("personal_data.info_5")}</p>
			</PageInfo>
		</main>
	);
}
