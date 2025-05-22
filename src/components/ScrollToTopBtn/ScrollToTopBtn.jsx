import upArrowIcon from "/icons/up-arrow.png";
import "./ScrollToTopBtn.scss";

const ScrollToTopBtn = () => {
	function scrollOnClick() {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}

	addEventListener("scroll", () => {
		if (window.scrollY >= 500) {
			document
				.querySelector(".to-top-btn")
				.classList.add("to-top-btn--visible");
		} else {
			document
				.querySelector(".to-top-btn")
				.classList.remove("to-top-btn--visible");
		}
	});

	return (
		<button className="to-top-btn" onClick={scrollOnClick}>
			<img src={upArrowIcon} width={20} height={20} alt="" loading="lazy" />
		</button>
	);
};

export default ScrollToTopBtn;
