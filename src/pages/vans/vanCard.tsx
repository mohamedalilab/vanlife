import { type JSX } from "react";
import { Link } from "react-router";
import type { Van } from "../../types/types";

interface VanCardProps {
  van: Van;
  searchParams: URLSearchParams;
}

function VanCard({ van, searchParams }: VanCardProps): JSX.Element {
  const { id, name, price, imageUrl, type } = van as Van;

  return (
    <div className="van-card">
      <Link to={id} state={{ search: `?${searchParams.toString()}` }}>
        <img src={imageUrl} alt={name} />
      </Link>
      <div className="details">
        <div className="top">
          <h2 className="name">{name}</h2>
          {/* <FavIcon id={id} /> */}
        </div>
        <div className="bottom">
          <span className={`van-type ${type}`}>{type}</span>
          <span className="price">
            {price}
            <sub> /day</sub>
          </span>
        </div>
      </div>
    </div>
  );
}

export default VanCard;
