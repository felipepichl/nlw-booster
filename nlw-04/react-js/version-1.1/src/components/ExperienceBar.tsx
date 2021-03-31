import React, { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import {
  Container,
  CurrentExperience,
} from '../styles/components/ExperienceBar';

const ExperienceBar: React.FC = () => {
  const { currenceExperience, experienceToNextLevel } = useContext(
    ChallengesContext,
  );

  const percentToNextLevel =
    Math.round(currenceExperience * 100) / experienceToNextLevel;

  return (
    <Container>
      <span>0 xp</span>
      <div>
        <div style={{ width: `${percentToNextLevel}%` }} />

        <CurrentExperience style={{ left: `${percentToNextLevel}%` }}>
          {currenceExperience}xp
        </CurrentExperience>
      </div>
      <span>{experienceToNextLevel} xp</span>
    </Container>
  );
};

export default ExperienceBar;
