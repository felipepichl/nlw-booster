import React, { createContext, useState, ReactNode } from 'react';
import challenges from '../../challenges.json';

interface Challenge {
  type: 'body' | 'eye';
  description: string;
  amount: number;
}

interface ChallengesCOntextData {
  levelUp: () => void;
  level: number;
  currenceExperience: number;
  challangesCompleted: number;
  activeChallenge: Challenge;
  startNewCallenge: () => void;
}

interface ChallengesProviderProps {
  children: ReactNode;
}

export const ChallengesContext = createContext({} as ChallengesCOntextData);

export function ChallengesProvider({ children }: ChallengesProviderProps) {
  const [level, setLevel] = useState(1);
  const [currenceExperience, setCurrenceExperience] = useState(0);
  const [challangesCompleted, setChallangesCompleted] = useState(0);

  const [activeChallenge, setActiveChallenge] = useState(null);

  function levelUp() {
    setLevel(level + 1);
  }

  function startNewCallenge() {
    const randomChallengesIndex = Math.floor(Math.random() * challenges.length);

    const challenge = challenges[randomChallengesIndex];

    setActiveChallenge(challenge);
  }

  return (
    <ChallengesContext.Provider
      value={{
        levelUp,
        level,
        currenceExperience,
        challangesCompleted,
        activeChallenge,
        startNewCallenge,
      }}
    >
      {children}
    </ChallengesContext.Provider>
  );
}
