import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-lg sm:text-xl md:text-2xl leading-relaxed max-w-2xl pb-8">
          Feel free to reach out to me directly on WhatsApp for quick and easy
          communication. I'm always open to discussing new projects and creative
          ideas
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          let’s connect and build something amazing together.
        </p>
        <a
          href="https://wa.me/082144959721"
          target="_blank"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
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
