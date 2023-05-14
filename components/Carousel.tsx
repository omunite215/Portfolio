"use client";
import { React, useState } from 'react';
import styles from '@/styles';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
import '@splidejs/splide/dist/css/splide.min.css';
import '@splidejs/react-splide/css/sea-green';
import { CertificateCard } from '.';
import { CertificateContent } from '@/constants';

const Carousel = (scrollStatus) => {
  const [autoScroll, setAutoScroll] = useState(true);

  const handleAutoScroll = () => {
    if (autoScroll === true) {
      setAutoScroll(false);
    } else {
      setAutoScroll(true);
    }
  };
  return (
    <div className="flex flex-col space-y-3">
      <div className={styles.flexCenter}>
        <h1 className="font-poppins text-[22px] font-semibold text-PurpleTheme">Autoscroll&nbsp;</h1>
      <label className="switch">
          <input type="checkbox"onClick={handleAutoScroll}/>
          <div className="slider"/>
          <div className="slider-card">
            <div className="slider-card-face slider-card-front"></div>
            <div className="slider-card-face slider-card-back"></div>
          </div>
        </label>
      </div>
      {!autoScroll && <Splide
        options={{
          type: "loop",
          drag: "free",
          focus: 'center',
          trimSpace: 'true',
          padding: {left: '70%'},
          arrows: false,
          pagination: false,
          perPage: 5,
          lazyLoad: true,
          autoScroll: {
            pauseOnHover: true,
            pauseOnFocus: false,
            rewind: true,
            speed: 2,
          },
        }}
        extensions={{ AutoScroll }}
      >
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[0].title}
            description={CertificateContent[0].description}
            grade={CertificateContent[0].grade}
            imageURL={CertificateContent[0].imgURL}
            gradeColor={CertificateContent[0].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[1].title}
            description={CertificateContent[1].description}
            grade={CertificateContent[1].grade}
            imageURL={CertificateContent[1].imgURL}
            gradeColor={CertificateContent[1].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[2].title}
            description={CertificateContent[2].description}
            grade={CertificateContent[2].grade}
            imageURL={CertificateContent[2].imgURL}
            gradeColor={CertificateContent[2].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[3].title}
            description={CertificateContent[3].description}
            grade={CertificateContent[3].grade}
            imageURL={CertificateContent[3].imgURL}
            gradeColor={CertificateContent[3].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[4].title}
            description={CertificateContent[4].description}
            grade={CertificateContent[4].grade}
            imageURL={CertificateContent[4].imgURL}
            gradeColor={CertificateContent[4].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[5].title}
            description={CertificateContent[5].description}
            grade={CertificateContent[5].grade}
            imageURL={CertificateContent[5].imgURL}
            gradeColor={CertificateContent[5].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[6].title}
            description={CertificateContent[6].description}
            grade={CertificateContent[6].grade}
            imageURL={CertificateContent[6].imgURL}
            gradeColor={CertificateContent[6].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[7].title}
            description={CertificateContent[7].description}
            grade={CertificateContent[7].grade}
            imageURL={CertificateContent[7].imgURL}
            gradeColor={CertificateContent[7].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[8].title}
            description={CertificateContent[8].description}
            grade={CertificateContent[8].grade}
            imageURL={CertificateContent[8].imgURL}
            gradeColor={CertificateContent[8].gradeColor}
          />
        </SplideSlide>
      </Splide>}
      {autoScroll && <Splide hasTrack={true}  options={{
          type: "loop",
          width : 800,
          drag: "free",
          focus: 'center',
          padding: {left: '20%'},
          trimSpace: 'true',
          arrows: 'true'}}>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[0].title}
            description={CertificateContent[0].description}
            grade={CertificateContent[0].grade}
            imageURL={CertificateContent[0].imgURL}
            gradeColor={CertificateContent[0].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[1].title}
            description={CertificateContent[1].description}
            grade={CertificateContent[1].grade}
            imageURL={CertificateContent[1].imgURL}
            gradeColor={CertificateContent[1].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[2].title}
            description={CertificateContent[2].description}
            grade={CertificateContent[2].grade}
            imageURL={CertificateContent[2].imgURL}
            gradeColor={CertificateContent[2].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[3].title}
            description={CertificateContent[3].description}
            grade={CertificateContent[3].grade}
            imageURL={CertificateContent[3].imgURL}
            gradeColor={CertificateContent[3].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[4].title}
            description={CertificateContent[4].description}
            grade={CertificateContent[4].grade}
            imageURL={CertificateContent[4].imgURL}
            gradeColor={CertificateContent[4].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[5].title}
            description={CertificateContent[5].description}
            grade={CertificateContent[5].grade}
            imageURL={CertificateContent[5].imgURL}
            gradeColor={CertificateContent[5].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[6].title}
            description={CertificateContent[6].description}
            grade={CertificateContent[6].grade}
            imageURL={CertificateContent[6].imgURL}
            gradeColor={CertificateContent[6].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[7].title}
            description={CertificateContent[7].description}
            grade={CertificateContent[7].grade}
            imageURL={CertificateContent[7].imgURL}
            gradeColor={CertificateContent[7].gradeColor}
          />
        </SplideSlide>
        <SplideSlide>
          <CertificateCard
            title={CertificateContent[8].title}
            description={CertificateContent[8].description}
            grade={CertificateContent[8].grade}
            imageURL={CertificateContent[8].imgURL}
            gradeColor={CertificateContent[8].gradeColor}
          />
        </SplideSlide>
      </Splide>}
      
    </div>
  );
};

export default Carousel;
