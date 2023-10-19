import React from 'react';
import './explore.css';
import explore from '../../assets/explorebg.png'
import ExploreCard from '../../components/card/ExploreCard'

function Explore() {
    return (
        <div className="explore">
            <div className="explore-top">
                <div className="explore-image">
                    <img src={explore} alt="explorer" />
                    <div className="text-overlay2">
                        <p>We are committed to making space science accessible to all. Explore our educational resources, including</p>
                    </div>
                </div>
                <div className="explore_bottom-section">
                    <ExploreCard
                        number="01."
                        title="Online free courses and tutorials"
                        description="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
                    />

                    <ExploreCard
                        number="02."
                        title="Resources for teachers and educators"
                        description="Delve into the cutting-edge technology powering space exploration, from spacecraft and telescopes to propulsion systems and space habitats."
                    />

                    <ExploreCard
                        number="03."
                        title="Book recommendations and reviews"
                        description="Dive into the basics of astronomy. Learn about stars, planets, galaxies, and the tools astronomers use to explore the universe."
                    />
                </div>

            </div>
        </div>
    )
}

export default Explore
