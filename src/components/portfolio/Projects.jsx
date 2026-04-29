import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Projects = ({ data }) => {
  const [showImage, setShowImage] = useState(false);

  return (
    <>
      {/* MODAL */}
      {showImage && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center 
               backdrop-blur-xs bg-black/10"
          onClick={() => setShowImage(false)}
        >
          <img
            src={data?.image}
            alt="Preview"
            onClick={(e) => e.stopPropagation()}
            className="max-w-[85vw] max-h-[85vh] object-contain 
                 rounded-xl shadow-2xl border border-white/20"
          />
        </div>
      )}

      {/* CARD */}
      <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 overflow-hidden">
        {/* IMAGE / VIDEO */}
        {data?.type === "video" ? (
          <div className="w-full aspect-[4/5] overflow-hidden">
            <iframe
              src={data?.videoUrl}
              title={data?.title}
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
        ) : (
          <div className="w-full aspect-[4/5] overflow-hidden">
            <img
              src={data?.image}
              alt={`${data?.title} image`}
              onClick={() => setShowImage(true)}
              className="w-full h-full object-cover cursor-pointer transition-transform duration-300 hover:scale-105"
            />
          </div>
        )}

        {/* CONTENT */}
        <div className="p-4 xs:p-8">
          <p className="text-gray-400 text-xs font-medium">{data?.category}</p>
          <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
            {data?.title}
          </p>
          <p
            style={{ lineHeight: "20px", letterSpacing: "0%" }}
            className="text-gray-600 text-xs xxs:text-[14px] text-wrap"
          >
            {data?.description}
          </p>
        </div>
      </div>
    </>
  );
};

export default Projects;
