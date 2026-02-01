import type { JSX } from "react";
import type { Van } from "../../types/types";
interface VanInfoProps {
  van: Van;
}
export default function VanInfo({ van }: VanInfoProps): JSX.Element {
  const { name, type, price, description } = van;

  return (
    <section className="van-info">
      <h2>{name}</h2>
      <span className={`van-type ${type}`}>{type}</span>
      <div className="label">
        <button className="rent-btn">rent this van</button>
        <span className="price">
          ${price}
          <sub>/day</sub>
        </span>
      </div>
      <p className="description">{description}</p>
    </section>
  );
}
