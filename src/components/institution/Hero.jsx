import React from 'react';
import doctorImg from "../../../public/images/Doctor.png";
import mouseImg from "../../../public/images/mouse.svg";
import aboveDoctorImg from "../../../public/images/above_doctor.png";
import leftDoctorImg from "../../../public/images/left_doctor.png";
import vectorImg from '/assets/images/vector.png'


const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-8 justify-between bg-white px-10 overflow-hidden">
<div className="flex flex-col items-center xl:items-start">
  <h1 className="text-4xl xl:text-6xl font-semibold">Your Access
    <br/>
  <span className="relative ml-1">
   
   To Global Talent
              <img 
                src={vectorImg}
                alt=""
                className="absolute w-[5em] h-[8px]"
                style={{
                  bottom: '0',
                  right: '0',
                  transform: 'rotate(-0.43deg)',
                }}
              />
            </span>

  </h1>
  <p className="mt-5 text-gray-600 pr-0 xl:pr-56 pl-4">
    Discover how SA netz helps you recruit highly qualified healthcare professionals efficiently and sustainably
  </p>
  <button className="mt-6 ml-4 bg-primary-950 text-white py-2 px-5 rounded">Get Started Now</button>
</div>
<div className="relative pt-2 md:mt-0 pr-10 mr-4">
  <img src={doctorImg} alt="Doctor" style={{zIndex: 100}} className="w-[25em] mt-5" />
  <img src={mouseImg} alt="Mouse" style={{zIndex: 10}} className="absolute bottom-1 right-7 w-1/3" />
  <img src={aboveDoctorImg} alt="Above Doctor" style={{zIndex: 0}} className="absolute top-[-1.2em] left-1/3 transform -translate-x-1/2 w-1/4" />
  <img src={leftDoctorImg} alt="Left Doctor" style={{zIndex: 0}} className="absolute bottom-1/2 right-0 w-20" />
</div>
</div>
  );
}

export default Hero;