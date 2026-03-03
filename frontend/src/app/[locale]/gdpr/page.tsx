import { getTranslations } from "next-intl/server";
import Breadcrumbs from "../../components/common/PageTitle/Breadcrumbs";
import PageInfo from "../../components/PageInfo/PageInfo";
import type { Metadata } from "next";
import "./PersonalData.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });
	const baseUrl = "https://www.bourek.cz";

	return {
		title: `${t("personal_data_title")} | Bourek`,
		description:
			"Zásady ochrany osobních údajů v ordinaci MUDr. Josef Bourek v Kolíně a Českém Brodě – informace o zpracování a zabezpečení vašich dat v souladu s GDPR.",
		alternates: {
			canonical: `${baseUrl}/${locale}/gdpr`,
			languages: {
				cs: `${baseUrl}/cs/gdpr`,
				uk: `${baseUrl}/uk/gdpr`,
				en: `${baseUrl}/en/gdpr`,
				"x-default": `${baseUrl}/cs/gdpr`,
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
