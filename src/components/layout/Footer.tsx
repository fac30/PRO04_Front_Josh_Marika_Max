import NewsletterForm from "../NewsLetterForm";
import Socials from "../../footer-components/Socials"

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-background-footer text-text-primary py-8 w-full"
    >
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto max-w-6xl px-4">
        {/* Newsletter Form Section */}
        <div className="ml-auto max-w-md w-full mb-4 md:mb-0 md:mr-8">
          <NewsletterForm />
        </div>

        {/* Social Media Links Section */}
        <div className="mb-4 md:mb-0">
          <Socials />
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center mt-4">&copy; 2024 Font Hill Records. All rights reserved.</p>
    </footer>
  );
};

export default Footer;







