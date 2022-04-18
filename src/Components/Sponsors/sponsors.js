import "./sponsors.css";
import codersEvoke from "../assets/img/logo.png";
import gmc from "../assets/img/givemycertificate.png";
import azure from "../assets/img/microsoft-azure-logo.png";
import gfg from "../assets/img/gfg-new-logo.png";
import Border from "../Customized Border/border";

export default function Sponsors() {
  return (
    <section className="my-5 container">
      <div>
        <h2 className="text-center fs-1">Sponsors</h2>
      </div>
      <Border />
      <div className="sponsor-img d-flex justify-content-center align-items-center">
        <a href="https://givemycertificate.com/">
          <img src={gmc} alt="Give my certificate.png" />
        </a>
        <a href="https://azure.microsoft.com/en-in/">
          <img src={azure} alt="Microsoft azure" />
        </a>
        <a href="https://www.geeksforgeeks.org/">
          <img src={gfg} alt="geeksforgeeks" />
        </a>
      </div>
    </section>
  );
}
