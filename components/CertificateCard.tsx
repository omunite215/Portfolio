"use client";
import Image from 'next/image';
import React from 'react';
import styles from '@/styles';

const CertificateCard = ({ title, description, imageURL, grade, gradeColor }:any) => {
  return (
    <div className="card font-poppins">
      <div className="card-info bg-white p-4 gap-2">
        <div className={styles.flexCenter}>
        <img src={imageURL} alt="Certificate" className=" object-fill w-[90%] h-full" />
        </div>
        <div className={`${styles.flexStart} space-x-4`}>
          <Image height={36} width={36}
            src="/Certificates/happy.png"
            alt="smile"
          />
          <div className="flex flex-col">
            <h2 className="title font-semibold text-black text-[16px]">
              {title}
            </h2>
            <p className=" font-normal text-black text-[10px]">{description}</p>
          </div>
          <p className={`text-${gradeColor} font-medium font-poppins`}>Grade: {grade}</p>

        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
