import { type JSX } from "react";
import VanCard from "./vanCard";
import EmptyList from "../../components/emptyList";
import type { Van } from "../../types/types";

interface VansListProps {
  displayVans: Van[];
  searchParams: URLSearchParams;
}
function VansList({ displayVans, searchParams }: VansListProps): JSX.Element {

  return (
    <section className="vans-list">
      {displayVans.length <= 0 ? (
        <EmptyList msg={"there is no vans yet!"} />
      ) : (
        displayVans.map((van: Van) => (
          <VanCard key={van.id} van={van} searchParams={searchParams} />
        ))
      )}
    </section>
  );
}

export default VansList;
