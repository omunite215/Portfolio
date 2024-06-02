"use client";
import { useState } from "react";
// @ts-ignore
import { Splide, SplideSlide } from "@splidejs/react-splide";
import { AutoScroll } from "@splidejs/splide-extension-auto-scroll";
import "@splidejs/splide/dist/css/splide.min.css";
import "@splidejs/react-splide/css/sea-green";
import { CertificateCard } from "@/app/components";
import { CertificateContent } from "@/constants/Data";

const Carousel = () => {
  const [autoScroll, setAutoScroll] = useState(true);
  const countArray = [0, 1, 2, 3, 4, 5, 6];
  return (
    <div className="flex flex-col space-y-3">
      <div className="flexCenter">
        <h1 className="font-poppins text-[22px] font-semibold text-PurpleTheme">
          Autoscroll&nbsp;
        </h1>
        <label className="switch">
          <input
            type="checkbox"
            onClick={() => setAutoScroll((prev) => !prev)}
          />
          <div className="slider" />
          <div className="slider-card">
            <div className="slider-card-face slider-card-front"></div>
            <div className="slider-card-face slider-card-back"></div>
          </div>
        </label>
      </div>
      {!autoScroll && (
        <Splide
          options={{
            type: "loop",
            drag: "free",
            focus: "center",
            padding: { left: "20%" },
            arrows: false,
            pagination: false,
            perPage: 2,
            lazyLoad: false,
            autoScroll: {
              pauseOnHover: true,
              pauseOnFocus: false,
              rewind: true,
              speed: 2,
            },
          }}
          extensions={{ AutoScroll }}
        >
          {countArray.map((item) => (
            <SplideSlide key={item}>
              <CertificateCard
                title={CertificateContent[item].title}
                description={CertificateContent[item].description}
                grade={CertificateContent[item].grade}
                imageURL={CertificateContent[item].imgURL}
                gradeColor={CertificateContent[item].gradeColor}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
      {autoScroll && (
        <Splide
          hasTrack={true}
          options={{
            type: "loop",
            width: 800,
            drag: "free",
            focus: "center",
            padding: { left: "20%" },
            trimSpace: true,
            arrows: true,
          }}
        >
        {countArray.map((item) => (
            <SplideSlide key={item}>
              <CertificateCard
                title={CertificateContent[item].title}
                description={CertificateContent[item].description}
                grade={CertificateContent[item].grade}
                imageURL={CertificateContent[item].imgURL}
                gradeColor={CertificateContent[item].gradeColor}
              />
            </SplideSlide>
          ))}
        </Splide>
      )}
    </div>
  );
};

export default Carousel;
