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
