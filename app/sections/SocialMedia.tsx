

import { SocialMediaContent } from "@/constants/Data";
import { SocialMediaCard } from "@/app/components";


const SocialMedia = () => {
  return (
    <section
      className="flexBetween styles.widthYPadding flex-col font-poppins space-y-7"
    >
      <h1 className="font-semibold text-[32px] md:text-left text-center text-slate-900 dark:text-stone-50">
        Let&lsquo;s <span className=" font-kepler text-PurpleTheme">connect</span>&nbsp;
        there
      </h1>
      <div className="flex flex-wrap justify-center sm:flex-row flex-col sm:text-justify text-center sm:gap-x-4 sm:gap-y-3 gap-y-6 ">
        {SocialMediaContent.map((card) => (
          <SocialMediaCard
            link={card.link}
            title={card.title}
            description={card.description}
            icon={card.icon}
            key={card.title}
          />
        ))}
      </div>
    </section>
  );
};

export default SocialMedia;