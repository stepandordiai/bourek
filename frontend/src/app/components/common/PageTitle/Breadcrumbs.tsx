"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import "./Breadcrumbs.scss";

const Breadcrumbs = ({ title }: { title: string }) => {
	const t = useTranslations();

	return (
		<div className="breadcrumbs">
			<h1 className="breadcrumbs__title">{title}</h1>
			<div>
				<Link className="breadcrumbs__link" href="/">
					{t("home_title")}
				</Link>
				<span> | </span>
				<span className="breadcrumbs__link--inactive">{title}</span>
			</div>
		</div>
	);
};

export default Breadcrumbs;
