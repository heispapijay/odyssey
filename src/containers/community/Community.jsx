import React from 'react';
import './community.css';
import physics from '../../assets/physics.png';
import clipboard from '../../assets/clipboard.png';
import chartpie from '../../assets/chart-pie.png';
import telescope from '../../assets/telescope.png';
import CommunityListItem from '../../components/card/CommuityList';

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
                    <CommunityListItem
                        imageSrc={physics} // Replace with your image source
                        title="Astronomy 101"
                        description="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
                    />

                    <CommunityListItem
                        imageSrc={clipboard} // Replace with your image source
                        title="Latest Discoveries"
                        description="Stay up-to-date with the most recent breakthroughs and discoveries in the field of astrophysics and space exploration."
                    />
                </div>
                <div className="community_right-section below">
                    <CommunityListItem
                        imageSrc={telescope} // Replace with your image source
                        title="Sapce Exploration"
                        description="Explore the latest missions, both past and present, from NASA, ESA, SpaceX, and other space agencies and organizations."
                    />

                    <CommunityListItem
                        imageSrc={chartpie} // Replace with your image source
                        title="Space Technology"
                        description="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats."
                    />
                </div>
            </div>
        </div>
    )
}


