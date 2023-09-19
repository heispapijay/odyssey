import React, { useEffect, useState } from 'react';
import './header.css';
import heroimg from '../../assets/heroimg.png';
import astronaut from '../../assets/astronaut.png';
import stopwatch from '../../assets/stopwatch.svg'

export default function Header() {
  const [count, setCount] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const calculateTimeDifference = () => {
      // Calculate the difference between the current date and 2010-01-01
      const startDate = new Date(2023, 0, 1); // January is 0-indexed
      const currentDate = new Date();

      const timeDifference = currentDate - startDate;

      // Calculate days, hours, minutes, and seconds
      const oneDay = 24 * 60 * 60 * 1000;
      const oneHour = 60 * 60 * 1000;
      const oneMinute = 60 * 1000;
      const oneSecond = 1000;

      const days = Math.floor(timeDifference / oneDay);
      const hours = Math.floor((timeDifference % oneDay) / oneHour);
      const minutes = Math.floor((timeDifference % oneHour) / oneMinute);
      const seconds = Math.floor((timeDifference % oneMinute) / oneSecond);

      setCount({ days, hours, minutes, seconds });
    };

    // Calculate time difference immediately
    calculateTimeDifference();

    // Update the time every 1 second
    const interval = setInterval(calculateTimeDifference, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="header">
      <div className="header-top">
        <div className="header-image">
          <img src={heroimg} alt="Header" />
          <div className="text-overlay">
            <p>Unveiling the <br /> Wonders of <br /> the Universe</p>
          </div>
        </div>
        <div className="astro_container">
          <div className="container-inner">
            <div className="image-box">
              <img src={astronaut} alt="astronaut" />
              <div className="floating-cards">
                {/* Floating cards content */}
              </div>
            </div>
            <div className="bottom-card">
              <div className="card">
                <div className="card__content">
                <div className="card__icon">
                  <img src={stopwatch} alt='stopwatchicon'/>
                </div>
                  <h3 className="card__title">Total time in space</h3>
                  <p className="card__subtext">
                  {count.days}D {count.hours}H {count.minutes}M {count.seconds}S
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="left-section">
          <div className="left-section-inner">
            <p>At odissey, our mission is to inspire, educate, and ignite
              your passion for the cosmos. We are your premier destination
              for all things related to space exploration, astronomy, and
              the mysteries of the universe. Whether you're a seasoned astronomer
              or a curious novice, join us on a journey to the furthest reaches
              of the cosmos. </p>
            <button className="get-started-button">Get Started</button>
          </div>
        </div>
      </div>
    </header>
  );
};

