"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import styles from "@/styles";
import { StatsValues } from "../constants";

const StatsDisplay = () => {
  return (
    <section className={`${styles.widthYPadding} ${styles.flexCenter} md:flex-row flex-wrap flex-col md:gap-32 gap-10`} id='AboutMe'>
      <div className='flex justify-start items-center gap-3'>
        <div className=' sm:block hidden h-[3px] w-[58px] rounded-xl bg-slate-900 dark:bg-stone-50'/>
        <h3 className='font-poppins font-semibold text-slate-900 dark:text-stone-50 text-[32px]'>My&nbsp;<span className=' font-kepler text-PurpleTheme italic'>recent work</span></h3>
      </div>
      <div className='flex md:flex-row flex-col flex-wrap gap-8'>
        {StatsValues.map((stats) => (
          <div className='flex text-slate-900 dark:text-stone-50 md:text-left md:justify-start md:items-start md:py-0 py-1 text-center flex-col justify-center items-center gap-2.5' key={stats.title}>
            <p className=' font-poppins leading-4 font-semibold text-[22px]'>{stats.value}</p>
            <p className=' font-poppins leading-3 text-gray-500 text-[18px]'>{stats.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default StatsDisplay