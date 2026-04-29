import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Web Design",
    description:
      "I create modern and responsive website designs that focus on user experience, clean layouts, and visually appealing interfaces tailored to your brand.",
  },
  {
    id: 2,
    title: "Video Editing",
    description:
      "I produce high-quality video edits with smooth transitions, color grading, and sound design to deliver engaging and professional visual content.",
  },
  {
    id: 3,
    title: "Graphic Design",
    description:
      "I design creative visual content such as social media posts, posters, and branding materials that communicate messages clearly and attract attention.",
  },
  {
    id: 4,
    title: "Tools",
    description:
      "I use industry-standard tools like Adobe Photoshop, Capcut, Snapseed, Canva, and Figma to create high-quality digital content.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I provide graphic design and video editing services that focus on
            creating visually compelling and meaningful content. My work
            includes designing promotional materials such as posters, social
            media graphics, and branding visuals that help communicate ideas
            clearly and attract attention,
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            In video editing, I create engaging and dynamic content by combining
            storytelling, smooth transitions, and clean visual aesthetics. I aim
            to deliver high-quality results that not only look professional but
            also effectively convey messages and leave a lasting impression.
          </p>
        </div>
        <a
          href="mailto:ivanmanek06@gmail.com"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Say Hello!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
