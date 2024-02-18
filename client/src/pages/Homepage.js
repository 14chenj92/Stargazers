import React from "react";
import HomeCard from "../components/Card";
import "../styles/Homepage.css";
import Footer from '../components/Footer';
import starTalkIcon from "../images/startalk-icon.svg"
import moonPhaseIcon from "../images/moonphase-icon.svg"
import starChartIcon from "../images/starchart-icon.svg"


const Homepage = () => {
  return (
    <div className="homepage">
        <div className="welcome-container">
        <h2> Welcome! </h2>
        <h3> Explore with Us! </h3>
        <div className="homebox">
        <div className="hometext">
        <p>Discuss your favorite stars with us...</p>
        <p>Try out our moonphases API...</p>
        <p>Try out our starcharts API...</p>
        </div>
        </div>
        </div>
        <div className="homepageCards"> 
        <HomeCard
          title="Star Talk"
          description="Talk and comment about stars with others!"
          link="/stars"
          icon={starTalkIcon}
        />
        <HomeCard
          title="Horoscopes"
          description="Enter your zodiac sign and see your horoscope!"
          link="/horoscopes"
          icon={starTalkIcon}
        />
        <HomeCard
          title="Moon Phases"
          description="Enter your location to see moonphases!"
          link="/moonphases"
          icon={moonPhaseIcon}
        />
        <HomeCard
          title="Star Charts"
          description="Enter your location to see constellations!"
          link="/starcharts"
          icon={starChartIcon}
        />
        </div>
      <Footer />
    </div>
  );
};
export default Homepage;