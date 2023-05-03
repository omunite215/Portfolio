"use client";

import {slideIn} from '../utils/motion';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import styles from '@/styles';

const Work = () => {
  return (
    <section className={`${styles.flexCenter} md:flex-row flex-col md:space-y-0 space-y-5 pb-12`}>
      <motion.div className={`${styles.flexBetween} flex-col space-y-8 md:items-start md:text-left text-center md:w-[40%] w-[100%]`} variants={slideIn()} initial="hidden" whileInView="show" >
        <h3 className=' w-[85%] font-poppins font-semibold text-slate-900 dark:text-stone-50 text-[32px]'>Work Experience of <span className=' font-kepler text-PurpleTheme'>UI/UX Designer</span> and <span className=' font-kepler text-PurpleTheme'>Wordpress Developer</span> for a Car Repairing Business</h3>
        <p className='font-poppins text-gray-500 w-[70%]'>I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences</p>
        <Link href="https://omthecreator.netlify.app/major-project/"><button type='button' className={`text-center px-3 py-2 ${styles.buttonTransition} text-stone-50 dark:text-slate-900 font-medium rounded `}>Case Study</button></Link>
      </motion.div>
      <Image height={250} width={350} src="/avmlogo.png" alt="Avm-Logo" className=' bg-stone-50 rounded-2xl'/>

    </section>
  )
}

export default Work;