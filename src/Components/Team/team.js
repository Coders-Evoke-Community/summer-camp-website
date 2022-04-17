import "./team.css";
import codersEvoke from "../assets/img/logo.png";
import Border from "../Customized Border/border";
import TeamCard from "../Team Card/teamCard"

export default function Team() {
  return (
    <section className="my-5 container">
      <div>
        <h2 className="text-center fs-1">Meet Our Team</h2>
      </div>
      <Border />
      
      <div className="card-group p-2">
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
        <TeamCard />
      </div>
    </section>
  );
}
