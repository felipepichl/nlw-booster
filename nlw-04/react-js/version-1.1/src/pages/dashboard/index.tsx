import React from 'react';

import Head from 'next/head';
import { CountdownProvider } from '../../contexts/CountdownContext';

import {
  Container,
  LeftContainer,
  RightContainer,
} from '../../styles/pages/Dashboard';

import ExperienceBar from '../../components/ExperienceBar';
import Profile from '../../components/Profile';
import CompletedChallenges from '../../components/CompletedChallanges';
import Countdown from '../../components/Countdown';
import ChallangeBox from '../../components/ChallangeBox';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>Inicio | move.it</title>
      </Head>

      <ExperienceBar />

      <CountdownProvider>
        <section>
          <LeftContainer>
            <Profile />
            <CompletedChallenges />
            <Countdown />
          </LeftContainer>

          <RightContainer>
            <ChallangeBox />
          </RightContainer>
        </section>
      </CountdownProvider>
    </Container>
  );
};

export default Dashboard;
