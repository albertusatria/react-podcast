import React from "react";

const Datasource = async url => {
  const urlFetch = await fetch(url);
  return urlFetch.status === 200 && "json" in urlFetch
    ? await urlFetch.json()
    : [];
};

export default Datasource;
