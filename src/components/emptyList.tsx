import type { JSX } from "react";
import "./components.scss";

interface EmptyListProps {
  msg: string;
}
export default function EmptyList({ msg }: EmptyListProps): JSX.Element {
  return (
    <div className="empty-list">
      <h3>{msg ? msg : "there is no items yet!"}</h3>
    </div>
  );
}
