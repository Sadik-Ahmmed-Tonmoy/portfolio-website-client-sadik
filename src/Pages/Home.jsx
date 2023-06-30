import React from 'react';
import Banner from '../Components/Banner/Banner';
import Marquee from "react-fast-marquee";
import { Bounce } from 'react-awesome-reveal';
import Typewriter from 'typewriter-effect';
import CardComponent from '../Components/CardComponent/CardComponent';
import aboutMeLottie from "../assets/141491-3d-shape-animation.json"
import allProjectsLottie from "../assets/130620-coding.json"
import skillsLottie from "../assets/40851-pentagram-skills-of-deth.json"
import { AwesomeButtonProgress } from 'react-awesome-button';
import 'react-awesome-button/dist/styles.css';
import { Slide } from "react-awesome-reveal";
import AOS from 'aos';
import 'aos/dist/aos.css';
AOS.init()

import DP from "../assets/Images/dp.jpg"
import resume from "../assets/Resume/Sadik Ahmmed Tonmoy_Resume.pdf"

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <div className="md:grid grid-rows-5 grid-flow-col gap-4">
        <div data-aos="zoom-in" data-aos-duration="5000" className="row-span-6 gap-4 col-span-3 border-2 rounded-2xl shadow-md">
          <div className='md:flex items-center md:my-10'>
            <Bounce>
              <img className='w-48 rounded-tl-2xl rounded-br-2xl md:mx-12 mx-auto' src={DP} alt="" />
              <div className='flex-col justify-center items-center md:me-12 mx-auto'>
                <p className=' h-full text-2xl'>Hi, I am  </p>
                <span className='font-semibold text-4xl'>Sadik Ahmmed Tonmoy</span>
                <span className='ms-2 font-semibold '>
                  <Typewriter
                    options={{
                      strings: ['(WEB DEVELOPER)', '(FULL STACK DEVELOPER)', '(MERN DEVELOPER)', '(REACT DEVELOPER)'],
                      autoStart: true,
                      pauseFor: 1400,
                      loop: true,
                      delay: 85,
                    }}
                  />
                </span>
              </div>
            </Bounce>
          </div>
          <div className='mb-4'>
            <a href={resume} download>
              <AwesomeButtonProgress type="primary" onPress={async (element, next) => {
                // await for something then call
                next();
              }}>Download Resume
              </AwesomeButtonProgress>
            </a>
          </div>
        </div>
        <Slide direction="right" duration="1500">
          <div className="col-span-1 border-2 rounded-2xl my-2 md:my-0 shadow-md">
            <Marquee pauseOnHover={true} className='py-3 overflow-hidden'>
              <p>| *As a <span className=''>web developer</span>, I turn ideas into interactive realities, one line of code at a time* |</p>
              <p>| *Web development is not just about creating websites; it's about crafting digital experiences that leave a lasting impact* |</p>
              <p>| *Being a web developer means constantly embracing new technologies and adapting to ever-evolving digital landscapes | In the world of web development, I am the architect, engineer, and artist, building digital bridges between businesses and their audiences* |</p>
            </Marquee>
          </div>
        </Slide>
        <div className="row-span-5 col-span-1 md:flex gap-4">
          <div data-aos="zoom-in" className='md:w-6/12 '>
            <CardComponent lottie={aboutMeLottie} title="Credentials" details="More About Me" pathName="/about" />
          </div>
          <div data-aos="zoom-in" className='md:w-6/12'>
            <CardComponent lottie={allProjectsLottie} title="My Projects" details="Showcase" pathName="/projects" />
          </div>
        </div>
      </div>
      {/*  2nd row */}
      <div className='grid grid-cols-4 gap-4 grid-rows-3'>
        <div data-aos="zoom-in" className='row-span-2'>
          <CardComponent lottie={skillsLottie} title="Skills" details="My Expertise" pathName="/skills"/>
        </div>
        <div className=' border col-span-2'>new</div>
        <div data-aos="zoom-in" className='row-span-2'>
          <CardComponent lottie={skillsLottie} title="Blogs" details="My Digital diary" pathName="/blogs"/>
        </div>
        <div className=' border'>new</div>
        <div className=' border'>new</div>
        <div className=' border col-span-2'>new</div>
        <div className=' border'>new</div>
        <div className=' border'>new</div>
        <div className=' border'>new</div>
        <div className=' border'>new</div>
      </div>
    </>
  );
};

export default Home;