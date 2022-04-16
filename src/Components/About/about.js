import "./about.css";
import codersEvoke from "../assets/img/logo.png";
import Border from "../Customized Border/border";

export default function About() {
  return (
    <section className="my-5">
      <div>
        <h2 className="text-center fs-1">About us</h2>
      </div>
      <Border />
      <p className="text-center fs-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi, deserunt
        ullam! Pariatur assumenda odio quo sequi inventore eius consequatur
        accusantium doloribus non vero porro debitis, earum esse nam saepe. Et?
      </p>
      <div className="d-flex justify-content-center">
        <img src={codersEvoke} alt="" />
      </div>
    </section>
  );
}
