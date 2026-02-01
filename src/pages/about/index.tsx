import type { JSX } from "react";
import VansLinks from "./vansLinks";
import AboutContent from "./aboutContent";
import "./about.scss";

function AboutPage(): JSX.Element {
  return (
    <main className="about-page">
      <div className="container">
        <AboutContent />
        <VansLinks />
      </div>
    </main>
  );
}

export default AboutPage;
