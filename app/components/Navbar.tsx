"use client";

import { useState } from "react";
import { navVariants } from "@/constants/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ThemeSwitch } from "@/app/components";
import { NavLinks } from "@/constants/Data";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <motion.nav
      className="w-full flexBetween widthYPadding sm:px-0 px-6 flex-1"
      variants={navVariants}
      initial="hidden"
      whileInView="show"
    >
      <div className="flexCenter space-x-3">
        <Link href="https://github.com/omunite215" target="blank">
          <Image
            src="/Logo/logo.svg"
            height={48}
            width={48}
            alt="logo"
            priority={true}
            className="animate-spin-slow"
          />
        </Link>
        <h3 className=" flex gap-1 font-poppins text-slate-900 dark:text-stone-50 font-semibold text-lg ">
          Om <span className=" sm:block hidden ">Patel</span>
        </h3>
        <ThemeSwitch />
      </div>
      <div className="sm:flex hidden justify-between items-center">
        <ul className="flexEnd list-none flex-1">
          {NavLinks.map((items) => (
            <li
              key={items.label}
              className="font-medium cursor-pointer text-[16px] text-slate-900 dark:text-stone-50 mr-8"
            >
              <Link
                href={items.link}
                className="hover:text-PurpleTheme flex flex-col gap-y-1 group"
              >
                {items.label}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#contact" className=" font-medium ">
          <button
            type="button"
            className={` sm:block hidden text-center px-5 py-3 transition ease-in-out delay-150 bg-PurpleTheme hover:-translate-y-1 hover:scale-110 hover:bg-PinkTheme duration-300 text-stone-50 dark:text-zinc-900 dark:hover:text-slate-900 rounded mr-10 `}
          >
            Contact
          </button>
        </Link>
      </div>
      <div className=" sm:hidden flex-1 flexEnd">
        {toggle ? (
          <RxCross2
            color="#aa77fb"
            style={{ height: "38px", width: "42px" }}
            onClick={() => setToggle((prev) => !prev)}
          />
        ) : (
          <RxHamburgerMenu
            color="#aa77fb"
            style={{ height: "38px", width: "42px" }}
            onClick={() => setToggle((prev) => !prev)}
          />
        )}
        <div
          className={` ${
            toggle ? "flex" : "hidden"
          } p-6 absolute top-20 right-0 mx-2 my-2 rounded-xl bg-PurpleTheme text-stone-50 dark:text-slate-900 `}
        >
          <ul className="flexCenter flex-col list-none gap-y-3">
            {NavLinks.map((items) => (
              <li key={items.label} className="font-medium text-[16px]">
                <Link href={items.link}>{items.label}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
