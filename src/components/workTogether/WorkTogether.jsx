import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SplitText from "@/components/library/SplitText";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        {/* TEXT UTAMA */}
        <p className="text-white md:font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl pb-8 mx-auto">
          <SplitText
            text="Feel free to reach out to me directly on WhatsApp for quick and easy communication. I'm always open to discussing new projects and creative ideas"
            split="words"
            animation="fadeUp"
            instant={true}
          />
        </p>

        {/* SUBTEXT */}
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          <SplitText
            text="let’s connect and build something amazing together."
            split="words"
            delayStart={0}
          />
        </p>

        {/* BUTTON */}
        <a
          href="https://wa.me/6282144959721?text=Hello%2C%0AWe%20have%20reviewed%20your%20graphic%20design%20portfolio,%20and%20would%20like%20to%20discuss%20a%20possible%20opportunity%20with%20you."
          target="_blank"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px] inline-flex items-center justify-center"
        >
          Chat on WhatsApp
          <FontAwesomeIcon
            icon={faWhatsapp}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
