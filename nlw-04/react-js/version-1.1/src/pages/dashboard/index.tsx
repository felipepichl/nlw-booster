import React from 'react';

import { Container, LeftContainer } from '../../styles/pages/Dashboard';

import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallaneges';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />

      <section>
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
        </LeftContainer>
      </section>
    </Container>
  );
};

export default Dashboard;
