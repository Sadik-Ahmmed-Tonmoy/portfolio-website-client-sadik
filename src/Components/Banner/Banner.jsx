import React from 'react';
import Typewriter from 'typewriter-effect';
import Lottie from "lottie-react";
import DeveloperLottie from "../../assets/99312-developer-skills.json"
import { Bounce } from "react-awesome-reveal";

const Banner = () => {
  return (
    <div className='md:flex md:mt-5 border'>
      <div className='md:w-6/12 flex items-center justify-center my-4'>
        <Bounce>
          <div className='flex-col justify-center'>
            <p className=' h-full text-2xl'>Hi, I am  </p>
            <span className='font-semibold text-4xl'>Sadik Ahmmed</span>
              <span className='ms-2 font-bold '>
                <Typewriter
                  options={{
                    strings: ['WEB DEVELOPER', 'FULL STACK DEVELOPER', 'MERN DEVELOPER', 'REACT DEVELOPER'],
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
      <div className='md:w-6/12'>
        <Lottie className='md:w-96 h-56 md:h-full mx-auto' animationData={DeveloperLottie} loop={true} />
      </div>
    </div>
  );
};

export default Banner;