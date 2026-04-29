import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faTiktok,
  faTwitter,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faFacebookF, link: "https://www.facebook.com/rynaldo.ivan/" },
  {
    icon: faTiktok,
    link: "https://www.tiktok.com/@ivn7._?_r=1&_t=ZS-95wdmVzilyX",
  },
  {
    icon: faInstagram,
    link: "https://www.instagram.com/rvnm7__?igsh=OWrdmFrajRv&utm_source=qr",
  },
  { icon: faXTwitter, link: "https://www.x.com/ReinaldoIvan5" },
  {
    icon: faYoutube,
    link: "https://www.youtube.com/@reinaldoivan6192?si=ViDbQR8a70ZF2gPL",
  },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
