import {
  FaFacebookF,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
  FaWhatsapp,
} from "react-icons/fa";
import FooterSection from "../footer-components/FooterSection";

const Socials = () => {
  const socialLinks = [
    {
      name: (
        <FaFacebookF />
      ),
      url: "https://www.facebook.com",
    },
    {
      name: (
        <FaTwitter  />
      ),
      url: "https://www.x.com",
    },
    {
      name: (
        <FaInstagram />
      ),
      url: "https://www.instagram.com",
    },
    {
      name: (
        <FaTiktok />
      ),
      url: "https://www.tiktok.com",
    },
    {
      name: (
        <FaYoutube />
      ),
      url: "https://www.youtube.com",
    },
    {
      name: (
        <FaWhatsapp />
      ),
      url: "https://www.whatsapp.com",
    },
  ];

  return (
    <FooterSection title="Connect with Us" links={socialLinks} isHorizontal />
  );
};

export default Socials;
