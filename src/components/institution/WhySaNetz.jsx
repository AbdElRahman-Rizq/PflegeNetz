import React from 'react';
import doctor2Img from "../../../public/images/Frame_doctor.png";
import ellipse1Img from "../../../public/images/Frame_plus.png";
import ellipse2Svg from "../../../public/images/first-half_vector.png";
import vectorImg from '/assets/images/vector.png';

const WhySaNetz = () => {
  return (
    <section  style={
      {
        display: 'block',
        // marginLeft:'.5%',
        paddingTop:'2%',   
        // overflow: 'hidden',        
        width: '99%',   
        height: '91vh',     
        backgroundImage: `url(${ellipse2Svg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }
    }>
    <div className="flex flex-col md:flex-row items-center gap-8 justify-between px-10 overflow-hidden"
    
   >
      <div className="flex flex-col items-start w-full">
        <h1 className="text-5xl font-semibold text-custom-900">Why SA
          <span className="relative ml-2">
            netz?
            <img 
              src={vectorImg}
              alt=""
              className="absolute w-[5.6em] h-[8px]"
              style={{
                bottom: '0',
                right: '0',
                transform: 'rotate(-0.43deg)',
              }}
            />
          </span>
        </h1>
        <p className="mt-5 text-gray-600 xl:w-[33em] p-2">
          We understand the challenges of the German healthcare sector and provide solutions that truly make a difference.
        </p>
        <ul className="mt-5 text-gray-600 xl:w-[36em] pl-2 list-disc list-inside">
          <li className="mb-2 flex items-center">
            <img src={ellipse1Img} alt="Ellipse 1" className="xl:w-5 h-5 mr-2" />
            <span className='block xl:inline-block font-semibold text-base xl:text-xl mx-2'> Reliability:</span>  A partner you can rely on.
          </li>
          <li className="mb-2 flex items-center">
            <img src={ellipse1Img} alt="Ellipse 1" className="xl:w-5 h-5 mr-2" />
            <span className='block xl:inline-block font-semibold text-base xl:text-xl mx-2'> Efficiency: </span> Optimized processes for fast and sustainable placement.
          </li>
          <li className="mb-2 flex items-center">
            <img src={ellipse1Img} alt="Ellipse 1" className="xl:w-5 h-5 mr-2" />
            <span className='block xl:inline-block font-semibold text-base xl:text-xl mx-2'> Excellence: </span> Access to highly qualified professionals worldwide.
          </li>
          <li className="mb-2 flex items-center">
            <img src={ellipse1Img} alt="Ellipse 1" className="xl:w-5 h-5 mr-2" />
            <span className='block xl:inline-block font-semibold text-base xl:text-xl mx-2'> Experience: </span> Extensive industry knowledge and a global network.
          </li>
        </ul>       
      </div>
      <div className="relative pt-2 md:mt-0 pr-10 mr-4">
        <img src={doctor2Img} alt="Doctor" style={{zIndex: 100}} className="w-[25em] mt-5" />
        <img src={ellipse1Img} alt="Ellipse 1" style={{zIndex: 10}} className="absolute bottom-1 right-7 w-1/3" />
        <img src={ellipse2Svg} alt="Ellipse 2" style={{zIndex: 0}} className="absolute top-[-1.2em] left-1/3 transform -translate-x-1/2 w-1/4" />
      </div>
    </div>
    </section>
  );
}

export default WhySaNetz;
