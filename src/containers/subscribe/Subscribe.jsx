import React from 'react';
import './subscribe.css';
import background from '../../assets/subscribebg.png';

export default function Subscribe() {
    return (
        <div>
            <div className="subscribe" style={{
                backgroundImage: `url(${background})`,
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
            }}>
                <div className="subscribe-top">
                    <div className="subscribe_bottom-section">
                        <div className="subscribe_list">
                            <div className="subscribe_list-text">
                                <h1>Join our community</h1>
                                <p>of stargazers, explorers, and cosmic enthusiasts as we embark on a journey through the cosmos like never before.</p>
                            </div><div className="subscribe_input">
                                <input id="emailInput" type="text" placeholder="Enter your email" />
                                <button>Subscribe</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


