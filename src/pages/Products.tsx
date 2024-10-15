interface HomepageProps {
  count: number; // Accept count as a prop
  goBack: () => void; // Function to go back to the main page
}

function Homepage({ count, goBack }: HomepageProps) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-blue-600 py-8">
        Welcome to the Vinyl Shop
      </h1>
      <p className="text-center">Current count: {count}</p>
      <button onClick={goBack} className="mt-4">Back to Main Page</button> {/* Button to go back */}
    </div>
  );
}

export default Homepage;
