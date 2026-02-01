import type { JSX } from "react";
import type { Van } from "../../../types/types";
import HostVansList from "./hostVansList";
import { useFetch } from "../../../hooks/useFetch";
import Loading from "../../../components/loading";
import ErrorMsg from "../../../components/errorMsg";
import "./hostVans.scss";

export default function HostVans(): JSX.Element {
  const VANS_URL: string = "/api/host/vans";
  const { data, loading, error } = useFetch<{ vans: Van[] }>(VANS_URL);

  return (
    <section className="host-vans">
      <h2>your listed vans</h2>
      {loading && <Loading />}
      {error && <ErrorMsg error={error} />}
      {data && <HostVansList allVans={data.vans} />}
    </section>
  );
}
