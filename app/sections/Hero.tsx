"use client";

import Link from "next/link";
import { slideIn } from "@/constants/motion";
import { motion } from "framer-motion";

const Hero = () => {
	return (
		<section id="aboutme">
			<div className="flexCenter md:flex-row gap-x-16 flex-col flex-wrap md:px-0 px-6">
				<motion.div
					className=" flex flex-col gap-3 md:block md:text-left text-center "
					variants={slideIn("left", "tween", 0.2, 1.5)}
					initial="hidden"
					whileInView="show"
				>
					<div className=" font-poppins font-semibold leading-[75px] text-slate-900 dark:text-stone-50 mr-5 md:text-[52px] text-[42px]">
						Hi! I am&nbsp;
						<p className=" font-kepler text-PurpleTheme italic md:w-[80%] w-full">
							Om Patel
						</p>{" "}
						A Full-Stack Web Developer and
						<br className="md:block hidden" /> UI/UX Designer
					</div>
					<p className="font-poppins md:w-[540px] w-[360px] font-medium text-[14px] text-gray-400">
						A Professional who seek to push the limits of creativity to create
						high-engaging, user-friendly, and memorable interactive experiences.
					</p>
					<div className="flex mt-4 md:justify-start justify-center items-center ">
						<Link
							href="https://mega.nz/file/eaYxXBYS#Nd8S-psXTClOJTvlWU9lPauA457tL4fycY1AC9AQC8Y"
							target="_blank"
							className="px-5 py-3 dark:text-slate-900 text-stone-50 rounded font-poppins font-medium buttonTransition "
						>
							Download Resume
						</Link>
					</div>
				</motion.div>

				<motion.img
					src="/Hero/hero.webp"
					alt="Hero-Picture"
					width={0}
					height={0}
					loading="eager"
					className=" md:mb-14 md:h-auto md:w-auto h-[75%] w-[50%]"
					variants={slideIn("right", "tween", 0.2, 1.5)}
					initial="hidden"
					whileInView="show"
				/>
			</div>
		</section>
	);
};

export default Hero;
