import upArrowIcon from "./../../assets/icons/up-arrow.png";
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

    // Method that detects if we scrolled to bottom to translate to-top-btn
    window.onscroll = function () {
        const difference =
            document.documentElement.scrollHeight - window.innerHeight;
        const scrollposition = document.documentElement.scrollTop;
        if (difference - scrollposition <= 2) {
            document
                .querySelector(".to-top-btn")
                .classList.add("to-top-btn--translate");
        } else {
            document
                .querySelector(".to-top-btn")
                .classList.remove("to-top-btn--translate");
        }
    };

    return (
        <button
            className="to-top-btn"
            onClick={scrollOnClick}
            title="Scroll to top button"
        >
            <img src={upArrowIcon} alt="" />
        </button>
    );
};

export default ScrollToTopBtn;
