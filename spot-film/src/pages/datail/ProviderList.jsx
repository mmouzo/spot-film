import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import apiConfig from "../../api/apiConfig";
import tmdbApi from "../../api/tmdbApi";

const ProviderList = (props) => {

    const { category } = useParams();

    const [providers, setProviders] = useState([]);

    useEffect(() => {
        const getProviders = async () => {
          const response = await tmdbApi.providers(category, props.id);
          setProviders(response.cast.slice(0, 8));
        };
        getProviders();
      }, [category, props.id]);
      return (
        <div className="casts">
          {providers.map((item, i) => (
            <div key={i} className="casts__item">
              <div
                className="casts__item__img"
                style={{
                  backgroundImage: `url(${apiConfig.w500Image(item.profile_path)})`,
                }}
              ></div>
              <p className="casts__item__name">{item.name}</p>
            </div>
          ))}
        </div>
      );
    };

export default ProviderList