import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import Header from "@/components/layout/Header/Header";
import Footer from "@/components/layout/Footer/Footer";
import { Poppins, Inter } from "next/font/google";
import Banner from "@/components/Banner/Banner";
import ScrollToTop from "@/utils/ScrollToTop";
import Loading from "@/components/Loading/Loading";
import ScrollToTopBtn from "@/components/ScrollToTopBtn/ScrollToTopBtn";
import FloatContact from "@/components/FloatContact/FloatContact";
import { hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { BASE_URL } from "@/lib/constants";
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
	metadataBase: new URL(BASE_URL),
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

	if (!hasLocale(routing.locales, locale)) {
		return notFound();
	}

	return (
		<html lang={locale}>
			<body className={`${inter.variable} ${poppins.variable}`}>
				<ScrollToTop />
				<NextIntlClientProvider locale={locale}>
					<Loading />
					<Banner />
					<FloatContact />
					<ScrollToTopBtn />
					<Header />
					{children}
					<Footer />
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
