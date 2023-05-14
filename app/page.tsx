import styles from '@/styles';
import { Footer, Navbar, Carousel, Chart } from '@/components';
import { Hero, StatsDisplay, Work, Skills, Projects, Contact, SocialMedia, Recents, Certifications } from '@/sections';

export default function Home() {
  return (
    <div className="w-full overflow-hidden">
      <div className={`${styles.flexCenter} flex-col gap-10 bg-YellowPrimaryBg pb-52 dark:bg-zinc-900`}>
        <div className={`${styles.paddingX}`}>
          <div className={`${styles.boxWidth}`}>
            <Navbar />
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <Hero />
          </div>
        </div>
        <div className={`${styles.flexStart}`}>
          <div className={`${styles.boxWidth}`}>
            <StatsDisplay />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-stone-50 dark:bg-zinc-950`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Recents />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-stone-50 dark:bg-zinc-950`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Work />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-YellowPrimaryBg dark:bg-zinc-900`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Skills />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-YellowPrimaryBg dark:bg-zinc-900`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Chart/>
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-stone-50 dark:bg-zinc-950`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Projects />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-YellowPrimaryBg dark:bg-zinc-900`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Certifications />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-YellowPrimaryBg dark:bg-zinc-900`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Carousel />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-stone-50 dark:bg-zinc-950`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Contact />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-StrongYellowBg dark:bg-zinc-900`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className={`${styles.flexCenter} bg-StrongYellowBg dark:bg-zinc-900`}>
        <div className={`${styles.paddingX} ${styles.flexCenter}`}>
          <div className={styles.boxWidth}>
            <Footer />
            <div className={`${styles.flexCenter} py-6 text-PurpleTheme font-poppins font-semibold flex-wrap`}>Made with 💖 by Om Patel</div>
          </div>
        </div>
      </div>
    </div>
  )
}
