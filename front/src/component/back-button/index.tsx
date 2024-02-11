import "./index.css";
import arrow from "./arrow-back.svg";

export default function BackButton() {
  const handleClick = () => {
    window.history.back();
  };
  return (
    <div className="arrow_img">
      <img onClick={handleClick} src={arrow} alt="arrow" />
    </div>
  );
}
