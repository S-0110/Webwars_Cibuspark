import React from 'react'
// import Threed from './hreed.jsx'
// import Loading from './Start.jsx'
// import Loading from './loading.jsx'
// import Hero from './hero.jsx'


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Loading from "./loading.jsx";
import MainPage from "./Template.jsx"; // Create a new component for the main page

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Loading />} />
        <Route path="/Template" element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
