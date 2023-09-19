import React from 'react';
import './community.css';
import physics from '../../assets/physics.png';

export default function Community() {
  return (
    <div children="community">
        <div className="community_left-section padding_body">
            <div className="forspace">
                <h2 className='community_title-text'>
                Join our vibrant 
                community of space enthusiasts where 
                you can
                </h2>
            </div>
            <div className="community_right-section">
                <div className="community_list">
                    <img src={physics} alt='hwlo' className="community_images"/>
                    <h3>Astronomy 101</h3>
                    <p>Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
                </div>
                <div className="community_list">
                    <img src={physics} alt='hwlo' className="community_images"/>
                    <h3>Astronomy 101</h3>
                    <p>Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe.</p>
                </div>
            </div>
        </div>
    </div>
  )
}


