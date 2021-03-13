import React from 'react';

import { Container, LeftContainer } from '../../styles/pages/Dashboard';

import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <LeftContainer>
          <Profile />
        </LeftContainer>
      </section>
    </Container>
  );
};

export default Dashboard;
