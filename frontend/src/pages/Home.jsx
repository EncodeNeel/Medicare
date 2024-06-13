import React from "react";
import { motion } from "framer-motion";
import heroImg01 from "../assets/images/hero-img01.png";
import heroImg02 from "../assets/images/hero-img02.png";
import heroImg03 from "../assets/images/hero-img03.png";
import icon01 from "../assets/images/icon01.png";
import icon02 from "../assets/images/icon02.png";
import icon03 from "../assets/images/icon03.png";
import featureImg from "../assets/images/feature-img.png";
import faqImg from "../assets/images/faq-img.png";
import videoIcon from "../assets/images/video-icon.png";
import avatarIcon from "../assets/images/avatar-icon.png";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import About from "../components/About/About";
import ServiceList from "../components/Services/ServiceList";
import DoctorList from "../components/Doctors/DoctorList";
import FaqList from "../components/Faq/FaqList";
import Testimonial from "../components/Testimonal/Testimonial";

const Home = () => {
  return (
    <>
      {/* ======== hero section ========== */}

      <section className="hero__section pt-[60px] 2xl:h-[800px]">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col lg:flex-row gap-[90px] items-center justify-between"
          >
            {/* Hero content */}
            <div>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="lg:w-[570px]"
              >
                <h1 className="text-[36px] leading-[46px] text-headingColor font-[800] md:text-[60px] md:leading-[70px]">
                  We help patients live a healthy, longer life.
                </h1>
                <p className="text__para">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Accusamus itaque ea odit enim et quae atque.
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="btn"
                >
                  Request an Appointment
                </motion.button>
              </motion.div>

              {/* Hero counters */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row lg:items-center gap-5 lg:gap-[30px]"
              >
                <div>
                  <h2 className="text-[36px] loading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    30+
                  </h2>
                  <span className="w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Years of Experience</p>
                </div>

                <div>
                  <h2 className="text-[36px] loading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    15+
                  </h2>
                  <span className="w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Clinic Location</p>
                </div>

                <div>
                  <h2 className="text-[36px] loading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                    100%
                  </h2>
                  <span className="w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]"></span>
                  <p className="text__para">Patient Satisfaction</p>
                </div>
              </motion.div>
            </div>

            {/* Hero images */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="flex gap-[30px] justify-end"
            >
              <div>
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8, duration: 1 }}
                  className="w-full"
                  src={heroImg01}
                  alt="Hero Image 01"
                />
              </div>
              <div className="mt-[30px]">
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 1 }}
                  className="w-full mb-[30px]"
                  src={heroImg02}
                  alt="Hero Image 02"
                />
                <motion.img
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2, duration: 1 }}
                  className="w-full"
                  src={heroImg03}
                  alt="Hero Image 03"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>
      {/* ===== hero section end ====== */}

      <section className="py-20 bg-gray-100">
        <div className="container">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="text-center mb-12"
          >
            <motion.h2
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-4xl font-bold text-headingColor mb-4"
            >
              Providing the best medical services
            </motion.h2>
            <motion.p
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-lg text-gray-600 mb-8 mx-auto max-w-2xl"
            >
              World-class care for everyone. Our health system offers unmatched,
              expert health care.
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Service Block 1 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-8 px-6 bg-white shadow-lg rounded-lg"
            >
              <div className="flex justify-center mb-6">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={icon01}
                  alt="Icon 01"
                  className="h-24"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center"
              >
                <motion.h2
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl font-bold text-headingColor mb-2"
                >
                  Find a Doctor
                </motion.h2>
                <motion.p
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-base text-gray-700 mb-4"
                >
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </motion.p>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mx-auto w-10 h-10 flex items-center justify-center bg-primaryColor rounded-full"
                >
                  <Link to="doctors" className="text-white">
                    <BsArrowRight className="w-6 h-6" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Service Block 2 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-8 px-6 bg-white shadow-lg rounded-lg"
            >
              <div className="flex justify-center mb-6">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={icon02}
                  alt="Icon 02"
                  className="h-24"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center"
              >
                <motion.h2
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl font-bold text-headingColor mb-2"
                >
                  Find a Location
                </motion.h2>
                <motion.p
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-base text-gray-700 mb-4"
                >
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </motion.p>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mx-auto w-10 h-10 flex items-center justify-center bg-primaryColor rounded-full"
                >
                  <Link to="locations" className="text-white">
                    <BsArrowRight className="w-6 h-6" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>

            {/* Service Block 3 */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="py-8 px-6 bg-white shadow-lg rounded-lg"
            >
              <div className="flex justify-center mb-6">
                <motion.img
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5 }}
                  src={icon03}
                  alt="Icon 03"
                  className="h-24"
                />
              </div>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.8 }}
                className="text-center"
              >
                <motion.h2
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                  className="text-xl font-bold text-headingColor mb-2"
                >
                  Book Appointment
                </motion.h2>
                <motion.p
                  initial={{ y: 20 }}
                  animate={{ y: 0 }}
                  transition={{ delay: 0.5, duration: 0.8 }}
                  className="text-base text-gray-700 mb-4"
                >
                  World-class care for everyone. Our health system offers
                  unmatched, expert health care. From the lab to the clinic.
                </motion.p>

                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                  className="mx-auto w-10 h-10 flex items-center justify-center bg-primaryColor rounded-full"
                >
                  <Link to="appointments" className="text-white">
                    <BsArrowRight className="w-6 h-6" />
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>

        <About />
      </section>

      {/* =========== services section  =========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our medical services</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our Health System offers unmatched,
              expert health care.
            </p>
          </div>

          <ServiceList />
        </div>
      </section>

      {/* =========== services section end  =========== */}

      {/* ========== feature section ========= */}
      <section>
        <div className="container">
          <div className="flex items-center justify-between flex-col lg:flex-row">
            {/* ======== feature content ======= */}
            <div className="xl:w-[670px]">
              <h2 className="heading">
                Get virtual treatment <br />
                anytime.
              </h2>
              <ul className="pl-4">
                <li className="text__para">
                  1. Schedule the appointment directly.
                </li>
                <li className="text__para">
                  2. Search for your physician here, and contact their office.
                </li>
                <li className="text__para">
                  3. View our physicians who are accepting new patients, use the
                  online scheduling tool to select an appointment time.
                </li>
              </ul>
              <Link to="/">
                <button className="btn">Learn More</button>
              </Link>
            </div>

            {/* ========== feature img =========== */}
            <div className="relative z-10 xl:w-[770px] flex justify-end mt-[50px] lg:mt-0">
              <img src={featureImg} className="w-3/4" alt="" />

              <div className="w-[150px] lg:w-[248px] bg-white absolute bottom-[50px] left-0 md:bottom-[100px] md:left-5 z-20 p-2 pb-3 lg:pt-4 lg:px-4 lg:pb-[26px] rounded-[10px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-[6px] lg:gap-3">
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-headingColor font-[600]">
                      Tue, 24
                    </p>
                    <p className="text-[10px] leading-[10px] lg:text-[14px] lg:leading-5 text-textColor font-[400]">
                      10:00AM
                    </p>
                  </div>
                  <span className="w-5 h-5 lg:w-[34px] lg:h-[34px] flex items-center justify-center bg-yellowColor rounded py-1 px-[6px] lg:py-3 lg:px-[9px]">
                    <img src={videoIcon} alt="" />
                  </span>
                </div>

                <div className="w-[65px] lg:w-[96px] bg-[#CCF0F3] py-1 px-2 lg:py-[6px] lg:px-[10px] text-[8px] leading-[8px] lg:text-[12px] lg:leading-4 text-irisBlueColor font-[500] mt-2 lg:mt-4 rounded-full">
                  Consultation
                </div>

                <div className="flex items-center gap-[6px] lg:gap-[10px] mt-2 lg:mt-[18px]">
                  <img src={avatarIcon} alt="" />
                  <h4 className="text-[10px] leading-3 lg:text-[16px] lg:leading-[22px] font-[700] text-headingColor">
                    Wayne Collins
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ========== feature section end ========= */}
      {/* ========== Our great doctors =========== */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">Our great doctors</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our Health System offers unmatched,
              expert health care.
            </p>
          </div>

          <DoctorList />
        </div>
      </section>

      {/* ========== Our great doctors =========== */}

      {/* ========== faq section ========== */}

      <section>
        <div className="container">
          <div className="flex justify-between gap-[50px] lg:gap-0">
            <div className="w-1/2 hidden md:block">
              <img src={faqImg} alt="" />
            </div>

            <div className="w-full md:w-1/2">
              <h2 className="heading">
                Most questions by our beloved patients
              </h2>
              <FaqList />
            </div>
          </div>
        </div>
      </section>
      {/* ========== faq section end ========== */}

      {/* ========== testimonial ============= */}
      <section>
        <div className="container">
          <div className="xl:w-[470px] mx-auto">
            <h2 className="heading text-center">What our patient say</h2>
            <p className="text__para text-center">
              World-class care for everyone. Our Health System offers unmatched,
              expert health care.
            </p>
          </div>

          <Testimonial />
        </div>
      </section>
      {/* ========== testimonial end ============= */}
    </>
  );
};

export default Home;
