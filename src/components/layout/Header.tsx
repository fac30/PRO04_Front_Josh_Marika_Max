import Logo from "../common/Logo";

const Header = () => {
  return (
    <div className="min-h-screen bg-gray-100 w-full flex flex-col">
      {/* Header */}
      <header className="bg-white p-4 shadow">
        <div className="flex justify-between items-center p-4">
          <Logo aria-label="Font Hill Records logo" />
        </div>
      </header>
    </div>
  );
};

export default Header;
