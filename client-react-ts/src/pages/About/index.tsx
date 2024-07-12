import InfoCard from "../../components/infoCard";
import "../../img/noBackgroundLogo.png";
import "./About.css";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function About(props: any) {
  return (
    <main className="container" id="aboutContainer">
      <InfoCard
        title="Founder"
        imagePath="../../img/Mate.png"
        subtitle="Mate Melcher"
        content="Biochemical engineer aiming to make industrial bioprocess automation as easy as child's play"
      />
      {/* <InfoCard
        title="Co-Founder"
        imagePath="../../img/David.png"
        subtitle="David Kutas"
        content="An amazing front-end developer from Silicon Valley, Mate's friend since he was born"
      /> */}
      <InfoCard
        title="Company"
        imagePath="../../img/noBackgroundLogo.png"
        subtitle=""
        content="Bioversee aims to create an affordable solution for fermentation and other bioprocess purposes as well as becoming a proper educational software for bioengineering students"
      />
    </main>
  );
}

export default About;
