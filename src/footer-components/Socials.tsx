import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';
import FooterSection from "../footer-components/FooterSection";

const Socials = () => {
  const socialLinks = [
    { name: <FaFacebookF className="text-text-primary hover:text-white transition-colors duration-300" />, url: "https://www.facebook.com" },
    { name: <FaTwitter className="text-text-primary hover:text-white transition-colors duration-300" />, url: "https://www.x.com" },
    { name: <FaInstagram className="text-text-primary hover:text-white transition-colors duration-300" />, url: "https://www.instagram.com" },
    { name: <FaTiktok className="text-text-primary hover:text-white transition-colors duration-300" />, url: "https://www.tiktok.com" },
    { name: <FaYoutube className="text-text-primary hover:text-white transition-colors duration-300" />, url: "https://www.youtube.com" },
    { name: <FaWhatsapp className="text-text-primary hover:text-white transition-colors duration-300" />, url: "https://www.whatsapp.com" },
  ];

  return (
    <FooterSection title="Connect with Us" links={socialLinks} isHorizontal />
  );
};

export default Socials;

