import React from 'react';

export default function CommunityListItem({ imageSrc, title, description }) {
  return (
    <div className="community_list">
      <img src={imageSrc} alt={title} className="community_images" />
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}
