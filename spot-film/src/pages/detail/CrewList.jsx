import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const CrewList = (props) => {
  const { category } = useParams();

  const [crew, setCrew] = useState([]);

   

  useEffect(() => {
    const getCrew = async () => {
      const response = await tmdbApi.credits(category, props.id);
      setCrew(
        response.crew.filter(
          ({ job }) =>
            job === "Director" ||
            job === "Original Music Composer" ||
            job === "Director of Photography" ||
            job === "Screenplay"
        )
      );
    };
    getCrew();
  }, [category, props.id]);

if(crew.length === 0 || crew === null) {
  return (
  <div className="not_avaliable">
    <p>Information not available</p>
  </div>
  );
}

  return (
    <div className="crew">
      {crew.map((item, index) => (


        <div key={index} className="crew__item">
          <div
            className="crew__item__img"
            style={{
              backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})` 
            }}
          ></div>
           <strong className="crew__item__name">{item.job}:</strong>
          <p className="crew__item__name">{item.name}</p>
        </div>
      ))}
    </div>
  );
};

export default CrewList;
