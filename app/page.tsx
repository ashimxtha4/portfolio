import Image from "next/image";
import "./page.scss";
import ScrollAnimation from "@/component/animatedCard";

export default function Home() {
  return (
    <div className="container">
      {/* <div className="card"></div> */}
      <section className="topSection">
        <article className="first">
          <ScrollAnimation>
            <div className="intro">
              <div className="imageDiv"></div>
              <div className="textDiv">
                <span className="job">Web Developer</span>
                <span className="name">Ashim Raj Shrestha</span>
                <span className="desc"></span>
              </div>
            </div>
          </ScrollAnimation>
        </article>
        <article className="secound">
          <ScrollAnimation>
            <div className="marquee">
              {/* <marquee  direction="left">ashim</marquee> */}
            </div>
          </ScrollAnimation>

          <div className="flex2">
            <ScrollAnimation>
              <div className="subCard"></div>
            </ScrollAnimation>
            <ScrollAnimation>
              <div className="subCard"></div>
            </ScrollAnimation>
          </div>
        </article>
      </section>
      <section className="midSection">
        <article className="third">
          <ScrollAnimation>
            <div className="cardContainer"></div>
          </ScrollAnimation>
        </article>
        <article className="fourth">
          <ScrollAnimation>
            <div className="cardContainer"></div>
          </ScrollAnimation>
        </article>
        <article className="fifth">
          <ScrollAnimation>
            <div className="cardContainer"></div>
          </ScrollAnimation>
        </article>
      </section>
      {/* <section className="bottomSection">
        <article className="sixth"></article>
        <article className="seventh"></article>
      </section> */}
    </div>
  );
}
