"use client";
import Image from "next/image";
import "./page.scss";
import ScrollAnimation from "@/component/animatedCard";
import logo from "@/public/ASHIM-remove.png";
import decor from "@/public/decor.svg";
import { Icon } from "@iconify/react";

import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="preloader"></div>
      <div className="container">
        {/* <div className="card"></div> */}
        <section className="topSection">
          <article className="first">
            <ScrollAnimation>
              <div className="intro">
                <div className="imageDiv"></div>
                <div className="info">
                  <h4 className="job">Web Developer</h4>
                  <span className="name">Ashim Raj Shrestha</span>
                  <span className="desc">
                    I am Web Developer for all your web problems.
                  </span>
                </div>
                <div className="bottomImage">
                  <Image className="decor" src={decor} alt="decor" />
                </div>
              </div>
            </ScrollAnimation>
          </article>
          <article className="secound">
            <ScrollAnimation>
              <div className="marquee">Build your web application with me</div>
            </ScrollAnimation>

            <div className="flex2">
              <ScrollAnimation>
                <div className="subCard">
                  <div className="imageDiv">
                    <Image className="logo" src={logo} alt="logo" />
                  </div>
                  <div className="textDiv">
                    <div className="texts">
                      <span className="subHead">MORE ABOUT ME</span>
                      <span className="title">Credentials</span>
                    </div>
                    <div className="bottomImage">
                      <Image className="decor" src={decor} alt="decor" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
              <ScrollAnimation>
                <div className="subCard">
                  <div className="imageDiv">
                    <Icon
                      icon="mdi:application-braces-outline"
                      height="72"
                      color="#FFF"
                    />
                  </div>
                  <div className="textDiv">
                    <div className="texts">
                      <span className="subHead">SHOW CASE</span>
                      <span className="title">Projects</span>
                    </div>
                    <div className="bottomImage">
                      <Image className="decor" src={decor} alt="decor" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            </div>
          </article>
        </section>
        <section className="midSection">
          <article className="third">
            <ScrollAnimation>
              <div className="cardContainer subCard">
                <div className="imageDiv">
                  <Icon icon="tabler:brand-blogger" height="77" color="#FFF" />
                </div>
                <div className="textDiv">
                  <div className="texts">
                    <span className="subHead">BLOGS</span>
                    <span className="title">Blogs</span>
                  </div>
                  <div className="bottomImage">
                    <Image className="decor" src={decor} alt="decor" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </article>
          <article className="fourth">
            <ScrollAnimation>
              <div className="cardContainer detailsDiv">
                <div className="details">
                  <span className="bigText">07</span>
                  <span className="smallText">Small text</span>
                </div>
                <div className="details">
                  <span className="bigText">07</span>
                  <span className="smallText">Small text</span>
                </div>
                <div className="details">
                  <span className="bigText">07</span>
                  <span className="smallText">Small text</span>
                </div>
              </div>
            </ScrollAnimation>
          </article>
          <article className="fifth">
            <ScrollAnimation>
              <div className="cardContainer profile">
                <div className="logos">
                  <Link className="icons" href={""}>
                    <Icon icon="et:linkedin" width="60" height="60" />
                  </Link>
                  <Link className="icons" href={""}>
                    <Icon
                      icon="teenyicons:git-outline"
                      width="60"
                      height="60"
                    />
                  </Link>
                </div>
                <div className="textDiv">
                  <div className="texts">
                    <span className="subHead">MORE ABOUT ME</span>
                    <span className="title">Credentials</span>
                  </div>
                  <div className="bottomImage">
                    <Image className="decor" src={decor} alt="decor" />
                  </div>
                </div>
              </div>
            </ScrollAnimation>
          </article>
        </section>
        {/* <section className="bottomSection">
        <article className="sixth"></article>
        <article className="seventh"></article>
      </section> */}
      </div>
    </>
  );
}
