'use client';

import ScrollAnimation from '@/component/animatedCard';
import './about.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';

export default function about() {
  const experiences: any[] = [
    {
      date: 'February 2022 - May 2022',
      post: 'Software Developer Intern',
      company: 'Asterdio',
      description: 'Description',
    },
    {
      date: 'May 2022 - June 2023',
      post: 'Software Developer (Front-End)',
      company: 'Asterdio',
      description: 'Description',
    },
    {
      date: 'July 2023 - December 2023',
      post: 'Software Developer (Front-End)',
      company: 'Freelance',
      description: 'Description',
    },
    {
      date: 'Febuary 2024 - Currently',
      post: 'Software Developer (Full Stack)',
      company: 'Kodiary Technologies',
      description: 'Description',
    },
  ];
  const education: any[] = [
    {
      date: '2019 - 2022',
      post: 'Bachelor in Computer Science and Engineering',
      company: 'Sree Vidyanikehan Enginnering College(JNTU Anantapur)',
      description: 'Description',
    },
    {
      date: '2016 - 2018',
      post: ' +2 Science',
      company: 'D.A.V',
      description: 'Description',
    },
  ];
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
                    <Icon icon="teenyicons:git-outline" width="50" height="50" />
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
        <div className="rightDiv text-[#fff]">
          <article className="aboutMe">
            <h2 className="text-[18px] font-semibold">ABOUT ME</h2>
            <p className="desc">
              hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi
              i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i
              am ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am ashim hi i am
              ashim
            </p>
          </article>
          <article className="exp">
            <h2 className="text-[18px] font-semibold">EXPERIENCE</h2>
            <div className="content">
              {experiences.map((exp: any, index: number) => (
                // <div></div>
                <ScrollAnimation
                  key={index}
                  class="relative w-[100%] bg-[#0f0f0f] opacity-[0] ease duration-1250 scale[0.6]"
                >
                  <div className="group">
                    <span className="text-[#BCBCBC] text-[16px] opacity-60">{exp?.date}</span>
                    <span className="text-[#5B78F6] text-[18px]">{exp.post}</span>
                    <span className="text-[#BCBCBC] text-[14px] opacity-60 font-normal">
                      {exp?.company}
                    </span>
                    {/* <p className="text-[16px]"> {exp?.description}</p> */}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </article>
          <article className="exp">
            <h2 className="text-[18px] font-semibold">Education</h2>
            <div className="content">
              {education.map((edu: any, index: number) => (
                <ScrollAnimation
                  key={index}
                  class="relative w-[100%] bg-[#0f0f0f] opacity-[0] ease duration-1250 scale[0.6]"
                >
                  <div className="group">
                    <span className="text-[#BCBCBC] text-[16px] opacity-60">{edu?.date}</span>
                    <span className="text-[#5B78F6] text-[18px]">{edu.post}</span>
                    <span className="text-[#BCBCBC] text-[14px] opacity-60 font-normal">
                      {edu?.company}
                    </span>
                    {/* <p className="text-[16px]"> {edu?.description}</p> */}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </article>
          <article className="skills">
            <h2 className="text-[18px] font-semibold mb-[19px]">Skills</h2>
            <div className='flex flex-wrap'>
              <ScrollAnimation class="relative w-[100%] bg-[#0f0f0f] opacity-[0] ease duration-1250 scale[0.6] w-[50%]">
                <div className="flex flex-col gap-2">
                  <span className="text-[#BCBCBC] text-[14px] opacity-60 font-normal">90%</span>
                  <span className="text-[#FFFFFF] font-normal text-[18px]">Java Script</span>
                  {/* <p className="text-[16px]"> {edu?.description}</p> */}
                </div>
              </ScrollAnimation>
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
