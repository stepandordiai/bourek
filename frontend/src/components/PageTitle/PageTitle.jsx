import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import "./PageTitle.scss";

const PageTitle = ({ title }) => {
	const { t } = useTranslation();

	return (
		<div className="page-title">
			<h1 className="page-title__title">{title}</h1>
			<div>
				<NavLink className="page-title__link" to="/">
					{t("home_title")}
				</NavLink>
				<span> | </span>
				<span className="page-title__link--inactive">{title}</span>
			</div>
		</div>
	);
};

export default PageTitle;
