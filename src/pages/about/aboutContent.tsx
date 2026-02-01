import type {JSX} from "react";

export default function AboutContent(): JSX.Element {
  return (
    <div className="content">
      <img src="./images/about.png" alt="about" />
      <div className="text-content">
        <h1>don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
      </div>
    </div>
  );
}
