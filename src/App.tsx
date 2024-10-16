import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
// import Homepage from './pages/Homepage';

const App: React.FC = () => {
  return (
    <Router>
      <div className="App">
        {/* <Header /> */}
        <main>
          <Routes>
            {/* <Route path="/" element={<Homepage />} /> */}
            <Route path="/new-releases" element={<h1>New Releases</h1>} />
            <Route path="/genres" element={<h1>Genres</h1>} />
            <Route path="/deals" element={<h1>Deals</h1>} />
            {/* Add more routes as needed */}
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;