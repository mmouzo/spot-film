import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from "../../api/apiConfig";

const ProviderList = (props) => {
  const { category, id } = useParams();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProviders = async () => {
      const response = await tmdbApi.providers(category, id);
      const apiObject = response.results["ES"];
      const providers = []
        .concat(apiObject["flatrate"])
        .concat(apiObject["rent"])
        .filter((e) => !!e);
      setProviders(providers);
    };
    getProviders();
  
  }, [category, id]);


  if (providers.length === 0) {
    return <p>Not available for sale, on streaming or rental platforms</p>;
  } else {
    return (
      <div className="provider">
        {providers.map((item, index) => (
         
          <div key={index} className="provider__item">
            <div
              className="provider__item__img"
              style={{
                backgroundImage: `url(${apiConfig.originalImage(
                  item.logo_path
                )})`,
              }}
            ></div>
            <p className="crew__item__name">{item.provider_name}</p>
          </div>
        ))}
      </div>
    );
  }
};

export default ProviderList;
