import type { JSX } from "react";
import { BiSolidLeftArrow } from "react-icons/bi";
import { useLocation, useNavigate } from "react-router";
import "./components.scss"

export default function BackBtn(): JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();

  function handleBack(): void {
    if (location.state?.search) {
      navigate(`/vans${location.state.search}`);
    } else {
      navigate(-1);
    }
  }

  return (
    <button className="back-btn" onClick={handleBack}>
      <BiSolidLeftArrow />
      <span>back</span>
    </button>
  );
}
