import React from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import CityPage from './pages/CityPage/CityPage';
import Favorites from './pages/Favorites/Favorites';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App: React.FC = () => {
  return (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
         <Route path="/city/:cityName" element={<CityPage />} />
         <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </Router>
  </>
  );
}

export default App;
