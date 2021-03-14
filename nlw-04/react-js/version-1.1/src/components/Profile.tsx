import React from 'react';

import { Container } from '../styles/components/Profile';

const Profile: React.FC = () => {
  return (
    <Container>
      <img
        src="https://avatars.githubusercontent.com/u/22602639?s=400&u=2c1bec46e256602d1dd5f173b152233fc58f2855&v=4"
        alt="Profile"
      />
      <div>
        <strong>Felipe Pichl</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </Container>
  );
};

export default Profile;
