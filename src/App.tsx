import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        
      </Routes>
    </Router>
  </>
  );
}

export default App;
