import { Footer, Navbar, Carousel, Chart } from "@/app/components";
import {
  Hero,
  StatsDisplay,
  Work,
  Skills,
  Projects,
  Contact,
  SocialMedia,
  Recents,
  Certifications,
} from "@/app/sections";

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className="flexCenter flex-col gap-10 bg-YellowPrimaryBg pb-52 dark:bg-zinc-900">
        <div className="boxWidth">
          <Navbar />
        </div>
        <div className="flexStart">
          <div className="boxWidth">
            <Hero />
          </div>
        </div>
        <div className="flexStart">
          <div className="boxWidth">
            <StatsDisplay />
          </div>
        </div>
      </div>
      <div className="flexCenter bg-stone-50 dark:bg-zinc-950">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Recents />
          </div>
        </div>
      </div>
      <div className="flexCenter bg-stone-50 dark:bg-zinc-950">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Work />
          </div>
        </div>
      </div>
      <div className="flexCenter bg-YellowPrimaryBg dark:bg-zinc-900">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Skills />
          </div>
        </div>
      </div>
      <div className="flexCenter bg-YellowPrimaryBg dark:bg-zinc-900">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Chart />
          </div>
        </div>
      </div>
      <div className="flexCenter bg-stone-50 dark:bg-zinc-950">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Projects />
          </div>
        </div>
      </div>
      <div className={"flexCenter bg-YellowPrimaryBg dark:bg-zinc-900"}>
        <div className={"paddingX flexCenter"}>
          <div className="boxWidth">
            <Certifications />
          </div>
        </div>
      </div>
      <div className="flexCenter bg-YellowPrimaryBg dark:bg-zinc-900">
        <div className="paddingX flexCenter">
          <div className="boxWidth">
            <Carousel />
          </div>
        </div>
      </div>
      <div className={"flexCenter bg-stone-50 dark:bg-zinc-950"}>
        <div className={"paddingX flexCenter"}>
          <div className="boxWidth">
            <Contact />
          </div>
        </div>
      </div>
      <div className={"flexCenter bg-StrongYellowBg dark:bg-zinc-900"}>
        <div className={"paddingX flexCenter"}>
          <div className="boxWidth">
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className={"flexCenter bg-StrongYellowBg dark:bg-zinc-900"}>
        <div className={"paddingX flexCenter"}>
          <div className="boxWidth">
            <Footer />
            <div
              className={"flexCenter py-6 text-PurpleTheme font-poppins font-semibold flex-wrap"}
            >
              Made with 💖 by Om Patel
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
