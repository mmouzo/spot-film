import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

import tmdbApi from "../../api/tmdbApi";
import apiConfig from '../../api/apiConfig';

const ProviderList = (props) => {
  const { category, id } = useParams();
  const [providers, setProviders] = useState([]);

  useEffect(() => {
    const getProviders = async () => {
      const response = await tmdbApi.providers(category, id);
      const apiObject = response.results['ES'];
      const providers = [].concat(apiObject['flatrate'])
        .concat(apiObject['rent']).concat(apiObject['buy']).filter(e => !!e);
      setProviders(providers);
    };
    getProviders();
  }, [category, id]);

  return (
    <>
      {providers.map((item, index) => (
          <Provider key={index} item={item}></Provider>
      ))}
    </>
  );
};

const Provider = ({item}) => {
  return (
    <div className="video">
      <div className="video__title">
        <img src={apiConfig.originalImage(item.logo_path)} alt="" /> 
        <h2>{item.provider_name}</h2>
      </div>
    </div>
  );
};

export default ProviderList;