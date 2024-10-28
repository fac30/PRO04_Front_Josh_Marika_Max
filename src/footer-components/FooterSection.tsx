interface Link {
  url: string;
  name: React.ReactNode;
}

interface FooterSectionProps {
  title: string;
  links: Link[];
  isHorizontal: boolean;
}


const FooterSection: React.FC<FooterSectionProps> = ({ title, links, isHorizontal }) => {
  return (
    <div className="footer-section">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className={isHorizontal ? 'flex space-x-4' : 'flex flex-col space-y-2'}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-primary hover:text-background-footer transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
