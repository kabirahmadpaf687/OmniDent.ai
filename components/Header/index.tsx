"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";

import menuData from "./menuData";
import PhosphorIcon from "../PhosphorIcon";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const navbarToggleHandler = () => setNavbarOpen(!navbarOpen);
  const [selectedMenu, setSelectedMenu] = useState<number | null>(null);

  const [sticky, setSticky] = useState(false);
  useEffect(() => {
    const handleStickyNavbar = () => {
      setSticky(window.scrollY >= 80);
    };
    window.addEventListener("scroll", handleStickyNavbar);
    return () => window.removeEventListener("scroll", handleStickyNavbar);
  }, []);

  

  const containerVariants = {
  hidden: { opacity: 0, x: 100 }, // start off to the right
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2, // stagger each item
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

  return (
    <>
      <header
        className={`header left-0 top-0 z-40 flex w-full items-center ${
          sticky
            ? "bg-tansparent  fixed z-[9999]  !bg-opacity-80   transition"
            : "absolute bg-transparent"
        }`}
      >
        <div className="container">
          <div className="relative -mx-4 flex items-center justify-between">
            <div className="w-60 max-w-full px-4 xl:mr-12">
              <Link
                href="/"
                className={`header-logo block w-full ${
                  sticky ? " hidden py-5 lg:py-2" : "py-8"
                } `}
              >
                <Image
                  src="/images/logo/logo.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="w-full dark:hidden"
                />
                <Image
                  src="/images/logo/logoWhite.png"
                  alt="logo"
                  width={140}
                  height={30}
                  className="hidden w-full dark:block"
                />
              </Link>
            </div>

            <div className="hidden lg:flex fixed right-6 top-3  flex-col gap-4 z-[99999]">
              <ThemeToggler />
              {menuData.map((menuItem, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  initial="hidden"
                  animate="visible"
                  variants={containerVariants}
                >
                  <Link
                    href={menuItem.path || "#"}
                    scroll={true}
                    className={`group flex items-center justify-center gap-2 rounded-md bg-blue-600/80 dark:bg-gray-800 dark:hover:bg-white shadow-md transition px-3 py-3 hover:bg-primary`}
                    onMouseEnter={() => setSelectedMenu(menuItem.id)}
                    onMouseLeave={() => setSelectedMenu(null)}
                  >
                    <PhosphorIcon
                      iconName={menuItem.icon || "Question"}
                      size={22}
                      color={selectedMenu === menuItem.id ? "#1D4355" : "#fff"}
              weight="bold"
            />
            {/* Tooltip */}
            <span className="fixed right-20 ease-linear duration-500 opacity-0 group-hover:opacity-100 dark:bg-gray-800 bg-white dark:text-white text-black text-sm rounded-bl-md rounded-tl-md px-3 py-3 transition whitespace-nowrap">
              {menuItem.title}
            </span>
          </Link>
        </motion.div>
      ))}
            </div>

            {/* MOBILE NAVBAR (unchanged) */}
            <div className="flex w-full items-center justify-between px-4 lg:hidden">
             {navbarOpen && (
               <ThemeToggler  />
             )}
              <button
                onClick={navbarToggleHandler}
                id="navbarToggler"
                aria-label="Mobile Menu"
                className="absolute right-4 top-11 block translate-y-[-50%] rounded-lg px-3 py-[6px] ring-primary focus:ring-2"
              >
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[7px] rotate-45" : ""
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? "opacity-0 " : " "
                  }`}
                />
                <span
                  className={`relative my-1.5 block h-0.5 w-[30px] bg-black transition-all duration-300 dark:bg-white ${
                    navbarOpen ? " top-[-8px] -rotate-45" : " "
                  }`}
                />
              </button>
              
              {/* Dropdown for mobile */}
              {navbarOpen &&  (
                <nav className="absolute  right-0 top-full z-30 w-full rounded border border-gray-200 bg-white px-6 py-4 dark:border-gray-700 dark:bg-dark">
                  <ul className="space-y-4">
                    {menuData.map((menuItem, index) => (
                      
                <Link
                  key={index}
                  href={menuItem.path || "#"}
                  className={`group  flex items-center justify-center text-white gap-2 rounded-md bg-blue-600/80 dark:bg-gray-800  shadow-md transition px-3 py-3 hover:bg-primary`}
                  onClick={() => setNavbarOpen(false)}

                >
                  
                  <PhosphorIcon
                    iconName={menuItem.icon || "Question"} 
                    size={22}
                    color={"#fff"} 
                    weight="bold"
                  />
                  {/* Tooltip text on hover */}
                  <span className="opacity-100 dark:bg-gray-800   dark:text-white text-sm rounded-bt-md px-3 py-3 transition whitespace-nowrap">
                    {menuItem.title}
                  </span>
                </Link>
              )
              )}
                  </ul>
                </nav>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
