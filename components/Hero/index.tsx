"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion"; // import motion
import PhosphorIcon from "../PhosphorIcon";

const Hero = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [showBtn, setShowBtn] = useState(false);

  useEffect(() => {
    const hero = document.getElementById("home");

    if (!hero) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const handleMouseEnter = () => setShowBtn(true);
    const handleMouseLeave = () => setShowBtn(false);

    hero.addEventListener("mousemove", handleMouseMove);
    hero.addEventListener("mouseenter", handleMouseEnter);
    hero.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      hero.removeEventListener("mouseenter", handleMouseEnter);
      hero.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <section
      id="home"
      className="dark:bg-gray-dark relative z-10 overflow-hidden bg-white pb-16 pt-[120px] md:pb-[120px] md:pt-[150px] xl:pb-[160px] xl:pt-[180px] 2xl:pb-[200px] 2xl:pt-[210px]"
    >
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto max-w-[800px] text-center">
              {/* Futuristic Glow Heading */}
              <motion.h1
                initial={{ y: 60, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight drop-shadow-[0_0_20px_rgba(74,108,247,0.8)] text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-400 to-purple-500 animate-pulse"
              >
                Pioneer The Future Of Patient Engagement
              </motion.h1>

              {/* Subtitle Glow */}
              <motion.p
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                className="dark:text-body-color-dark mb-12 text-base !leading-relaxed text-gray-600 sm:text-lg md:text-xl drop-shadow-[0_0_10px_rgba(74,108,247,0.6)]"
              >
                OmniDent AI turns your traffic into new patient <br /> appointments, without lifting a finger.
              </motion.p>

              {/* CTA Button */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, ease: "easeOut", delay: 0.4 }}
                className="flex flex-col items-center justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0"
              >
                <Link
                  href=""
                  className="inline-block rounded-lg bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out shadow-[0_0_25px_rgba(74,108,247,0.9)] hover:shadow-[0_0_35px_rgba(74,108,247,1)] hover:scale-105 transform transition-all"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </div>

      
      <div
        className={`pointer-events-none hidden  absolute z-50 lg:flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 shadow-[0_0_30px_rgba(74,108,247,0.9)] text-white ease-linear transition-all duration-300 ${
          showBtn ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          top: `${mousePos.y - 32}px`,
          left: `${mousePos.x - 32}px`,
        }}
      >
        <PhosphorIcon 
        iconName="Tooth" 
        color="#fff"
        className="h-10 w-10" />
      </div>

    <div className="absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100"> <svg width="450" height="556" viewBox="0 0 450 556" fill="none" xmlns="http://www.w3.org/2000/svg" > <circle cx="277" cy="63" r="225" fill="url(#paint0_linear_25:217)" /> <circle cx="17.9997" cy="182" r="18" fill="url(#paint1_radial_25:217)" /> <circle cx="76.9997" cy="288" r="34" fill="url(#paint2_radial_25:217)" /> <circle cx="325.486" cy="302.87" r="180" transform="rotate(-37.6852 325.486 302.87)" fill="url(#paint3_linear_25:217)" /> <circle opacity="0.8" cx="184.521" cy="315.521" r="132.862" transform="rotate(114.874 184.521 315.521)" stroke="url(#paint4_linear_25:217)" /> <circle opacity="0.8" cx="356" cy="290" r="179.5" transform="rotate(-30 356 290)" stroke="url(#paint5_linear_25:217)" /> <circle opacity="0.8" cx="191.659" cy="302.659" r="133.362" transform="rotate(133.319 191.659 302.659)" fill="url(#paint6_linear_25:217)" /> <defs> <linearGradient id="paint0_linear_25:217" x1="-54.5003" y1="-178" x2="222" y2="288" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" /> </linearGradient> <radialGradient id="paint1_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(17.9997 182) rotate(90) scale(18)" > <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" /> </radialGradient> <radialGradient id="paint2_radial_25:217" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(76.9997 288) rotate(90) scale(34)" > <stop offset="0.145833" stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0.08" /> </radialGradient> <linearGradient id="paint3_linear_25:217" x1="226.775" y1="-66.1548" x2="292.157" y2="351.421" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" /> </linearGradient> <linearGradient id="paint4_linear_25:217" x1="184.521" y1="182.159" x2="184.521" y2="448.882" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="white" stopOpacity="0" /> </linearGradient> <linearGradient id="paint5_linear_25:217" x1="356" y1="110" x2="356" y2="470" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="white" stopOpacity="0" /> </linearGradient> 
        <linearGradient id="paint6_linear_25:217" x1="118.524" y1="29.2497" x2="166.965" y2="338.63" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" /> </linearGradient> </defs> </svg> </div> <div className="absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100"> <svg width="364" height="201" viewBox="0 0 364 201" fill="none" xmlns="http://www.w3.org/2000/svg" > <path d="M5.88928 72.3303C33.6599 66.4798 101.397 64.9086 150.178 105.427C211.155 156.076 229.59 162.093 264.333 166.607C299.076 171.12 337.718 183.657 362.889 212.24" stroke="url(#paint0_linear_25:218)" /> <path d="M-22.1107 72.3303C5.65989 66.4798 73.3965 64.9086 122.178 105.427C183.155 156.076 201.59 162.093 236.333 166.607C271.076 171.12 309.718 183.657 334.889 212.24" stroke="url(#paint1_linear_25:218)" /> <path d="M-53.1107 72.3303C-25.3401 66.4798 42.3965 64.9086 91.1783 105.427C152.155 156.076 170.59 162.093 205.333 166.607C240.076 171.12 278.718 183.657 303.889 212.24" stroke="url(#paint2_linear_25:218)" /> <path d="M-98.1618 65.0889C-68.1416 60.0601 4.73364 60.4882 56.0734 102.431C120.248 154.86 139.905 161.419 177.137 166.956C214.37 172.493 255.575 186.165 281.856 215.481" stroke="url(#paint3_linear_25:218)" /> <circle opacity="0.8" cx="214.505" cy="60.5054" r="49.7205" transform="rotate(-13.421 214.505 60.5054)" stroke="url(#paint4_linear_25:218)" /> <circle cx="220" cy="63" r="43" fill="url(#paint5_radial_25:218)" /> <defs> <linearGradient id="paint0_linear_25:218" x1="184.389" y1="69.2405" x2="184.389" y2="212.24" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" /> </linearGradient> <linearGradient id="paint1_linear_25:218" x1="156.389" y1="69.2405" x2="156.389" y2="212.24" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" /> </linearGradient> <linearGradient id="paint2_linear_25:218" x1="125.389" y1="69.2405" x2="125.389" y2="212.24" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" /> </linearGradient> <linearGradient id="paint3_linear_25:218" x1="93.8507" y1="67.2674" x2="89.9278" y2="210.214" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" stopOpacity="0" /> <stop offset="1" stopColor="#4A6CF7" /> </linearGradient> <linearGradient id="paint4_linear_25:218" x1="214.505" y1="10.2849" x2="212.684" y2="99.5816" gradientUnits="userSpaceOnUse" > <stop stopColor="#4A6CF7" /> <stop offset="1" stopColor="#4A6CF7" stopOpacity="0" /> </linearGradient> <radialGradient id="paint5_radial_25:218" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(220 63) rotate(90) scale(43)" > <stop offset="0.145833" stopColor="white" stopOpacity="0" /> <stop offset="1" stopColor="white" stopOpacity="0.08" /> </radialGradient> </defs> </svg> </div>
    </section>
  );
};

export default Hero;
