import React from 'react'
// import Threed from './hreed.jsx'
// import Loading from './Start.jsx'
// import Loading from './loading.jsx'
// import Hero from './hero.jsx'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./loading.jsx";
import MainPage from "./Template.jsx"; // Create a new component for the main page
import Home from "./home"; // Create a new component for the main page
import Hotel from "./hotel"; // Create a new component for the main page
import Fpu from "./Fpu.jsx"; // Create a new component for the main page
import Team from "./Team.jsx"; // Create a new component for the main page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/Template" element={<MainPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Hotel" element={<Hotel />} />
        <Route path="/Fpu" element={<Fpu />} />
        <Route path="/Team" element={<Team/>} />
      </Routes>
    </Router>
  );
}

export default App;
