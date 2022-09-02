import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";

const ProviderList = (props) => {
  const { category } = useParams();

  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProviders = async () => {
      const response = await tmdbApi.providers(category, props.id);
      setProviders(response.results);
    };
    getProviders();
  }, [category, props.id]);

  return (
    <>
      {providers.map((item, index) => (
        <Provider key={index} item={item}></Provider>
      ))}
    </>
  );
};

const Provider = (props) => {
  const item = props.item;

  return (
    <div className="video">
      <div className="video__title">
        <h2>{item.provider_name}</h2>
      </div>
    </div>
  );
};

export default ProviderList;