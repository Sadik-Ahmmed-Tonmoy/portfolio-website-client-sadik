import React from 'react';
import Banner from '../Components/Banner/Banner';
import Marquee from "react-fast-marquee";
import { Bounce } from 'react-awesome-reveal';
import Typewriter from 'typewriter-effect';
import CardComponent from '../Components/CardComponent/CardComponent';
import aboutMeLottie from "../assets/141491-3d-shape-animation.json"
import allProjectsLottie from "../assets/130620-coding.json"
import { blueGrey, grey } from '@mui/material/colors';



const signature= "https://i.ibb.co/QYBYmsn/Sadik-Sign-removebg-preview.png"

const Home = () => {
  return (
    <>
      {/* <Banner /> */}
      <div className="md:grid grid-rows-5 grid-flow-col gap-4">
        <div className="row-span-6 md:flex items-center gap-4 col-span-3 border rounded-2xl shadow-md">
          <Bounce>
            <img className='w-48 rounded-tl-2xl rounded-br-2xl md:m-12 mx-auto' src="https://i.ibb.co/VgbS9F1/dog-puppy-on-garden-royalty-free-image-1586966191.jpg" alt="" />
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
        <div className="col-span-2 border rounded-2xl my-2 md:my-0 shadow-md">
          <Marquee pauseOnHover={true} className='py-2 overflow-hidden'>
            <p>| *As a web developer, I turn ideas into interactive realities, one line of code at a time* |</p>
            <p>| *Web development is not just about creating websites; it's about crafting digital experiences that leave a lasting impact* |</p>
            <p>| *Being a web developer means constantly embracing new technologies and adapting to ever-evolving digital landscapes | In the world of web development, I am the architect, engineer, and artist, building digital bridges between businesses and their audiences* |</p>
          </Marquee>
        </div>
        <div className="row-span-5 col-span-2 md:flex gap-4">
          <div className='md:w-6/12 '>
            <CardComponent lottie={aboutMeLottie} title="Credentials" details="More About Me" pathName="/about"/>
          </div>
          <div className='md:w-6/12'>
          <CardComponent lottie={allProjectsLottie} title="My Projects" details="Showcase" pathName="/projects"/>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;