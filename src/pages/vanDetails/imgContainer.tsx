import { type JSX } from "react";
import { FaExpand } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";

interface ImgContainerProps {
  name: string;
  imageUrl: string;
  // handleImgView: () => void;
}
export default function ImgContainer({
  name,
  imageUrl,
}: // handleImgView,
ImgContainerProps): JSX.Element {
  return (
    <div className="img-container">
      <img src={imageUrl} alt={name} />
      <div className="img-options">
        <button className="view" title="view image.">
          <FaExpand />
        </button>
        <a href={imageUrl} download={name} title="download image">
          <FiDownload />
        </a>
      </div>
    </div>
  );
}
