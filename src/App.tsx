import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
// import Header from './components/Header';
import Homepage from './pages/Homepage';

const App = () => {
  return (
    <Router>
    <Routes>
      <Route path="/" element={<Homepage />} />
      {/* Add other routes */}
    </Routes>
  </Router>
  );
}

export default App;

