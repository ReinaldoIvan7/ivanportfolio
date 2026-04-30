import { useEffect, useState } from "react";
import SplitText from "@/components/library/SplitText";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);

  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {
      console.log("Mouse entered on the: ", e.target);
    });
  }, []);

  // 🔥 delay per card (biar urut antar role)
  const baseDelay = (role?.id - 1) * 0.3;

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-4 xs:p-8 bg-white hover:shadow-xl h-auto shadow-gray-300 ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden"
    >
      <p
        className={`bg-picto-primary absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] ${
          mouseHover && "duration-200 w-[5px]"
        }`}
      />

      <div>
        {/* 🔥 TITLE */}
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 pb-4">
          <SplitText text={role?.title} delayStart={baseDelay} />
        </p>

        {/* 🔥 DESCRIPTION */}
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-700">
          <SplitText
            text={role?.description}
            split="words"
            delayStart={baseDelay + 0.2}
          />
        </p>
      </div>
    </div>
  );
};

export default Roles;
