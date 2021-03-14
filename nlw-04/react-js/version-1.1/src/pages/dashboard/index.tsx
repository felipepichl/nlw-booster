import React from 'react';

import Head from 'next/head';

import { Container, LeftContainer } from '../../styles/pages/Dashboard';

import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallaneges';
import Countdown from '../../components/Countdown';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <section>
        <LeftContainer>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </LeftContainer>
      </section>
    </Container>
  );
};

export default Dashboard;
