"use client";

import React from 'react'
import { RecentProjects } from '@/constants'
import { ProjectCard } from '@/components'
import { AiFillGithub } from 'react-icons/ai'
import styles from '@/styles';
import { motion } from 'framer-motion';
import {slideIn} from '../utils/motion';


const Recents = () => {
  return (
    <motion.section className={`relative ${styles.flexBetween} md:flex-row flex-col md:space-y-0 space-y-10 md:space-x-10 pt-6 -top-36`} variants={slideIn("right", "tween", 0.2, 1.5)} initial="hidden" whileInView="show">
        {RecentProjects.map((info) => (
            <ProjectCard category="Recents" title={info.title} description={info.description} imgURL={info.imgURL} icon={<AiFillGithub color='white'/>} link = {info.link} demoLink={info.demoLink} key={info.title}/>
        ))}

    </motion.section>
  )
}

export default Recents;