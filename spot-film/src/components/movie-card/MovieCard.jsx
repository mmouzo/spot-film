import React from "react";

import "./movie-card.scss";

import { Link } from "react-router-dom";

import Button from "../button/Button";

import { category } from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const MovieCard = (props) => {
  const item = props.item;

  const voteAverage = item.vote_average.toFixed(1);

  const link = "/" + category[props.category] + "/" + item.id;

  const bg = apiConfig.w500Image(item.poster_path || item.backdrop_path);

  const setVoteClass = (vote) => {
    if (vote >= 7.8) {
      return "green";
    }
    if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <Link to={link}>
      <div className="movie-card" style={{ backgroundImage: `url(${bg})` }}>
        <Button>
          <i className="bx bx-play"></i>
        </Button>
      </div>
      <div className="movie-info">
        <p>{item.title || item.name}</p>
        <span className={`tag ${setVoteClass(voteAverage)}`}>
          {voteAverage}
        </span>
      </div>
    </Link>
  );
};

export default MovieCard;
