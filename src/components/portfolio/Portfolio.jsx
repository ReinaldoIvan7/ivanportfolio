import Projects from "./Projects";
import card1 from "/assets/images/portfolio-images/download 1.jpg";
import card2 from "/assets/images/portfolio-images/download 2.jpg";
import card3 from "/assets/images/portfolio-images/download 3.jpg";
import card4 from "/assets/images/portfolio-images/download 4.jpg";
import SplitText from "@/components/library/SplitText";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "",
    title: "Promotional Design",
    description:
      "I focus on crafting smooth, responsive interfaces that balance aesthetic appeal with practical functionality.",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "",
    title: "Promotional Design",
    description:
      "I specialize in designing promotional content that highlights product value, enhances brand identity, and drives customer engagement.",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "",
    title: "Promotional Design",
    description:
      "I create visually compelling promotional designs that transform ideas into impactful marketing visuals that capture attention instantly.",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "",
    title: "Promotional Design",
    description:
      "I design promotional visuals that effectively communicate product benefits through clean, modern, and engaging visuals.",
    link: "#!",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title">
            <SplitText text="Portfolio" delayStart={0} />
          </p>

          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            <SplitText
              text={`Here's a selection of my recent work, showcasing my skills in creating user-centric and visually appealing interfaces.`}
              split="words"
              animation="fadeUp"
              instant={true}
            />
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-6">
          {projectData.slice(0, 4).map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      {/* VIDEO */}
      <div className="mt-12 flex justify-center">
        <div className="w-full max-w-3xl rounded-lg overflow-hidden shadow-gray-300 border border-gray-200 hover:shadow-2xl transition-all duration-300">
          <div className="w-full aspect-video">
            <iframe
              src="https://youtube.com/embed/bttxwkGn_24?si=CUjBNrqpuXfy7YK4"
              title="YouTube video"
              className="w-full h-full"
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>

          {/* 🔥 VIDEO TEXT */}
          <div className="p-4 xs:p-6 text-center">
            <p className="text-gray-900 text-lg font-semibold">
              <SplitText text="My Video Project" delayStart={0} />
            </p>

            <p className="text-gray-600 text-sm mt-2">
              <SplitText
                text="A showcase of my video editing work."
                split="words"
                delayStart={0}
              />
            </p>
          </div>
        </div>
      </div>

      <div className="text-center">{/* button tetap */}</div>
    </div>
  );
};

export default Portfolio;
