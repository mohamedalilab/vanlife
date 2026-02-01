import type { JSX } from "react";
import { useParams } from "react-router";
import type { Van } from "../../types/types";
import { useFetch } from "../../hooks/useFetch";
import ImgContainer from "./imgContainer";
import VanInfo from "./vanInfo";
import BackBtn from "../../components/backBtn";
import Loading from "../../components/loading";
import ErrorMsg from "../../components/errorMsg";
import "./vanDetails.scss";

export default function VanDetailsPage(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const VAN_URL: string =  `/api/vans/${id}`;
  const { data: vanData, loading, error } = useFetch<{ vans: Van }>(VAN_URL);

  return (
    <main className="van-details-page">
      <div className="container">
        <BackBtn />
        {loading && <Loading />}
        {error && <ErrorMsg error={error} />}
        {!loading && !error && !vanData && <ErrorMsg error="Van not found" />}
        {!loading && !error && vanData && (
          <div className="content">
            <ImgContainer imageUrl={vanData.vans.imageUrl} name={vanData.vans.name} />
            <VanInfo van={vanData.vans} />
          </div>
        )}
      </div>
    </main>
  );
}
