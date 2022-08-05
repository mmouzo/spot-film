import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

import "../datail/detail.scss";

const Detail = () => {
  const { category, id } = useParams();

  const [item, setItem] = useState(null);

  useEffect(() => {
    const getDetail = async () => {
      const response = await tmdbApi.detail(category, id, { params: {} });
      setItem(response);
      window.scrollTo(0, 0);
    };

    getDetail();
  }, [category, id]);

  return (
    <>
      {item && (
        <>
          <div
            className="banner"
            style={{
              backgroundImage: `url(${apiConfig.originalImage(
                item.backdrop_path || item.poster_path
              )})`,
            }}
          ></div>
          <div className="mb-3 movie-content container">
            <div className="movie-content__poster">
              <div
                className="movie-content__poster__img"
                style={{
                  backgroundImage: `url(${apiConfig.originalImage(
                    item.poster_path || item.backdrop_path
                  )})`,
                }}
               
              ></div>
            </div>
            <div className="movie-content__info">
              <div className="title">
                {item.title || item.name}
              </div>
              <div className="genres">
                {item.genres && item.genres.slice(0,5).map((genre, index) => (
                  <span className="genres__item" key={index}>{genre.name}</span>
                ))}
              </div>
              <p className="overview">{item.overview}</p>
              <div className="cats">
                <div className="section__header">
                  <h2>Cast</h2>
                </div>
                {/*castlist*/}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Detail;
