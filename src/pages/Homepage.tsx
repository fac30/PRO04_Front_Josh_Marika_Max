// import Navbar from './Navbar';
import Button from '../components/common/Button'; 
import Logo from '../components/common/Logo'; 


const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      {/* <Navbar /> */}
      
      <main className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <Logo />
          <h1 className="text-4xl font-bold mb-4">Welcome to Font Hill Records</h1>
          <p className="text-xl mb-6">Discover and collect your favorite vinyl records</p>
        
        </header>

        <Button  text="Shop Now"></Button>

        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">New on Store</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {/* Add your New on Store items here */}
          </div>
        </section>

      </main>

      <footer className="bg-gray-800 text-white py-8">
        <div className="container mx-auto px-4">
            <p>Footer</p>
          {/* Add your footer components */}
        </div>
      </footer>
    </div>
  );
};

export default HomePage;