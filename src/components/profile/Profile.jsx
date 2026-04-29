import person from "/assets/images/foto2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126 self-start">
          <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
            <img
              className="bg-soft-white h-[120%] object-cover"
              src={person}
              alt=""
            />
          </div>
          {/* Social media section */}
          <div className="relative bottom-9">
            <div className="flex justify-center">
              <div className="px-6 max-w-66 py-3 z-50 text-center bg-white rounded-[4px] center shadow-2xl drop-shadow-2xl shadow-white">
                <SocialMedia />
              </div>
            </div>
          </div>
        </div>

        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            About Me
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              Hello, my name is Ivan. I am originally from Atambua, Indonesia. I
              completed a five-year Bachelor's degree in Informatics Engineering
              at Widya Mandira Catholic University in Kupang.
            </p>
            <p className="mt-3">
              During my studies, I gained extensive knowledge and hands-on
              experience in technology, including software development, system
              management, and digital solutions. I developed strong
              problem-solving skills and a solid foundation in the IT field.
            </p>
            <p className="mt-3">
              In addition, I have one year of professional experience working as
              an IT Support staff in a government institution, where I was
              responsible for maintaining computer systems, troubleshooting
              technical issues, and supporting daily IT operations.
            </p>
            <p className="mt-3">
              I am passionate about creative digital work, with a strong focus
              on graphic design and video editing. I enjoy transforming ideas
              into visual content that is both engaging and meaningful. Through
              my projects, I have developed skills in visual storytelling,
              branding, and multimedia production.
            </p>
            <p className="mt-3">
              As a graphic designer, I create visually appealing designs such as
              social media content, posters, and branding materials. As a video
              editor, I focus on crafting smooth, impactful videos by combining
              footage, sound, and effects to deliver clear and compelling
              messages.
            </p>
            <p className="mt-3">
              I am continuously learning and improving my skills to keep up with
              industry trends and deliver high-quality results. I am open to new
              opportunities, collaborations, and creative challenges.
            </p>
          </div>
          <div className="mt-8 flex max-md:justify-center">
            <a
              className={`btn xxs:btn-lg px-6 max-xs:px-2 xxs:py-3 hover:border-picto-primary bg-white duration-300 transition-all hover:text-picto-primary  ms-4 text-xs xxs:text-[14px] sm:text-[16px]`}
              href="/assets/cv/jokowi.jpg"
              download="jokowi.jpg"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
