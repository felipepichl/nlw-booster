import React, { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';

import { Container } from '../styles/components/CompletedChallenges';

const CompletedChallenges: React.FC = () => {
  const { challangesCompleted } = useContext(ChallengesContext);

  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challangesCompleted}</span>
    </Container>
  );
};

export default CompletedChallenges;
