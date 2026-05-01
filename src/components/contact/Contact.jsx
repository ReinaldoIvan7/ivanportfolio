import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";
import SplitText from "@/components/library/SplitText";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "East Nusa Tenggara, Atambua",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "ivanmanek06@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+62 821-4495-9721",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              {/* TITLE DESKTOP */}
              <p className="text-[35px] max-lg:hidden font-semibold text-[#132238] max-w-3xl leading-tight">
                <SplitText text="Let’s discuss collaboration" delayStart={0} />
              </p>

              {/* DESCRIPTION */}
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark max-w-2xl leading-relaxed">
                <SplitText
                  text="I am available for graphic design roles and open to contributing my skills in creating impactful and visually engaging designs. I would welcome the opportunity to be part of your team."
                  split="words"
                  animation="fadeUp"
                  instant={true}
                />
              </p>
            </div>

            {/* ADDRESS LIST */}
            <div className="my-8.75 sm:max-lg:flex justify-between items-center">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            {/* SOCIAL */}
            <div className="w-full max-lg:text-center max-md:mb-4">
              <SocialMedia />
            </div>
          </div>

          {/* FORM SIDE */}
          <div className="w-full overflow-y-scroll py-6.5">
            {/* TITLE MOBILE */}
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              <SplitText
                text="Let’s discuss your Project"
                animation="fadeUp"
                instant={true}
              />
            </p>

            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
