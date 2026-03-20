import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import Breadcrumbs from "../../components/common/PageTitle/Breadcrumbs";
import Container from "../../components/Container/Container";
import "./PriceList.scss";

export async function generateMetadata({
	params,
}: {
	params: Promise<{ locale: string }>;
}): Promise<Metadata> {
	const { locale } = await params;
	const t = await getTranslations({ locale });

	const locales = ["cs", "uk", "en"];
	const languages = Object.fromEntries(locales.map((l) => [l, `/${l}/cenik`]));

	return {
		title: `${t("price_list_title")} | Bourek`,
		description:
			"Aktuální ceník rehabilitačních služeb MUDr. Josef Bourek v Kolíně a Českém Brodě – fyzioterapie, elektroterapie, laser, lymfodrenáž, Starvac a další.",
		alternates: {
			canonical: `/${locale}/cenik`,
			languages: {
				...languages,
				"x-default": `/cs/cenik`,
			},
		},
	};
}

export default async function PriceList() {
	const t = await getTranslations();

	return (
		<main>
			<Breadcrumbs title={t("price_list_title")} />
			<Container>
				<div className="price-list__wrapper">
					<table className="prices__table">
						<tbody>
							<tr>
								<td
									style={{
										display: "flex",
										justifyContent: "flex-start",
										alignItems: "center",
										gap: 5,
									}}
								>
									<span>Lékařská akupunktura</span>
									<span
										style={{
											background: "var(--blue-clr)",
											color: "#fff",
											fontSize: "0.8rem",
											padding: 5,
											borderRadius: 10,
											wordBreak: "keep-all",
										}}
									>
										{t("price_list.new")}
									</span>
								</td>
								<td>1 sezení</td>
								<td>550 Kč</td>
							</tr>
							<tr>
								<td>Laser</td>
								<td>1 aplikace</td>
								<td>100 Kč</td>
							</tr>
							<tr>
								<td>Elektroléčba (bez doporučení)</td>
								<td></td>
								<td>80 Kč</td>
							</tr>
							<tr>
								<td>STARVAC | masáž</td>
								<td>15 {t("price_list.min")}</td>
								<td>250 Kč</td>
							</tr>
							<tr>
								<td>LTV - Léčebná tělesná výchova (bez doporučení)</td>
								<td>
									30 {t("price_list.min")}
									<br />
									60 {t("price_list.min")}
								</td>
								<td>
									350 Kč
									<br />
									550 Kč
								</td>
							</tr>
							<tr>
								<td>Kinesiologický rozbor + terapie</td>
								<td>45 {t("price_list.min")}</td>
								<td>500 Kč</td>
							</tr>
							<tr>
								<td>Přístrojová lymfomasáž</td>
								<td>
									30 {t("price_list.min")}
									<br />
									45 {t("price_list.min")}
									<br />
									60 {t("price_list.min")}
								</td>
								<td>
									250 Kč
									<br />
									300 Kč
									<br />
									350 Kč
								</td>
							</tr>
							<tr>
								<td>Permanentky - Přístrojová lymfomasáž</td>
								<td>
									10 {t("price_list.procedures")} / 45 {t("price_list.min")}
									<br />
									10 {t("price_list.procedures")} / 60 {t("price_list.min")}
								</td>
								<td>
									2500 Kč
									<br />
									3000 Kč
								</td>
							</tr>
							<tr>
								<td>Vyšetřeni před aplikaci kinesiotape - bez terapie</td>
								<td></td>
								<td>150 Kč</td>
							</tr>
							<tr>
								<td>Kinesiotape</td>
								<td>1 {t("price_list.cm")}</td>
								<td>3 Kč</td>
							</tr>
							<tr>
								<td>Crosstape</td>
								<td>1 ks</td>
								<td>30 Kč</td>
							</tr>
						</tbody>
					</table>
				</div>
			</Container>
		</main>
	);
}
