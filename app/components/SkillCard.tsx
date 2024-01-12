import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";
import { SkillCardProps } from "@/types";

const SkillCard = ({ id, title, content }: SkillCardProps) => {
  return (
    <div className="sm:w-[480px] w-[300px] flex flex-col justify-start space-y-2 font-poppins dark:text-stone-50 text-slate-900">
      <div className="flexBetween space-x-2 w-full">
        <h3 className="text-[20px] font font-semibold">{id}</h3>
        <Link href="#myChart">
          <button className="p-3 ml-auto rounded-full bg-PurpleTheme hover:bg-PinkTheme">
            <FiArrowUpRight color="white" />
          </button>
        </Link>
      </div>
      <div className=" ml-8 flex flex-col justify-start items-start space-y-2">
        <h1 className="font-semibold text-[24px]">{title}</h1>
        <div className="flexBetween space-x-2">
          <div className="flexBetween space-x-3">{content}</div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
