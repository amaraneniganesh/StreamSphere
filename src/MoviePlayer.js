import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "./App.css";

const MoviePlayer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const movie = location.state?.movie;
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isPartyMode, setIsPartyMode] = useState(false);

  if (!movie) {
    return (
      <div className="player-container">
        <h1>Movie not found!</h1>
        <a href="/" className="back-button">
          Go Back
        </a>
      </div>
    );
  }

  const toggleLight = () => {
    setIsDarkMode(!isDarkMode);
  };

  const togglePartyMode = () => {
    setIsPartyMode(!isPartyMode);
  };

  return (
    <div className={`player-container ${isDarkMode ? "lights-off" : ""}`}>
      <button onClick={() => navigate("/")} className="back-button">
        Back to Home
      </button>
      <button onClick={toggleLight} className="button-62">
        {isDarkMode ? "Turn On Light" : "Turn Off Light"}
      </button>
      <button onClick={togglePartyMode} className="party-btn">
        Party Mode
      </button>
      
        <h1>{movie.title.toUpperCase()}</h1>
        <h1>{movie.cast.hero} || {movie.cast.heroine} || {movie.cast.director}</h1>
        <div className={`video-container ${isPartyMode ? "party-effect" : ""}`}>
        <iframe 
          src={movie.link}
          width="800"
          height="450"
          allow="autoplay; fullscreen"
          title={movie.title}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default MoviePlayer;
