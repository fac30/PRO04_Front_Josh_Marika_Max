import NewsletterForm from "../NewsLetterForm";

const Footer = () => {
    return (
      <footer
      role="contentinfo"
      className="bg-background-footer text-text-primary py-8 w-full">
        
        <div className="ml-auto max-w-md mr-8">
        <NewsletterForm />
      </div>


        <p className="text-center">&copy; 2024 Font Hill Records. All rights reserved.</p>
        </footer>

    );
  };
  
  export default Footer;




