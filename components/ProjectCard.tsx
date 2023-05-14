"use client";

import {BsFillLightbulbFill} from 'react-icons/bs'
import {fadeIn} from '../utils/motion';
import { motion } from 'framer-motion';
import Link from "next/link";
import Image from "next/image";
import styles from '@/styles';

const ProjectCard = ({title, description, imgURL, icon, category, link, demoLink}) => {
  return (
    <motion.div className="flex flex-col items-center gap-3 bg-white shadow-md dark:shadow-none dark:bg-zinc-900 pb-3 rounded-lg" variants={fadeIn('left', 'spring', 1, 1)}>
      <Image src={imgURL} height={200} width={300} alt="Project-Img" className="h-[200px] w-[300px] rounded"/>
      <div className={`w-full ${styles.flexStart} text-left mx-1`}>
        <div className="flex flex-col justify-items-start items-start gap-1 px-2">
          <h3 className=" font-poppins font-semibold text-[18px] text-slate-900 dark:text-stone-50">{title}</h3>
          <p className=" font-poppins font-normal text-[14px] text-gray-500">{description} [{category}]</p>
        </div>
        <div className='flex flex-1 gap-2'>
        <Link href={link}>
        <button type="button" className="p-3 rounded-full bg-PurpleTheme">
        {icon}
        </button>
        </Link>
        <Link href={demoLink}>
        <button type="button" className="p-3 rounded-full bg-PurpleTheme">
        <BsFillLightbulbFill color='#FFFF00'/>
        </button>
        </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;