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
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis blanditiis veniam fuga obcaecati adipisci distinctio illo sed voluptates quibusdam? Veniam?</p>
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
