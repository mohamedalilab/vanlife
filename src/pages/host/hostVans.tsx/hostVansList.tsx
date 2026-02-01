import type { JSX } from "react";
import type { Van } from "../../../types/types";
import HostVanRow from "./hostVanRow";
import EmptyList from "../../../components/emptyList";

interface HostVansListProps {
  allVans: Van[];
}

export default function HostVansList({ allVans }: HostVansListProps): JSX.Element {
  return (
    <>
      {allVans?.length <= 0 ? (
        <EmptyList msg="there is no vans yet!" />
      ) : (
        <ul className="host-vans-list">
          {allVans.map((van: Van) => (
            <HostVanRow key={van.id} van={van} />
          ))}
        </ul>
      )}
    </>
  );
}
