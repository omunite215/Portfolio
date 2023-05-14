"use client";

import {footerVariants} from '../utils/motion';
import { motion } from 'framer-motion';
import styles from '@/styles';
import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { NavLinks } from '../constants';

const Footer = () => {
  return (
    <motion.footer className='py-6 flex flex-col space-y-8' variants={footerVariants} initial="hidden" whileInView="show">
      <div className='w-full h-[1px] bg-slate-900 dark:bg-stone-50 rounded-full' />
     
      <div className={`${styles.flexCenter} md:justify-between md:flex-row flex-col md:space-y-0 space-y-5 md:space-x-96 sm:space-x-56 space-x-0 text-slate-900 dark:text-stone-50`}>
      <div className={`${styles.flexCenter} space-x-1 w-fit`}>
      <Image src="/mylogo.png" height={50} width={48} alt="logo" />
      <h3 className="flex gap-1 font-poppins font-semibold text-lg">
          Om <span className="sm:block hidden">Patel</span> 
      </h3>
      </div>
        <ul className={`${styles.flexCenter} list-none md:flex-row flex-col flex-wrap`}>
        {NavLinks.map((items) => (
          <li key={items} className={`font-medium cursor-pointer text-[16px] md:mr-8 md:my-0 my-2`}>
             <Link
            href={`/#${items}`}
            className='hover:text-PurpleTheme'
          >
            {items}
          </Link>
          </li>
        ))}
        </ul>
      </div>
      <div className='w-full h-[1px] bg-slate-900 dark:bg-stone-50 rounded-full' />
    </motion.footer>
  )
}

export default Footer;