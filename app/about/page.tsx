"use client";

import ScrollAnimation from "@/component/animatedCard";
import "./about.scss";
import { Icon } from "@iconify/react/dist/iconify.js";
import Link from "next/link";

export default function about() {
  return (
    <>
      <div className="preloader"></div>
      <div className="container aboutContainer">
        <div className="leftDiv">
          <div className="personalDiv">
            <ScrollAnimation>
              <div className="container">
                <div className="imageDiv"></div>
                <h2 className="name">Ashim Raj Shrestha</h2>
                <p className="email">ashim.xtha2000@gmail.com</p>
                <div className="socialLinks">
                  <Link className="icons" href="">
                    <Icon icon="et:linkedin" height={50} width={50} />
                  </Link>
                  <Link className="icons" href="">
                    <Icon
                      icon="teenyicons:git-outline"
                      width="50"
                      height="50"
                    />
                  </Link>
                  <Link className="icons" href="">
                    <Icon icon="et:linkedin" height={50} width={50} />
                  </Link>
                </div>
                <div className="contactMe">Contact Me</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="rightDiv">
          <article className="aboutMe">
            <h2 className="title">ABOUT ME</h2>
            <p className="desc">
              hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am
              ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i
              am ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim
              hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am
              ashim
            </p>
          </article>
          <article className="exp">
            <h2 className="title">EXPERIENCE</h2>
            <div className="content">
              <ScrollAnimation class="ashim">
                <div className="group">
                  <span className="date">2007-2017</span>
                  <span className="inst">Jilla</span>
                  <p className="desc">description</p>
                </div>
              </ScrollAnimation>

              <div className="group">
                <span className="date">2007-2017</span>
                <span className="inst">Jilla</span>
                <p className="desc">description</p>
              </div>
            </div>
          </article>
          <article className="exp">
            <h2 className="title">EDUCATION</h2>
            <div className="content">
              <div className="group">
                <span className="date">2007-2017</span>
                <span className="inst">Jilla</span>
                <p className="desc">description</p>
              </div>
            </div>
          </article>
          <article className="skills"></article>
        </div>
      </div>
    </>
  );
}
