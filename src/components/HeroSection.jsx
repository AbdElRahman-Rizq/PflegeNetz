import React from "react";
import { motion } from "framer-motion";
import {
  FaTooth,
  FaHeartbeat,
  FaAmbulance,
  FaUserMd,
  FaLinkedin,
} from "react-icons/fa";
import vectorImg from "/assets/images/vector.png";
import { useTranslation } from 'react-i18next';

const HeroSection = () => {
  const { t } = useTranslation('home');
  return (
    <section className=" bg-white relative overflow-hidden mb-10 md:mb-0 ">
      <div className="container mx-auto px-6 flex flex-col-reverse md:flex-row items-center justify-between ">
        <div className="flex flex-col justify-start">
          <div>
            <motion.div
              // initial={{ opacity: 0, y: 50 }}
              // animate={{ opacity: 1, y: 0 }}
              // transition={{ duration: 0.8 }}
              className="md:w-1/2 w-full text-center md:text-left"
            >
              <h1 className="text-3xl md:text-6xl font-bold text-gray-900 leading-tight">
                {t('hero.Ftitle')}
                <br />
                <span className="relative">
                  {t('hero.title')}
                  <img
                    src={vectorImg}
                    alt=""
                    className="absolute w-[214.43px] z-0 h-[10.31px] left-1/2 transform -translate-x-1/2 rotate-[-0.43deg] top-[35px] md:top-[60px]"
                  />
                </span>
              </h1>
              <div className="  md:w-[600px] w-[350px]  ">
                <p className="text-gray-600 mt-4 text-lg w-full">
                  {t('hero.subtitle')}
                </p>
              </div>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="mt-6 bg-lime-500 text-white px-6 py-3 rounded-lg shadow-md hover:bg-lime-600 focus:outline-none"
              >
                {t('hero.cta')}
              </motion.button>
            </motion.div>
          </div>
          <div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 3, delay: 0.6 }}
              className="mt-10 hidden md:flex items-center space-x-4"
            >
              <div className="container  mx-auto flex flex-col-reverse md:flex-row items-center justify-between">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white px-6 py-3 rounded-lg shadow-md hover:shadow-xl focus:outline-none"
                >
                  <div className="w-x-sm bg-white rounded-lg flex flex-col transition-shadow duration-300">
                    <div className="w-full h-1/2 flex justify-start">
                      <img
                        src="/images/placeholderimage.jpeg"
                        alt="User"
                        className="w-16 h-16 rounded-full mr-4"
                      />
                      <div>
                        <h4 className="font-semibold text-gray-800 text-nowrap text-left ">
                          Thomas Daniel
                        </h4>
                        <p className="text-sm text-gray-500 text-left">HR</p>
                      </div>
                      <div className="flex justify-end w-1/2">
                        {" "}
                        <FaLinkedin
                          size={32}
                          className="text-blue-700 hover:text-blue-500"
                        />
                      </div>
                    </div>

                    <div>
                      <p className="text-sm text-gray-600 text-left pt-2">
                        Top Quality treatment done by field experts, Highly{" "}
                        <br /> Recommended for everyone.
                      </p>
                    </div>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="md:flex hidden w-full h-full justify-end">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="md:w-full relative flex justify-center items-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
              }}
              className="absolute w-[36rem] h-[36rem] border-dashed border-8 border-blue-300 rounded-full flex justify-center items-center"
            >
              <div className="absolute top-0 left-1/4 text-white">
                <div className="w-12 h-12 rounded-full bg-lime-500 flex justify-center items-center">
                  <FaHeartbeat size={32} />
                </div>
              </div>
              <div className="absolute top-0 right-1/4 text-white">
                <div className="w-12 h-12 rounded-full bg-lime-500 flex justify-center items-center">
                  <FaTooth size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 left-1/4 text-white">
                <div className="w-12 h-12 rounded-full bg-lime-500 flex justify-center items-center">
                  <FaAmbulance size={32} />
                </div>
              </div>
              <div className="absolute bottom-0 right-1/4 text-white">
                <div className="w-12 h-12 rounded-full bg-lime-500 flex justify-center items-center">
                  <FaUserMd size={32} />
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ rotate: -360 }}
              transition={{
                repeat: Infinity,
                duration: 100,
                ease: "linear",
              }}
              className="absolute w-[28rem] h-[28rem] border-dashed border-8 border-green-300 rounded-full"
            ></motion.div>

            <img
              src="/images/surgeon.png"
              alt="Hero"
              className="w-[30rem] h-auto object-contain relative"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
