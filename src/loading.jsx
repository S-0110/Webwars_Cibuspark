import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import video from "./assets/bgvideo.mp4";
import "./css/loading.css";

const Loading = () => {
  const navigate = useNavigate();
  const [showLoading, setShowLoading] = useState(true);

  useEffect(() => {
    // Check if the user has already seen the loading screen
    const hasSeenLoading = sessionStorage.getItem("hasSeenLoading");

    if (hasSeenLoading) {
      navigate("/Template"); // Redirect to main page immediately
    } else {
      setShowLoading(true);
    }
  }, [navigate]);

  const handleStart = () => {
    sessionStorage.setItem("hasSeenLoading", "true"); // Save state in session
    navigate("/Template"); // Redirect to main page
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Enter") {
        handleStart();
      }
    };
    window.addEventListener("keydown", handleKeyPress);
    return () => {
      window.removeEventListener("keydown", handleKeyPress);
    };
  }, []);

  return (
    showLoading && (
      <div className="loading-container">
        <video autoPlay loop muted className="background-video">
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="overlay">
          <h1 className="title">cibuspark</h1>
          <button className="start-button" onClick={handleStart}>Start</button>
        </div>
      </div>
    )
  );
};

export default Loading;
