import "./CustomDivider.scss";

const CustomDivider = ({ className = "" }) => {
    return <div className={`custom-divider${className}`}></div>;
};

export default CustomDivider;
