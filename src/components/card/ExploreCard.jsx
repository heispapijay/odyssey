import React from 'react';
import './explorecard.css';

export default function ExploreCard({ number, title, description }) {
  return (
    <div className="explore_list">
      {/* <img src={imageSrc} alt={title} className="community_images" /> */}
      <h1 className="explore_number">{number}</h1>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}