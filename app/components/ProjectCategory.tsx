"use client";

import { useState } from "react";
import { ProjectContentUI, ProjectContentWeb, WebUI } from "@/constants/Data";
import { ProjectCard } from "@/app/components";

const ProjectCategory = () => {
  const [activeButton, setactiveButton] = useState("All");
  const activeString =
    "bg-PurpleTheme text-stone-50 dark:bg-stone-50 dark:text-slate-900 rounded-xl";
  const initialValues = {
    visible: false,
    text: "View More",
    items: 3,
  };
  const [visibility, setVisibility] = useState(initialValues);
  const showMoreItems = () => {
    if (visibility.visible === false) {
      setVisibility({
        ...initialValues,
        text: "Show Less",
        items: 12,
        visible: true,
      });
    } else {
      setVisibility(initialValues);
    }
  };

  return (
    <>
      <div>
        <ul className=" list-none flex text-center sm:space-x-10 space-x-2 font-poppins text-gray-500 my-4">
          <li>
            <button
              className={`px-5 py-1.5 text-center cursor-pointer ${
                activeButton === "All" ? activeString : ""
              }`}
              onClick={(e) => setactiveButton("All")}
            >
              All
            </button>
          </li>
          <li>
            <button
              className={`flex gap-1 px-5 py-1.5 text-center cursor-pointer ${
                activeButton === "WebDesign" ? activeString : ""
              }`}
              onClick={(e) => setactiveButton("WebDesign")}
            >
              Web <span className="sm:hidden block">UI</span>{" "}
              <span className="sm:block hidden">Design</span>
            </button>
          </li>
          <li>
            <button
              className={`flex gap-1 px-5 py-1.5 text-center cursor-pointer ${
                activeButton === "MobileUI" ? activeString : ""
              }`}
              onClick={(e) => setactiveButton("MobileUI")}
            >
              Mobile <span className="sm:block hidden">UI</span>
            </button>
          </li>
          <li>
            {" "}
            <button
              className={`flex gap-1 px-5 py-1.5 text-center cursor-pointer ${
                activeButton === "WebDev" ? activeString : ""
              }`}
              onClick={(e) => setactiveButton("WebDev")}
            >
              Web <span className="sm:block hidden">Development</span>
            </button>
          </li>
        </ul>
      </div>
      <div>
        <div className="flex justify-center items-center">
          {activeButton === "All" && (
            <div className="flex flex-wrap w-[75%] justify-center items-center gap-x-10 gap-y-8">
              {ProjectContentUI.concat(ProjectContentWeb)
                .slice(0, visibility.items)
                .map((projects) => (
                  <div key={projects.title}>
                    <ProjectCard
                      title={projects.title}
                      description={projects.description}
                      imgURL={projects.imgURL}
                      link={projects.link}
                      icon={projects.icon}
                      category={projects.category}
                      demoLink={projects.demoLink}
                      tags={projects.tags}
                    />
                  </div>
                ))}
            </div>
          )}
          {activeButton === "WebDesign" && (
            <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
              {WebUI.map((projects) => (
                <div key={projects.title}>
                  <ProjectCard
                    title={projects.title}
                    description={projects.description}
                    imgURL={projects.imgURL}
                    link={projects.link}
                    icon={projects.icon}
                    category={projects.category}
                    demoLink={projects.demoLink}
                    tags={projects.tags}
                  />
                </div>
              ))}
            </div>
          )}
          {activeButton === "MobileUI" && (
            <div className="flex flex-wrap w-[75%] justify-center items-center gap-x-10 gap-y-8">
              {ProjectContentUI.slice(0, visibility.items).map((projects) => (
                <div key={projects.title}>
                  <ProjectCard
                    title={projects.title}
                    description={projects.description}
                    imgURL={projects.imgURL}
                    link={projects.link}
                    icon={projects.icon}
                    category={projects.category}
                    demoLink={projects.demoLink}
                    tags={projects.tags}
                  />
                </div>
              ))}
            </div>
          )}
          {activeButton === "WebDev" && (
            <div className="flex flex-wrap w-[75%] justify-center items-center gap-x-10 gap-y-8">
              {ProjectContentWeb.slice(0, visibility.items).map((projects) => (
                <div key={projects.title}>
                  <ProjectCard
                    title={projects.title}
                    description={projects.description}
                    imgURL={projects.imgURL}
                    link={projects.link}
                    icon={projects.icon}
                    category={projects.category}
                    demoLink={projects.demoLink}
                    tags={projects.tags}
                  />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
      <div>
        <button
          type="button"
          id="viewMoreButton"
          className="px-3 py-2 font-poppins font-medium rounded transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-PurpleTheme duration-500 text-stone-50 bg-PinkTheme dark:text-slate-900"
          onClick={showMoreItems}
        >
          {visibility.text}
        </button>
      </div>
    </>
  );
};

export default ProjectCategory;
