"use client";

import Link from 'next/link';
import styles from '@/styles';

const SocialMediaCard = ({title, description, icon, link}:any) => {
  return (
    <Link href={`${link}`} className={`font-poppins ${styles.flexBetween} transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-100 hover:shadow-xl duration-300 bg-stone-50 dark:bg-zinc-950 p-6 sm:text-left text-center sm:flex-row flex-col sm:w-[35%] w-full rounded`}>
      <div className='flex flex-col space-y-1'>
        <h1 className='font-semibold text-[22px] text-slate-900 dark:text-stone-50'>{title}</h1>
        <p className='text-gray-500'>{description}</p>
      </div>
      <button type="button" className="p-3">
        {icon}
        </button>
    </Link>
  )
}

export default SocialMediaCard;