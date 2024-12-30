interface Link {
  url: string;
  name: React.ReactNode;
}

interface FooterSectionProps {
  title: string;
  links: Link[];
  isHorizontal: boolean;
}


const FooterSection = ({ title, links, isHorizontal }: FooterSectionProps) => {
  return (
    <div className="footer-section text-black">
      <h3 className="text-lg font-bold mb-4">{title}</h3>
      <div className={isHorizontal ? 'flex space-x-4' : 'flex flex-col space-y-2'}>
        {links.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl"
          >
            {link.name}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterSection;
