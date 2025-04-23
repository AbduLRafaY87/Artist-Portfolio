import React from 'react';
// import './Sidebar.css';
import Adeena from '/assets/adeena.jpeg'

const Sidebar = () => {
  return (
    <div>
      <div className="image">
        <img src={Adeena} alt="Adeena Sajjad" />
      </div>
      <div className="name">
        <p>Name</p>
        <p>Adeena Sajjad</p>
      </div>
      <div className="bio">
        <p>Bio</p>
        <p>I’m a sketch artist specializing in detailed, realistic portraits and conceptual illustrations.I work primarily with charcoal and graphite, focusing on creating striking contrasts and textures that evoke a sense of depth and movement.I’m inspired by the human form and the subtle nuances of emotion that it can convey, especially through facial expressions.I’m a self-taught artist with a deep love for experimenting with new techniques, always striving to push my own boundaries. <br />Check out my portfolio and follow me on Instagram to see new sketches as I create them! </p>
      </div>
      <div className="happy-clients">
        <p>My Happy Clients: 30 +</p>
      </div>
      <div className="projects-done">
        <p>Successful Projects: 45 +</p>
      </div>
    </div>
  );
};

export default Sidebar;
