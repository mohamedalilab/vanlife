import type { JSX } from "react";
import { useParams, Link } from "react-router";
import type { Van } from "../../../types/types";
import { useFetch } from "../../../hooks/useFetch";
import Loading from "../../../components/loading";
import ErrorMsg from "../../../components/errorMsg";
import { BiSolidLeftArrow } from "react-icons/bi";
import VanDetailsCard from "./vanCard";
import "./hostVanDetails.scss";

export default function HostVanDetails(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const HOST_VAN_URL: string = id ? `/api/host/vans/${id}` : "";
  const {
    data: vanData,
    loading,
    error,
  } = useFetch<{ vans: Van }>(HOST_VAN_URL);

  return (
    <section className="host-van-details">
      <div className="container">
        <Link to="../vans" className="back-link">
          <BiSolidLeftArrow />
          <span>Back to all vans</span>
        </Link>
        {loading && <Loading />}
        {error && <ErrorMsg error={error} />}
        {!vanData && <ErrorMsg error="van not found!" />}
        {vanData && <VanDetailsCard van={vanData.vans} />}
      </div>
    </section>
  );
}
