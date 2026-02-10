'use client';

import ScrollAnimation from '@/component/animatedCard';
import Image from 'next/image';
import './about.scss';
import { Icon } from '@iconify/react/dist/iconify.js';
import Link from 'next/link';
import profile from '@/public/Profile.jpeg';


export default function about() {
  const experiences: any[] = [
    {
      date: 'February 2022 - May 2022',
      post: 'Software Developer Intern',
      company: 'Asterdio',
      description:
        'During this time I learnd many thing mostly the technical part. As I had really nice mentor I was able to learn many thing about how to implement and use React to build web applications.',
    },
    {
      date: 'May 2022 - June 2023',
      post: 'Software Developer (Front-End)',
      company: 'Asterdio',
      description:
        'Besides learning new frameworks and technical advancement I experienced how to communicate with the team how to work in agile environment and all about scrums. During this tenure I worked in many projects such as(Basobaas,Agrobase Nepal,Auto24).',
    },
    {
      date: 'July 2023 - December 2023',
      post: 'Software Developer (Front-End)',
      company: 'Freelance',
      description:
        'The major achivement during this tenure is the opportunity to work with a foreign team and communicate directly with the client and other members who are all working remotely from different part of the world. I was souly responsible for handeling the frontend that was build using Next.js. The application was used to detect and survey for Ulcer and record all the dignostics.',
    },
    {
      date: 'Febuary 2024 - Currently',
      post: 'Software Developer (Full Stack)',
      company: 'Kodiary Technologies',
      description:
        'During this tenure I gained vast and diversified experienced. From leading a meeting with client and otehr members, souly handeling a project , my first full stack experience , working in a huge SAAS application, handeling multiple projects at a time. I was part of many projects including(Jymappi bulk sms,Cronlink,Justnotarize,Sideck)',
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
  const skills: any[] = [
    {
      title: 'Java Script',
      percent: '95%',
    },
    {
      title: 'React',
      percent: '90%',
    },
    {
      title: 'Vue',
      percent: '85%',
    },
    {
      title: 'Next',
      percent: '90%',
    },
    {
      title: 'Nuxt',
      percent: '80%',
    },
    {
      title: 'Express',
      percent: '60%',
    },
    {
      title: 'Git',
      percent: '80%',
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
                <div className="imageDiv">
                  <Image
                    src={profile}
                    alt="Ashim Raj Shrestha"
                    width={350}
                    height={350}
                    className="profileImage"
                    priority
                  />
                </div>
                <h2 className="name text-[26px] font-semibold text-[#FFFFFF]">Ashim Raj Shrestha</h2>
                <p className="email">ashim.xtha2000@gmail.com</p>
                <div className="socialLinks">
                  <Link className="icons" href="https://www.linkedin.com/in/ashim-shrestha-8a6a461a4/" target='blank'>
                    <Icon icon="et:linkedin" height={50} width={50} />
                  </Link>
                  <Link className="icons" href="https://github.com/ashimxtha4" target='blank'>
                    <Icon icon="teenyicons:git-outline" width="50" height="50" />
                  </Link>
                  <Link className="icons" href="https://www.instagram.com/ashim_xtha/" target='blank'>
                    <Icon icon="teenyicons:instagram-outline" height={50} width={50} />
                  </Link>
                </div>
                <div className="contactMe">Contact Me</div>
              </div>
            </ScrollAnimation>
          </div>
        </div>
        <div className="rightDiv text-[#fff]">
          <article className="aboutMe">
            <h2 className="text-[20px] font-semibold">ABOUT ME</h2>
            <p className="desc text-[16px] opacity-80">
              I am a passionate web developer with a knack for creating user-friendly, visually
              appealing, and responsive websites. With expertise in HTML, CSS, JavaScript, and
              frameworks and libaries like (React,Vue,Next,Nuxt,Express), I thrive on transforming
              creative ideas into functional and dynamic interfaces. My goal is to deliver seamless
              user experiences while keeping up with the latest trends and best practices in web
              development.
            </p>
          </article>
          <article className="exp">
            <h2 className="text-[20px] font-semibold">EXPERIENCE</h2>
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
                    <p className="text-[16px] opacity-80"> {exp?.description}</p>
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </article>
          <article className="exp">
            <h2 className="text-[20px] font-semibold">Education</h2>
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
            <h2 className="text-[20px] font-semibold mb-[19px]">Skills</h2>
            <div className="flex gap-y-4 flex-wrap">
              {skills.map((skill, index) => (
                <ScrollAnimation
                  key={index}
                  class="relative w-[50%] bg-[#0f0f0f] opacity-[0] ease duration-1250 scale[0.6] w-[50%]"
                >
                  <div className="flex flex-col">
                    {/* <span className="text-[#BCBCBC] text-[14px] opacity-60 font-normal mb-2">
                    90%
                  </span> */}
                    <span className="text-[#FFFFFF] font-normal text-[18px] mb-1">
                      {skill.title}
                    </span>
                    <span className="text-[#BCBCBC] text-[14px] opacity-60 font-normal">
                      {skill.percent}
                    </span>
                    {/* <p className="text-[16px]"> {edu?.description}</p> */}
                  </div>
                </ScrollAnimation>
              ))}
            </div>
          </article>
        </div>
      </div>
    </>
  );
}
