import React from 'react';

import { Container } from '../../styles/pages/Dashboard';

import ExperienceBar from '../../components/ExperienceBar';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <ExperienceBar />
    </Container>
  );
};

export default Dashboard;
