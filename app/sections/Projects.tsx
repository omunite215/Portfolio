import { ProjectCategory } from "@/app/components";

const Projects = () => {
  return (
    <section
      className="flexCenter py-6 flex-col space-y-7 text-center font-poppins text-slate-900 dark:text-stone-50"
      id="projects"
    >
      <h1 className="sm:text-[36px] text-[28px] font-semibold">
        Let&lsquo;s have a look <br className="sm:hidden block" /> at my&nbsp;
        <span className=" font-kepler italic text-PurpleTheme">Portfolio</span>
      </h1>
      <p className=" text-gray-500 text-[16px] sm:w-full w-[80%]">
        I seek to push the limits of creativity to create high-engaging,
        user-friendly, and memorable interactive experiences.
      </p>
      <ProjectCategory />
    </section>
  );
};

export default Projects;
