import type { JSX } from "react";
import { MdOutlineEditNote } from "react-icons/md";
import type { Van } from "../../../types/types";
import { Link } from "react-router";

interface HostVanRowProps {
  van: Van;
}

export default function HostVanRow({ van }: HostVanRowProps): JSX.Element {
  const { name, imageUrl, price } = van;
  return (
    <li className="host-van-row">
      <div className="host-van-info">
        <img src={imageUrl} alt={name} />
        <div className="label">
          <h3>{name}</h3>
          <span>${price}/day</span>
        </div>
      </div>
      <Link to={van.id} className="edit-btn">
        edit
        <MdOutlineEditNote />
      </Link>
    </li>
  );
}
