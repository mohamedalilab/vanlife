import type { JSX } from "react";
import type { VanType } from "../../types/types";

interface VansFilterProps {
  type: VanType;
  handleTypeFilter: (type: VanType) => void;
}
export default function VansFilter({
  type,
  handleTypeFilter,
}: VansFilterProps): JSX.Element {
  return (
    <div className="type-filter">
      <button
        className={`simple ${type === "simple" ? "active" : ""}`}
        onClick={() => {
          handleTypeFilter("simple");
        }}
      >
        simple
      </button>
      <button
        className={`luxury ${type === "luxury" ? "active" : ""}`}
        onClick={() => {
          handleTypeFilter("luxury");
        }}
      >
        luxury
      </button>
      <button
        className={`rugged ${type === "rugged" ? "active" : ""}`}
        onClick={() => {
          handleTypeFilter("rugged");
        }}
      >
        ragged
      </button>
    </div>
  );
}
