"use client";

import { BsFillLightbulbFill } from "react-icons/bs";
import { fadeIn } from "@/constants/motion";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ProjectCardProps } from "@/types";

const ProjectCard = ({
  title,
  description,
  imgURL,
  icon,
  category,
  link,
  demoLink,
  tags,
}: ProjectCardProps) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-3 bg-white shadow-md dark:shadow-none dark:bg-zinc-900 pb-3 rounded-lg transition duration-300 max-w-[450px]"
      variants={fadeIn("left", "spring", 1, 1)}
    >
      <Image
        src={imgURL}
        height={200}
        width={300}
        alt="Project-Img"
        className="w-full rounded object-contain"
        priority={true}
      />
      <div className="w-full flexBetween text-left px-2">
        <div className="flex flex-col justify-items-start items-start gap-1 px-2">
          <h3 className=" font-poppins font-semibold text-[18px] text-slate-900 dark:text-stone-50">
            {title}
          </h3>
          <p className=" font-poppins font-normal text-[14px] text-gray-500">
            {description}&nbsp;[{category}]
          </p>
          <ul className=" flex flex-wrap gap-1 justify-evenly items-center w-fit text-GreenTheme">
            {tags?.map((item) => (
              <li className={`text-${item.color} font-medium`} key={item.name}>
                #{item.name}
              </li>
            ))}
          </ul>
        </div>
        <div className="flexBetween gap-2">
          <button
            type="button"
            className="p-3 rounded-full bg-PurpleTheme hover:bg-PinkTheme"
          >
            <Link href={link}>{icon}</Link>
          </button>
          <button
            type="button"
            className="p-3 rounded-full bg-PurpleTheme hover:bg-PinkTheme"
          >
            <Link href={demoLink}>
              <BsFillLightbulbFill color="#FFFF00" />
            </Link>
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
