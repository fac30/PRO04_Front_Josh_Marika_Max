import NewsletterForm from "../NewsLetterForm";
import Socials from "../../footer-components/Socials";

const Footer = () => {
  return (
    <footer
      role="contentinfo"
      className="bg-background-footer text-text-primary py-8 w-full"
    >
      <div className="flex flex-col justify-between items-center mx-auto max-w-6xl px-4">
        <div className="max-w-md w-full mb-11 md:mr-8">
          <NewsletterForm />
        </div>

        {/* Socials */}
        <div className="mb-4 md:mb-0">
          <Socials />
        </div>
      </div>

      {/* Footer Text */}
      <p className="text-center mt-4">
        &copy; 2024 Font Hill Records. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
