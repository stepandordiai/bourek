import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/common/Header/Header";
import Footer from "@/components/common/Footer/Footer";
import { Poppins, Inter } from "next/font/google";
import Banner from "@/components/Banner/Banner";
import ScrollToTop from "@/utils/ScrollToTop";
import Loading from "@/components/Loading/Loading";
import "@/scss/globals.scss";

const poppins = Poppins({
	variable: "--font-poppins",
	weight: ["400", "500", "600"],
	subsets: ["latin"],
});

const inter = Inter({
	variable: "--font-inter",
	weight: ["400", "500", "600"],
	subsets: ["cyrillic"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://www.bourek.cz"),
};

type LocaleLayoutProps = {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({
	children,
	params,
}: Readonly<LocaleLayoutProps>) {
	const { locale } = await params;

	return (
		<html lang={locale}>
			<body className={`${inter.variable} ${poppins.variable}`}>
				<ScrollToTop />
				<NextIntlClientProvider locale={locale}>
					<Loading />
					<Banner />
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
