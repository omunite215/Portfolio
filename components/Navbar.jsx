"use client";

import { useState } from 'react';
import { MdOutlineMenuBook } from 'react-icons/md';
import { NavLinks } from '../constants';
import styles from '@/styles';
import {navVariants} from '../utils/motion';
import { motion } from 'framer-motion';
import { Switcher } from './';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <motion.nav className={`${styles.flexBetween} ${styles.widthYPadding} md:space-x-96 sm:space-x-56 space-x-40`} variants={navVariants} initial="hidden" whileInView="show">
      <div className={`${styles.flexCenter} space-x-3 sm:ml-12`}>
        <Image src="/mylogo.png" height={50} width={48} alt="logo" />
        <h3 className=' flex gap-1 font-poppins text-slate-900 dark:text-stone-50 font-semibold text-lg '>
          Om <span className=' sm:block hidden '>Patel</span>
        </h3>
    <Switcher/>
      </div>
      <div className=' sm:flex hidden justify-between items-center '>
        <ul className={` ${styles.flexEnd} list-none flex-1 `}>
          {NavLinks.map((items) => (
            <li
              key={items}
              className={` font-medium cursor-pointer text-[16px] text-slate-900 dark:text-stone-50 mr-8 `}
            >
              <Link href={`/#${items}`} className='hover:text-PurpleTheme '>
                {items}
              </Link>
            </li>
          ))}
        </ul>
        <Link href="#Contact" className=' font-medium '>
          <button
            type="button"
            className={` sm:block hidden text-center px-5 py-3 ${styles.buttonTransition} text-stone-50 dark:text-zinc-900 dark:hover:text-slate-900 rounded mr-10 `}
          >
            Contact
          </button>
        </Link>
      </div>
      <div className={` sm:hidden flex-1 ${styles.flexEnd} `}>
        <MdOutlineMenuBook
          color="#aa77fb"
          style={{ height: "38px", width: "42px" }}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={` ${
            toggle ? 'flex' : 'hidden'
          } p-6 absolute top-20 right-0 mx-2 my-2 rounded-xl bg-PurpleTheme text-stone-50 dark:text-slate-900 `}
        >
          <ul className={` ${styles.flexCenter} flex-col list-none gap-y-2 `}>
            {NavLinks.map((items) => (
              <li
                key={items}
                className='font-medium cursor-pointer text-[16px]'
              >
                <Link href={`/#${items}`} className='hover:text-PurpleTheme'>
                  {items}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
