import React from "react";
import { Link } from "react-router-dom";

const Podcastlistitem = ({ podcastdata }) => {    
  return (
    <div className="podcast-item-wrapper">
      <Link to={`/podcast/${podcastdata.id}`} className="view-more">
        View Detail
      </Link>
      <img src={podcastdata.thumbnail} alt={podcastdata.title} />
      <div className="podcast-title">{podcastdata.title}</div>
      <Link to={`/podcast/${podcastdata.id}`} className="view-more-to-listen">
        Listen Now
      </Link>
    </div>
  );
};

export default Podcastlistitem;
