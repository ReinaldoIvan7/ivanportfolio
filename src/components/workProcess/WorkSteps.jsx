import { useState } from "react";
import SplitText from "@/components/library/SplitText";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);

  // 🔥 delay berdasarkan urutan id
  const baseDelay = (data?.id - 1) * 0.3;

  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000 ${
        style || ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 flex items-center justify-center overflow-visible rounded-md ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        }`}
      >
        <svg
          viewBox="0 0 32 32"
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8 sm:w-10 sm:h-10 block shrink-0"
        >
          <path d={data.svgPath} fill={hover ? "#FFFFFF" : "#A53DFF"} />
        </svg>
      </div>

      <div className="mt-3 xs:mt-4 sm:mt-8">
        {/* 🔥 TITLE */}
        <p className="font-semibold sm:text-xl">
          <SplitText
            text={`${data?.id}. ${data?.title}`}
            delayStart={baseDelay}
          />
        </p>

        {/* 🔥 DESCRIPTION */}
        <p className="mt-3 text-[13px] sm:text-[16px] text-[#697482]">
          <SplitText
            text={data?.description}
            split="words"
            delayStart={baseDelay + 0.2}
          />
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
