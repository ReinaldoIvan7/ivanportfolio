import { useEffect, useRef, useState } from "react";
import SplitText from "@/components/library/SplitText";

const brandLogos = [
  "assets/vn.png",
  "assets/photoshop.png",
  "assets/snapseed.png",
  "assets/photoshop-lightroom.png",
  "assets/canva-icon.png",
  "assets/capcut-icon.png",
];

const HappyClients = () => {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  // 🔥 observer (SAMA kayak SplitText)
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold: 0.2 },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // 🔧 control animasi
  const stagger = 0.15;
  const delayStart = 0.5;

  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center">
        {/* TITLE */}
        <p className="section-title mb-6">
          <SplitText text="Tools I Use" delayStart={0} />
        </p>

        {/* DESCRIPTION */}
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          <SplitText
            text="I leverage a range of modern and industry-standard tools to bring ideas to life with precision and creativity. From design to final output, I use tools like Adobe Photoshop, CapCut, Snapseed, Canva, and VN editor to craft visually compelling and high-quality content that meets professional standards."
            split="words"
            animation="fadeUp"
            instant={true}
          />
        </p>
      </div>

      {/* LOGOS */}
      <div
        ref={ref}
        className="flex flex-wrap justify-center items-center gap-10 md:gap-16 pt-10"
      >
        {brandLogos.map((logo, index) => (
          <button
            key={index}
            type="button"
            className="focus:outline-none"
            onClick={() => console.log(`Clicked logo ${index}`)}
          >
            <img
              src={logo}
              alt={`brand-logo-${index}`}
              className="h-12 sm:h-16 md:h-20 object-contain
                         transform transition duration-300
                         hover:scale-110 active:scale-95 cursor-pointer"
              style={{
                opacity: 0,
                animation: inView ? "fadeUp 0.6s ease forwards" : "none",
                animationDelay: inView
                  ? `${delayStart + index * stagger}s`
                  : "0s",
              }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default HappyClients;
