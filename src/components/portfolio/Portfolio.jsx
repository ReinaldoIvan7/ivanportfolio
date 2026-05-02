import Projects from "./Projects";
import SplitText from "@/components/library/SplitText";

import card1 from "/assets/images/portfolio-images/1.png";
import card2 from "/assets/images/portfolio-images/2.png";
import card3 from "/assets/images/portfolio-images/3.png";
import card4 from "/assets/images/portfolio-images/4.png";

const projectData = [
  {
    id: 1,
    image: card1,
    title: "Promotional Design",
    description:
      "I focus on designing visuals that harmonize with the product’s color tone, ensuring a natural and cohesive appearance.",
  },
  {
    id: 2,
    image: card2,
    title: "Promotional Design",
    description:
      "I create visually appealing food promotions that highlight taste and quality, while using clean and engaging visuals to attract attention and encourage customers to try the product.",
  },
  {
    id: 3,
    image: card3,
    title: "Promotional Design",
    description:
      "I create visually compelling promotional designs that transform ideas into impactful marketing visuals that capture attention instantly.",
  },
  {
    id: 4,
    image: card4,
    title: "Promotional Design",
    description:
      "I design promotional visuals that effectively communicate product benefits through clean, modern, and engaging visuals.",
  },
];

const videoData = [
  {
    id: 1,
    file: "1.mp4",
    title: "Video Project 1",
    description: "A showcase of my video editing work.",
  },
  {
    id: 2,
    file: "2.mp4",
    title: "Video Project 2",
    description: "Creative promotional video design.",
  },
  {
    id: 3,
    file: "3.mp4",
    title: "Video Project 3",
    description: "Modern motion visual for marketing.",
  },
  {
    id: 4,
    file: "4.mp4",
    title: "Video Project 4",
    description: "Engaging short-form content.",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      {/* HEADER */}
      <div className="xl:mb-17.5 mb-5 text-center mx-auto max-w-144.25">
        <p className="section-title">
          <SplitText text="Portfolio" delayStart={0} />
        </p>

        <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
          <SplitText
            text="Here is a curated selection of my recent promotional poster designs, crafted with a modern style to capture attention and create strong visual impact. Each design is also brought to life through short promotional videos, showcasing how static visuals can be transformed into engaging motion content."
            split="words"
            instant={true}
          />
        </p>
      </div>

      {/* IMAGE GRID */}
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
          {projectData.map((data) => (
            <Projects key={data.id} data={data} />
          ))}
        </div>
      </div>

      {/* VIDEO GRID */}
      <div className="mt-12">
        <div className="mx-auto flex justify-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
            {videoData.map((data) => (
              <div
                key={data.id}
                className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200 overflow-hidden"
              >
                {/* VIDEO */}
                <div className="w-full aspect-[9/16] overflow-hidden bg-black">
                  <video
                    src={`${import.meta.env.BASE_URL}assets/videos/${data.file}`}
                    className="w-full h-full object-cover"
                    controls
                    preload="metadata"
                    playsInline
                  />
                </div>

                {/* CONTENT */}
                <div className="p-4 xs:p-8">
                  <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
                    <SplitText
                      key={data.title}
                      text={data.title}
                      delayStart={0}
                    />
                  </p>

                  <p className="text-gray-600 text-xs xxs:text-[14px] text-wrap">
                    <SplitText
                      key={data.description}
                      text={data.description}
                      split="words"
                      delayStart={0}
                    />
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
