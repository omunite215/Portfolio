"use client";

import { fadeIn, slideIn } from "@/constants/motion";
import { motion } from "framer-motion";
import { SkillCard } from "@/app/components";
import Link from "next/link";
import { SkillsInfo } from "@/constants/Data";
import { FaCheckCircle } from "react-icons/fa";

const Skills = () => {
  return (
    <section
      className={`flexCenter font-poppins w-full py-12 md:flex-row flex-col md:space-x-14 space-x-0 md:space-y-0 space-y-20`}
      id="Skills"
    >
      <div className="styles.flexStart flex-col sm:space-y-2 space-y-6">
        {SkillsInfo.map((SkillContent) => (
          <motion.div
            className="flexBetween md:items-start flex-col space-y-6"
            key={SkillContent.id}
            variants={fadeIn("up", "spring", SkillContent.id * 0.5, 1)}
            initial="hidden"
            whileInView="show"
          >
            <SkillCard
              id={SkillContent.id}
              title={SkillContent.title}
              content={SkillContent.skills.map((content) => (
                <div
                  className={`flexBetween space-x-3 text-gray-500 font-normal`}
                  key={content[0]}
                >
                  <FaCheckCircle color="green" className="mr-2" />
                  {content}
                </div>
              ))}
            />
          </motion.div>
        ))}
      </div>
      <motion.div
        className="md:w-[400px] w-[300px] flex flex-col md:items-start items-center md:text-left text-center md:space-y-3 space-y-6 text-slate-900 dark:text-stone-50"
        variants={slideIn("right", "tween", 0.2, 1.5)}
        initial="hidden"
        whileInView="show"
      >
        <h1 className="font-semibold text-[28px]">
          <span className=" italic font-kepler text-PurpleTheme">Skills</span>
          &nbsp;Chart
        </h1>
        <p className="text-gray-500 font-normal w-[85%] text-left">
          I seek to push the limits of creativity to create high-engaging,
          user-friendly, and memorable interactive experiences.
        </p>
        <Link href="https://omthecreator.netlify.app" target="_blank">
          <button className="buttonTransition text-stone-50 dark:text-slate-900 font-medium font-poppins px-3 py-2">
            UI/UX Design Portfolio
          </button>
        </Link>
      </motion.div>
    </section>
  );
};

export default Skills;
