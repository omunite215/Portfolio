"use client";

import { SocialMediaContent } from '@/constants'
import { SocialMediaCard } from '@/components'
import styles from '@/styles';

const SocialMedia = () => {
  return (
    <section className={`${styles.flexBetween} ${styles.widthYPadding} flex-col font-poppins space-y-7`}>
      <h1 className='font-semibold text-[32px] md:text-left text-center text-slate-900 dark:text-stone-50'>Let's <span className=' font-kepler text-PurpleTheme'>connect</span> there</h1>
      <div className='flex flex-wrap justify-center sm:flex-row flex-col sm:text-justify text-center sm:gap-x-4 sm:gap-y-3 gap-y-6 '>
      {SocialMediaContent.map((card) => (
          <SocialMediaCard link={card.link} title={card.title} description={card.description} icon={card.icon} key={card.title}/>
      ))}
      </div>
    </section>
  )
}

export default SocialMedia