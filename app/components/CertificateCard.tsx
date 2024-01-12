import Image from "next/image";
import { CertificateCardProps } from "@/types";

const CertificateCard = ({
  title,
  description,
  imageURL,
  grade,
  gradeColor,
}: CertificateCardProps) => {
  return (
    <div className="card font-poppins">
      <div className="card-info bg-white p-4 gap-2">
        <div className="flexCenter">
          <Image
            src={imageURL}
            alt="Certificate"
            height={250}
            width={250}
            className=" object-fill w-[90%] h-full"
            priority={true}
          />
        </div>
        <div className="flexStart space-x-4">
          <Image
            height={36}
            width={36}
            src="/Certificates/happy.png"
            alt="smile"
            priority={false}
          />
          <div className="flex flex-col">
            <h2 className="title font-semibold text-black text-[16px]">
              {title}
            </h2>
            <p className=" font-normal text-black text-[10px]">{description}</p>
          </div>
          <p className={`text-${gradeColor} font-medium font-poppins`}>
            Grade: {grade}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateCard;
