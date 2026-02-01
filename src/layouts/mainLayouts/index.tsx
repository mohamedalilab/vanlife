import type React from "react";
import { Outlet } from "react-router";
import Header from "./header";
import Footer from "./footer";
import "./mainLayouts.scss";

function Layouts(): React.JSX.Element {
  console.log("Layouts rendered");
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layouts;
