import { type JSX } from "react";
import { useSearchParams } from "react-router";
import type { Van, VanType } from "../../types/types";
import VanCard from "./vanCard";
import VansFilter from "./vansFilter";
import "./vans.scss";
import EmptyList from "../../components/emptyList";
import { useFetch } from "../../hooks/useFetch";
import Loading from "../../components/loading";
import ErrorMsg from "../../components/errorMsg";

function VansPage(): JSX.Element {
  const VANS_URL = "api/vans";
  const { data, loading, error } = useFetch<{ vans: Van[] }>(VANS_URL);

  const [searchParams, setSearchParams] = useSearchParams();

  const handleTypeFilter = (type: VanType): void => {
    setSearchParams((prevParams) => {
      const newParams = new URLSearchParams(prevParams.toString()); // clone
      newParams.set("type", type);
      return newParams;
    });
  };

  // gets van type if exist from URL
  const typeFilter = searchParams.get("type") as VanType;

  // filter vans for dsiplaying
  const displayVans: Van[] = data
    ? data?.vans.filter((van) => (typeFilter ? van.type === typeFilter : true))
    : [];

  return (
    <main className="vans-page">
      <div className="container">
        <h1>explore our vans options</h1>
        <VansFilter type={typeFilter} handleTypeFilter={handleTypeFilter} />
        <section className="vans-list">
          {loading ? (
            <Loading />
          ) : error ? (
            <ErrorMsg error={error} />
          ) : !data || data?.length <= 0 ? (
            "theres no vans yet!"
          ) : displayVans.length === 0 ? (
            <EmptyList msg={"there is no vans yet!"} />
          ) : (
            displayVans.map((van) => (
              <VanCard key={van.id} van={van} searchParams={searchParams} />
            ))
          )}
        </section>
      </div>
    </main>
  );
}

export default VansPage;
