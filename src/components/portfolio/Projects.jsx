import { useState } from "react";
import SplitText from "@/components/library/SplitText";

const Projects = ({ data }) => {
  const [showImage, setShowImage] = useState(false);
  const baseDelay = (data?.id - 1) * 0.3;

  return (
    <>
      {/* MODAL */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-xs bg-black/10"
          onClick={() => setShowImage(false)}
        >
          <img
            src={data?.image}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[85vw] max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/20"
          />
        </div>
      )}

      {/* CARD */}
      <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 overflow-hidden">
        {/* IMAGE */}
        <div className="w-full aspect-[4/5] overflow-hidden">
          <img
            src={data?.image}
            alt={data?.title}
            onClick={() => setShowImage(true)}
            className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* CONTENT */}
        <div className="p-4 xs:p-8">
          <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
            <SplitText text={data?.title} delayStart={baseDelay} />
          </p>

          <p className="text-gray-600 text-xs xxs:text-[14px] text-wrap">
            <SplitText
              text={data?.description}
              split="words"
              delayStart={baseDelay + 0.2}
            />
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
