import { useState } from "react";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);
  return (
    <div
      className={`rounded-xl hover:drop-shadow-2xl shadow-gray-300 ease-out duration-1000 ${
        style || ""
      }`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onTouchStart={() => setHover(true)}
      onTouchEnd={() => setHover(false)}
    >
      <div
        className={`w-11 h-11 sm:w-18 sm:h-18 flex items-center justify-center overflow-visible rounded-md ${
          hover ? "bg-picto-primary" : "bg-[#EDD8FF80]"
        }`}
      >
        <svg viewBox="0 0 32 32" className="w-7 h-7 sm:w-8 sm:h-8 block">
          {data?.svgPath && (
            <path d={data.svgPath} fill={hover ? "#FFFFFF" : "#A53DFF"} />
          )}
        </svg>
      </div>

      <div className="mt-3 xs:mt-4 sm:mt-8">
        <p className="font-semibold sm:text-xl">
          {data?.id}. {data?.title}
        </p>
        <p className="mt-3 text-[13px] sm:text-[16px] text-[#697482]">
          {data?.description}
        </p>
      </div>
    </div>
  );
};

export default WorkSteps;
